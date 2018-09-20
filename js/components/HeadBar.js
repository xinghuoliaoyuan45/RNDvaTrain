import React, {Component} from 'react';
import {View, TouchableOpacity, Image,Dimensions,Text} from 'react-native';
import {Container, Header, Title, Content,  Separator,Body, Button, Left, Right, Root} from "native-base";
import Icon from 'react-native-vector-icons/Ionicons'
import FAIcon from 'react-native-vector-icons/EvilIcons'

import {px2dp} from 'js/utils/commonUtils';
const deviceWidth = Dimensions.get('window').width;
import colors from 'js/themes/colors';
import PropTypes from 'prop-types';


/**
 *  HeadBar
 *  contains: backIcon  &  Title  & RightIcon /RightLocalImage /RightRemoteImage/ RightText
 *  created by yang on 2017/10/18
 */
export default class HeadBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  static propTypes = {

    /******** 样式 ****************/
    headBackgroundColor:PropTypes.any,//Header 背景颜色

    /******** Left ***************/
    leftVisible:PropTypes.bool,//是否显示左侧区域，默认显示返回键
    leftBackIconName:PropTypes.any,//返回键名称
    leftBackIconSize:PropTypes.number,//返回键大小
    leftBackIconColor:PropTypes.any,//返回键颜色

    /******** Left Children ***************/
    leftChildren:PropTypes.any,

    /******** Title ***************/
    titleFontSize:PropTypes.number,//title 字体大小
    titleFontColor:PropTypes.any,//title 字体颜色
    titleText:PropTypes.any,//title文字

    /******** Title Children ***************/
    titleChildren:PropTypes.any,

    /******** Right ***************/
    rightVisible:PropTypes.bool,//是否显示右侧区域，默认不显示
    rightOnlyIconVisible:PropTypes.bool,//右侧只有Icon,目前引用为 react-native-vector-icons/Ionicons
    rightOnlyLocalImageVisible:PropTypes.bool,//右侧只有本地图片
    rightOnlyRemoteImageVisible:PropTypes.bool,//右侧只有远程图片
    rightOnlyTextVisible:PropTypes.bool,//右侧只有文字
    rightQRVisible:PropTypes.bool,//二维码模块独享

    /********Right Icon ***************/
    rightIconName:PropTypes.any,//最右侧Icon名称
    rightIconSize:PropTypes.number,//最右侧Icon大小
    rightIconColor:PropTypes.any,//最右侧Icon颜色

    /********Right Local Image ***************/
    rightLocalImageWidth:PropTypes.any,//最右侧本地图片宽度
    rightLocalImageHeight:PropTypes.any,//最右侧本地图片高度
    rightLocalImagePath:PropTypes.any,//最右侧本地图片路径

    /********Right Remote Image ***************/
    rightRemoteImageWidth:PropTypes.any,//最右侧远程图片宽度
    rightRemoteImageHeight:PropTypes.any,//最右侧远程图片高度
    rightRemoteImagePath:PropTypes.any,//最右侧远程图片路径

    /********Right Text ***************/
    rightTextFontSize:PropTypes.number,//最右侧Text大小
    rightTextFontColor:PropTypes.any,//最右侧Text颜色
    rightText:PropTypes.any,//最右侧Text名称


    /******** Right Children ***************/
    rightChildren: PropTypes.any,


