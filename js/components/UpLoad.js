import React, {Component} from "react";
import {Toast} from 'antd-mobile';
import {
  View,
  ScrollView,
  Image,
  Alert,
  Text,
  Keyboard,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  DeviceEventEmitter,
  findNodeHandle
} from 'react-native';
import Picker from 'react-native-picker';
import {API, server} from "js/config/api";
import ImageResizer from 'react-native-image-resizer';
import ImagePicker from 'react-native-image-crop-picker';
import ActionSheet from 'react-native-actionsheet'
import {NavigationActions} from 'react-navigation'
import {handleImagePickError,} from "js/utils/imageUtils";
import {hidePicker} from "../../utils/pickerUtils";

const deviceWidth = Dimensions.get('window').width;
const deviceWHeight = Dimensions.get('window').height;
const options = ['取消', '从相册选取', '拍照',];
const cols = 4;
const CANCEL_INDEX = 0;
const vMargin = (deviceWidth - 30 - 40) / cols;
const compressImgWidth = 1280;
const compressImgHeight = 1280;
const initState = {isInit: true,};
export default class PolyUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: this.props.fileList || this.props.defaultFileList||(this.props.value && this.props.value.fileList) || [], //[{id, name, path }],图片上传后带id、name、path的list
      fileDataList: this.props.defaultFileList ||[], //[{uri,}]，本地图片的list
      uploading: false,
      ...initState,
    }
  }


  static propTypes = {
    max: React.PropTypes.number,//可选的最大数量
    navigation: React.PropTypes.any,//navigation
    defaultFileList: React.PropTypes.array,//初始化显示的图片[id,name,uri]
    onChange: React.PropTypes.func,
    onReset: React.PropTypes.func,

  }

  onChange = () => {
    this.props.onChange({
      fileList: this.state.fileList,
      uploading: this.state.uploading
    });
  };
  onReset = ()=>{
    this.props.onReset && this.props.onReset();
  }




  componentWillReceiveProps(nextProps) {
    const isInitA = !this.props.defaultFileList && nextProps.defaultFileList;
    const isInitB = this.props.defaultFileList && nextProps.defaultFileList && this.props.defaultFileList.length == 0 && nextProps.defaultFileList.length!=0;
    if (isInitA || isInitB) {
      this.setState({
        fileDataList: nextProps.defaultFileList || [],
        fileList: nextProps.defaultFileList || [],
      });
    }

    if ('fileList' in nextProps) {
      // console.log("nextProps.fileList==",nextProps.fileList);
      this.setState({
        fileList: nextProps.fileList || [],
      });
    }

    if (nextProps['value']) {
      console.log('nextProps.value', nextProps.value);
      this.setState({
        fileList: nextProps.value.fileList || [],
      });
    }

  }

  componentWillUnmount() {
    this.setState({...initState,fileList:[],fileDataList:[]});
    this.onReset();
  }


  handlePress = (i) => {
    this.onReset();
    if (i == 1) {//从相册选择
      this._openPicLibFunc();
    } else if (i == 2) {//从相机
      this._pickCamera();
    }
  }
  /**
   * 从图库或者相机进行获取,因为安卓平台不能进行多图选择，所以，需要区分不同平台
   */
  openPicLibFunc = (max = 100) => {
    let promise = new Promise((resolve, reject) => {
      if (Platform.OS === 'ios') {
        ImagePicker.openPicker({
          multiple: true,
          maxFiles: max - this.state.fileList.length,
          waitAnimationEnd: false,
        }).then(images => {

          let handleImagesPromise = this.handleImagesData(images);
          handleImagesPromise.then((imagesData) =>  {
            console.log('第一步----',imagesData);
            this.setState({fileDataList: [...this.state.fileDataList, ...imagesData]})
            resolve(imagesData);
          });
        }).catch(e => {
          handleImagePickError(e);
        });
      } else {
        ImagePicker.openPicker({
          width: 300,
          height: 300,
          cropping: false,
          cropperCircleOverlay: false,
          compressImageMaxWidth: compressImgWidth,
          compressImageMaxHeight: compressImgHeight,
          compressImageQuality: 0.7,
          mediaType: 'photo',
          compressVideoPreset: 'MediumQuality',
          multiple: true,
        }).then(images => {
          // console.log("从相机获取单个iamges:",images);
          // console.log("从相机获取单个iamges:",images instanceof Array);
          let handleImagesPromise = this.handleImagesData(images);
          handleImagesPromise.then((imagesData) => {
            this.setState({fileDataList: [...this.state.fileDataList, ...imagesData]})
            resolve(imagesData);
          });
        }).catch(e => {
          handleImagePickError(e);
        });
      }

    });

    return promise;
  }

  /**
   * 从相机获取图片
   */
  pickSingleWithCamera = () => {
    let promise = new Promise((resolve, reject) => {
      ImagePicker.openCamera({
        cropping: false,
        width: Math.round((Dimensions.get('window').width - 20)),
        height: 300,
      }).then(images => {
        // console.log("拍照iamges:",images);
        // console.log("拍照iamges:",images instanceof Object);
        let handleImagesPromise = this.handleImagesData(images);
        handleImagesPromise.then((imagesData) => {
          this.setState({fileDataList: [...this.state.fileDataList, ...imagesData]})
          resolve(imagesData);
        });
      }).catch(e => {
        handleImagePickError(e);
      });
    });
    return promise;
  }


