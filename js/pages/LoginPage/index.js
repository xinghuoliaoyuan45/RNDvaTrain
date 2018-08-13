import React, {Component} from 'react';
import {connect} from 'react-redux';
import colors from 'js/themes/colors';
import {
  View,
  Text,
  Dimensions,
  InteractionManager,
  TouchableOpacity,
  Platform,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  BackHandler,
  ImageBackground,
  TextInput
} from 'react-native'
import HeadStatusBar from 'js/components/HeadStatusBar';
import {Container} from 'native-base'
import {Toast} from 'antd-mobile';
import {createForm} from 'rc-form';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import DeviceInfo from 'react-native-device-info';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


const REQ_TIMEOUT = 30000;

class Login extends Component {

  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      loginName: "",
      // loginName: "13521664632",
      password: "",
      loginIndex: 1,
      placeViewHeight: 0,
    };
  }

  componentDidMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
    }

    //键盘
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (e) => {
      this._scrollToTarget(e);
    });

    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
    });
  }

  /**滚动到指定元素*/
  _scrollToTarget = (event) => {
    let height = event.endCoordinates.screenY
    if (Platform.OS === 'android') {
      this._scroll.scrollToEnd()
     // this._scroll.scrollTo({y: height,animated: false})
    }else{
      this._scroll.scrollToEnd()
    }
  }

  onBackAndroid = () => {
    if (!this.props.nav) {
      return;
    }
    console.log("login exitApp");
    const routers = this.props.nav.routes;
    if (routers instanceof Array && routers.length > 0 && routers[this.props.nav.index].routeName == "Login") {
      BackHandler.exitApp();
      return true;
    }

  };

  componentWillMount() {
    // this.startTimer = setTimeout(()=>{this.showLoginUI();},REQ_TIMEOUT);
    // InteractionManager.runAfterInteractions(() => {
    //  this.autologin();
    //  });
  }

  componentWillUnmount() {
    this.keyboardDidShowListener && this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener && this.keyboardDidHideListener.remove();
    Keyboard.dismiss();
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }
    //Timer
    this.startTimer && clearTimeout(this.startTimer);
    this.finallyTimer && clearTimeout(this.finallyTimer);
  };

  // autologin() {
  //   Toast.loading("加载中");
  //   this.props.logoutSuccess();
  //   GLOBAL.storage.load({
  //     key: 'userLoginInfo',
  //     autoSync: true,
  //     syncInBackground: true,
  //   }).then(ret => {
  //     // console.log("ret",ret);
  //
  //     this.setState({loginName: ret.loginName, password: ""});
  //     if(ret.loginName && ret.password){
  //       // 自动登录时，需要隐藏登录表单
  //       this.props.saveLoginForm({
  //         showLoginUI: false
  //       });
  //       this.props.login({
  //         loginName: ret.loginName,
  //         password: ret.password,
  //         apptype: Platform.OS.toUpperCase(),
  //         nowVersion: DeviceInfo.getVersion(),
  //       });
  //     }else{ //如果没有获取到登录账号和密码， 则显示登录输入框
  //       this.showLoginUI();
  //     }
  //     return ret;
  //   }).catch(err => {
  //     this.showLoginUI();
  //   }).finally(()=>{
  //     this.finallyTimer = setTimeout(()=>{this.showLoginUI();},REQ_TIMEOUT);
  //   });
  // }
  // showLoginUI = () =>{
  //    this.props.saveLoginForm({
  //      showLoginUI: true
  //    });
  // };

  render() {
    return (
      <Container style={{backgroundColor: colors.white}}>
        <HeadStatusBar/>
        <ScrollView
          ref={(scroll) => this._scroll = scroll}
          contentContainerStyle={{backgroundColor: colors.white}}>
            <Image style={{
              width: deviceWidth,
              height: deviceHeight / 2 - 80,
            }} source={require('js/assets/images/login-bg-1.png')}/>
            <View style={{width: deviceWidth, height: 40, flexDirection: 'row'}}>
              <View style={{flex:1}}>
              <Image style={{alignSelf: 'center', width: 20, height: 10}}
                     source={require('js/assets/images/login-arrow-left.png')}/>
              </View>
              <View style={{flex:1}}/>
            </View>
            <View>
              <View style={styles.formItem}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <MCIcon name={'account-outline'} size={22} color={colors.primaryLight2} style={styles.loginIcon}/>
                  <TextInput underlineColorAndroid="transparent" autoCapitalize={"none"}
                             ref={"name"} style={{...styles.textInputStyles, flex: 1}} placeholder="用户名/手机号"
                             placeholderTextColor={colors.textLight}
                             maxLength={30}
                             defaultValue={this.state.loginName}
                             onChangeText={(text) => {
                               this.setState({loginName: text});
                             }}/>
                </View>
                <View style={{height: 1, backgroundColor: colors.lightBorderColor}}/>
              </View>
              <View style={styles.formItem}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <MCIcon name={'lock-outline'} size={20} color={colors.primaryLight2} style={styles.loginIcon}/>
                  <TextInput underlineColorAndroid="transparent" autoCapitalize={"none"}
                             ref={"password"} style={{...styles.textInputStyles, flex: 1}} placeholder="密码"
                             placeholderTextColor={colors.textLight}
                             maxLength={30}
                             defaultValue={this.state.password}
                             secureTextEntry={true}
                             onChangeText={(text) => this.setState({password: text})}
                  />
                </View>
                <View style={{height: 1, backgroundColor: colors.lightBorderColor}}/>
              </View>
              <TouchableOpacity onPress={this.submitForm}>
                <View
                  style={{...styles.loginButton}}>
                  <Text style={{fontSize: 20, color: colors.white}}>{"登录"}</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {
                this.props.navigation.navigate("FindPassWord")
              }}>
                <View style={{alignItems: "center", justifyContent: "center", marginTop: 20}}>
                  <Text style={{fontSize: 15, color: colors.placeHolderTextColor}}>{"忘记密码?"}</Text>
                </View>
              </TouchableOpacity>
            </View>
          <View style={{height: 300}}/>
        </ScrollView>

      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

// export default connect(
//   mapStateToProps,
// )(Login);
export default connect(mapStateToProps, null)(createForm()(Login));
const styles = {
  formItem: {
    height: 60,
    marginLeft: 25,
    marginRight: 25,
    paddingTop: 20,
  },
  loginIcon: {
    marginLeft: 10,
    alignSelf: 'center',
  },
  loginButton: {
    borderRadius: 3,
    backgroundColor: colors.primaryLight,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 80,
    height: 45,
    alignItems: "center",
    justifyContent: "center"
  },
  textInputStyles: {
    height: 50,
    fontSize: 15,
    color: colors.textTitle,
    alignSelf: 'center',
    paddingLeft: 5,
    paddingRight: 10
  },
};