    //回调
    leftBackIconOnPress:PropTypes.func,//返回键点击指令
    rightOnPress:PropTypes.func,//右侧Icon、Image、Text 的点击指令
    leftOnPress:PropTypes.func,//专为名片设计
  };

  render() {
    return (
      <Header style={{backgroundColor: this.props.headBackgroundColor? this.props.headBackgroundColor : colors.appColor, borderBottomColor: '#f0f0f0'}}>
        <Left>
          {/*左侧默认显示返回键*/}
          {(this.props.leftVisible!==false && !this.props.leftChildren) &&(
            <TouchableOpacity style={{paddingLeft:10,paddingRight:25,paddingTop:15,paddingBottom:15}}
                              onPress={this.props.leftBackIconOnPress}>
              <Icon name={this.props.leftBackIconName?this.props.leftBackIconName:"ios-arrow-back"}
                    size={this.props.leftBackIconSize? this.props.leftBackIconSize:px2dp(24)}
                    color={this.props.leftBackIconColor? this.props.leftBackIconColor : colors.textTitle}/>
            </TouchableOpacity>
          )}

          {/*左侧菜单栏扩展*/}
          {(this.props.leftVisible!==false && this.props.leftChildren && this.props.leftChildren)}
        </Left>
        <Body>
        {!this.props.titleChildren &&(
          <Title
            style={{
            fontSize: this.props.titleFontSize? this.props.titleFontSize :16,
            color: this.props.titleFontColor? this.props.titleFontColor :colors.textTitle}}>{this.props.titleText}</Title>
        )}

        {/*title菜单栏扩展*/}
        {(this.props.titleChildren && this.props.titleChildren)}
        </Body>
        <Right>
          {/*专为名片模块定制*/}
          {this.props.rightVisible && !this.props.rightChildren && (
            <View>
              {this.props.rightQRVisible && (
                <View style = {{flexDirection: 'row', display: 'flex'}}>
                  <TouchableOpacity onPress={this.props.leftOnPress}>
                    <Icon name='ios-download-outline'
                            size={this.props.rightIconSize? this.props.rightIconSize:px2dp(24)}
                            color={this.props.rightIconColor? this.props.rightIconColor:colors.textTitle}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.props.rightOnPress}>
                    <FAIcon name='share-google'
                            size={this.props.rightIconSize? this.props.rightIconSize:px2dp(24)}
                            color={this.props.rightIconColor? this.props.rightIconColor:colors.textTitle}
                            style={{marginLeft:20}}/>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          )}
          {/**/}
          {this.props.rightVisible && !this.props.rightChildren && (
            <View style={{flexDirection: 'row', display: 'flex'}}>
              <TouchableOpacity  style={{paddingRight:5,paddingLeft:15,paddingTop:15,paddingBottom:15}} onPress={this.props.rightOnPress}>
                <View style={{alignItems:'center'}}>
                  {/*Icon*/}
                  {this.props.rightOnlyIconVisible && (
                    <Icon name={this.props.rightIconName}
                          size={this.props.rightIconSize? this.props.rightIconSize:px2dp(24)}
                          color={this.props.rightIconColor? this.props.rightIconColor:colors.textTitle}/>
                  )}
                  {/*Local Image*/}
                  {this.props.rightOnlyLocalImageVisible && (
                    <Image style={{width: this.props.rightLocalImageWidth? this.props.rightLocalImageWidth:20,
                              height: this.props.rightLocalImageHeight? this.props.rightLocalImageHeight:20}}
                           source={this.props.rightLocalImagePath}/>
                  )}

                  {/*Remote Image*/}
                  {this.props.rightOnlyRemoteImageVisible && (
                    <Image style={{width: this.props.rightRemoteImageWidth? this.props.rightRemoteImageWidth:20,
                      height: this.props.rightRemoteImageHeight? this.props.rightRemoteImageHeight:20}}
                           source={{uri:this.props.rightRemoteImagePath}}/>
                  )}

                  {/*Text*/}
                  {this.props.rightOnlyTextVisible && (
                    <Text style={{
                      fontSize: this.props.rightTextFontSize? this.props.rightTextFontSize:15,
                      color: this.props.rightTextFontColor? this.props.rightTextFontColor:colors.textTitle}}>{this.props.rightText}</Text>
                  )}

                </View>
              </TouchableOpacity>

            </View>
          )}
          {/*右侧菜单栏扩展*/}
          {
            this.props.rightVisible && this.props.rightChildren && this.props.rightChildren

          }

        </Right>
      </Header>
    )
  }
  }