// /**
//  * 数据统一处理
//  */
// export function handlePhotoImages(images,resolve,reject) {
//   let handleImagesPromise = handleImagesData(images);
//   handleImagesPromise.then((imagesData) => {
//     // this._handleSubmit(imagesData);
//     resolve(imagesData);
//   });
// }

  /*** hide picker ****/
  _hidePicker=()=>{
    Picker.isPickerShow(status => {
      if (status) {
        Picker.hide();
      }
    });
  }


  /**
   * 将上传的image变为file文件
   */
  convertImageToFile = (image) => {
    let file = '';
    if (image) {
      let uri = image.uri;
      let index = uri.lastIndexOf("\/");
      let name = uri.substring(index + 1, uri.length);
      file = {uri: uri, type: 'multipart/form-data', name: name, filename: name};
    }
    return file;
  }

  // /**
  //  * 图片从相册、拍照过程的异常处理
  //  */
  // handleImagePickError = (error) => {
  //   Toast.hide();
  //   if(error && typeof(error) == 'string'){
  //     if(error.indexOf("cancelled")<0){
  //       Toast.fail(error, 2);
  //     }
  //   }
  // }

  /**
   * 上传图片
   */
  uploadAttachment = (files, loadingTime, description) => {
    let promise = new Promise((resolve, reject) => {
      Toast.loading('加载中', loadingTime);
      let formData = new FormData();
      if (files && files instanceof Array) {
        for (let file of files) {
          formData.append('files', file);
        }
      }
      // Alert.alert('files', files);
      formData.append('Content-Type', 'image/jpg');
      formData.append('createName', GLOBAL.user.username);
      formData.append('description', description);
      const REQUEST_URL = API.addAttachmentReturn;
      fetch(REQUEST_URL, {
        method: 'POST',
        headers: {"X-Auth-Token": GLOBAL.token,},
        body: formData
      }).then((response) => response.json()).then((responseJson) => {
        Toast.hide();
        console.log("responseJson", responseJson);
        if (responseJson.success) {
          resolve(responseJson);
        } else {
          reject(responseJson);
        }
      }).catch((error) => {
        Toast.hide();
        Toast.fail('图片上传' + error, 2);
      });
    });
    return promise;
  }


  /*** 数据处理 ****/

  handleImagesData = (images) => {
    if (images instanceof Array) {
      console.log('====多张images',images);
      let funcArray = [];
      for (let i = 0; i < images.length; i++) {

        funcArray = [...funcArray, this.compressImg(images[i])];
      }
      var promise1 = new Promise
        .all(funcArray)
        .then(function (results) {
          console.log('多张压缩完成',results);
          return results;
        });
      return promise1;
    } else if (images instanceof Object) {
      console.log('====单张images',images);
      var promise2 = new Promise
        .all([this.compressImg(images)])
        .then(function (results) {
          console.log('单张压缩完成',results);
          return results;
        });
      return promise2;
    }
  }
  /*压缩图片*/
  compressImg(image) {
    var promise = new Promise(function(resolve, reject){
      setTimeout(function () {
        let imagesData = {};
        ImageResizer.createResizedImage(image.path, compressImgWidth, compressImgHeight, 'JPEG', 90)
          .then(({uri}) => {
            imagesData = {
              uri: uri,
              width: compressImgWidth,
              height: compressImgHeight,
              mime: image.mime,
            };
            resolve(imagesData);
          }).catch((err) => {
          return Alert.alert(err);
        });
      },1000);
    });
    return promise;

  }


  _handleSubmit = (imagesData) => {
    this.setState({
      uploading: true
    })
    //图片处理
    let fileArray = [];
    for (let i = 0; i < imagesData.length; i++) {
      let file = this.convertImageToFile(imagesData[i]);
      fileArray.push(file);
    }
    let description = '';

    let promise = this.uploadAttachment(fileArray, 50, description);
    promise.then((responseJson) => {
      if (responseJson.success == true) {
        // let imgsIDArr = responseJson.data;

        this.setState({
          fileList: [...this.state.fileList, ...responseJson.data]

        }, () => this.onChange())
      } else {
        Toast.hide();
        Toast.fail(JSON.stringify(responseJson), 2);
      }
      this.setState({
        uploading: false
      })

    }, (responseJson) => {
      this.setState({
        uploading: false
      })
      Toast.hide();
      Toast.fail(JSON.stringify(responseJson), 3);
    }).catch((error) => {
      this.setState({
        uploading: false
      })
      Toast.hide();
      Toast.fail(error, 2);
    });
  }

  _openPicLibFunc() {
    //获取当前操作条目
    let imagesData = [];
    let promise = this.openPicLibFunc(this.props.max);
    promise.then((imagesData) => {
      this._handleSubmit(imagesData);
    });
  }

  //从相机获取图片
  _pickCamera() {
    let promise = this.pickSingleWithCamera();
    promise.then((imagesData) => {
      this._handleSubmit(imagesData);
    });
  }

  deleteImageAlert = (index) => {
    Alert.alert('提示', '确定要删除此图片吗?', [
      {text: '取消'},
      {text: '确定', onPress: () => this.deleteItem(index)}
    ])
  }
  /*image:需删除的图片 imageArr:图片数组 num:定位第几组附件*/
  deleteItem = (index) => {
    let dataList = [...this.state.fileDataList];
    let fileList = [...this.state.fileList];
    dataList.splice(index, 1);
    fileList.splice(index, 1);
    this.setState({fileDataList:dataList,fileList:fileList},()=>{
      this.forceUpdate();
      this.onChange();
    });



    // index !== -1?this.setState({longPressState:false}):null;
    // index = this.state.imagesUriArray.indexOf(image.uri);
    // index !== -1?this.state.imageIDArray.splice(index,1):null
  }



  componentWillMount() {
    this._hidePicker();
  }

  render() {
    let imageSource = require('js/assets/images/upLoadFile.png');
    return (
      <View style={{backgroundColor: 'white', flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center',}}>
        {this.state.fileDataList ? this.state.fileDataList.map((item, index) => {
            // console.log("item==",item,"；index==",index);
            return (
              <View
                style={{flexDirection: 'row'}}
                key={item.uri}>

                <TouchableOpacity
                  onPress={() => this.loadClickImage(item, index)}>
                  <Image
                    style={{width: vMargin, height: vMargin, margin: 5}}
                    source={item}/>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{width: 20, height: 20, marginLeft: -20}}
                  onPress={() => {
                    this.deleteItem(index)
                  }}>
                  <Image
                    resizeMode='contain'
                    style={{width: 20, height: 20}}
                    source={require('js/assets/images/delete.png')}/>
                </TouchableOpacity>

              </View>
            )
          }
        ) : null}
        {
          this.props.max && this.props.max > this.state.fileList.length && (
            <View>
              <TouchableOpacity
                onPress={() => {
                  this._hidePicker();
                  this.ActionSheet.show()
                }}>
                <Image source={imageSource} style={{backgroundColor: 'white', width: vMargin, height: vMargin, marginLeft: 0}}/>
                <ActionSheet
                  ref={o => this.ActionSheet = o}
                  options={options}
                  cancelButtonIndex={CANCEL_INDEX}
                  onPress={(buttonIndex) => this.handlePress(buttonIndex)}
                />
              </TouchableOpacity>
            </View>
          )
        }

      </View>
    )

  }

  //查看大图
  loadClickImage(item, index) {
    if (this.state.fileDataList.length > 0) {
      var imageTotal = [];
      var imageIndex = index;
      for (var i = 0; i < this.state.fileDataList.length; i++) {
        var renderImage = this.state.fileDataList[i];
        imageTotal.push({
          url: renderImage.uri,
        });
      }
      this.props.navigation && this.props.navigation.navigate("ImageShow", {imageArray: imageTotal, indexNum: imageIndex});
    }
  }

}
