'use strict';

import React, {Component,PureComponent} from 'react';
import {Badge} from 'antd-mobile';
import PropTypes from 'prop-types'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import colors from 'js/themes/colors';
import {isIphoneXTabBar} from 'js/components/IsIponeXDept'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;


class ImageTab extends  Component
 {

  constructor(props) {
    super(props);
    this.state = {
      activeColor: this.props.activeColor ? this.props.activeColor : '#F74C31',
      inActiveColor: this.props.inActiveColor ? this.props.inActiveColor : '#999999',
      isShowIcon: this.props.isShowIcon != undefined ? this.props.isShowIcon : false,
      isShowLocalImage: this.props.isShowLocalImage != undefined ? this.props.isShowLocalImage : false,
      isShowText: this.props.isShowText != undefined ? this.props.isShowText : true,
      isShowBottomLine: this.props.isShowBottomLine != undefined ? this.props.isShowBottomLine : true,
      isIndexTab: this.props.isIndexTab != undefined ? this.props.isIndexTab : false,
    }
  }

  static propTypes = {
    goToPage: PropTypes.func, // 跳转到对应tab的方法
    onChangeTab: PropTypes.func,
    activeTaba: PropTypes.number, // 当前被选中的tab下标
    tabs: PropTypes.array, // 所有tabs集合


    /******** Names ***************/
    tabNames: PropTypes.array, // 保存Tab名称
    tabIconNames: PropTypes.array, // 保存Tab图标
    tabLocalImageActiveNames: PropTypes.array, // 保存Image图标--选中
    tabLocalImageInActiveNames: PropTypes.array, // 保存Image图标--未选中
    badgeNames: PropTypes.array, // 保存Badge名称


    /******** 样式 ***************/
    activeColor: PropTypes.string,//选中的颜色
    inActiveColor: PropTypes.string,//未选中的颜色

    tabBgColor: PropTypes.string,//tab 背景颜色
    tabHeight: PropTypes.number, // tab高度
    iconSize: PropTypes.number, // icon大小
    textSize: PropTypes.number, // 字体大小
    imageWidth: PropTypes.number, // image 宽度
    imageHeight: PropTypes.number, // image 高度
    imageResizeMode: PropTypes.string,//image 样式

    lineWidth: PropTypes.number, // 下划线 宽度
    textMarginTop: PropTypes.number, // text距离上面的高度
    imageMarginTop: PropTypes.number, // 图片距离上面的高度
    lineMarginTop: PropTypes.number, // 下划线距离上面的高度


    /******** visible ***************/
    isShowIcon: PropTypes.bool,//是否显示上部分图片Icon,默认不显示false
    isShowLocalImage: PropTypes.bool,//是否显示上部分图片Image,默认不显示false
    isShowText: PropTypes.bool,//是否显示下部分文字,默认显示true
    isShowBottomLine: PropTypes.bool,//是否显示底部线条,默认显示true
    isShowBadge: PropTypes.bool,//是否显示下部分文字,默认不显示

    isIndexTab: PropTypes.bool,//用于判断是不是首页的

    /******* 订单模块用 ******/
    isShowCutLine: PropTypes.bool, //是否显示左右间隔线

  };


  setAnimationValue({value}) {
    // console.log(value);
  }

  componentDidMount() {
    // Animated.Value监听范围 [0, tab数量-1]
    this.props.scrollValue.addListener(this.setAnimationValue);
  }

  renderTabOption(tab, i) {
    // console.log("this.props.activeTaba",this.props.activeTaba,"i",i);
    let color = this.props.activeTaba == i ? this.state.activeColor : this.state.inActiveColor; // 判断i是否是当前选中的tab，设置不同的颜色
    return (
      <View style={{flexDirection: 'row', flex: 1}} key={i}>
        <TouchableOpacity onPress={() => {
          if (this.props.onChangeTab) {
            this.props.onChangeTab(i);
          }
          this.props.goToPage(i)
        }}
                          style={{...styles.tab, paddingBottom: this.props.isIndexTab ? isIphoneXTabBar() : 0}}>
          <View style={styles.tabItem}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              {/*** 图标  Icon ***/}
              {this.state.isShowIcon && (<Icon
                  style={{marginTop: this.props.imageMarginTop ? this.props.imageMarginTop : 5}}
                  name={this.props.tabIconNames[i]}
                  size={this.props.iconSize ? this.props.iconSize : 30}
                  color={color}/>
              )}
              {/*** image ***/}
              {this.state.isShowLocalImage && (
                <Image style={{
                  width: this.props.imageWidth ? this.props.imageWidth : 15,
                  height: this.props.imageHeight ? this.props.imageHeight : 15,
                  marginTop: this.props.imageMarginTop ? this.props.imageMarginTop : 5
                }}
                       resizeMode={this.props.imageResizeMode ? this.props.imageResizeMode : 'contain'}
                       source={this.props.activeTaba == i ? this.props.tabLocalImageActiveNames[i] : this.props.tabLocalImageInActiveNames[i]}/>
              )}

              {/*** 文字 ***/}
              {this.state.isShowText && (
                <View
                  style={{flexDirection: 'row', marginTop: this.props.textMarginTop ? this.props.textMarginTop : 5}}>
                  <Text style={{color: color, fontSize: this.props.textSize ? this.props.textSize : 14}}>
                    {this.props.tabNames[i]}
                  </Text>

                  {/*** badge ***/}
                  {(this.props.isShowBadge && this.props.badgeNames[i] > 0 ) && (
                    <Badge style={{marginLeft: 20}} text={this.props.badgeNames[i]}/>)}

                </View>
              )}
            </View>

            {/*** 下划线 ***/}
            {(this.state.isShowBottomLine && this.props.activeTaba == i) && (
              <View style={{
                height: 1,
                marginTop: this.props.lineMarginTop ? this.props.lineMarginTop : 3,
                width: this.props.lineWidth ? this.props.lineWidth : deviceWidth / this.props.tabs.length,
                backgroundColor: color
              }}/> )}
            {(this.state.isShowBottomLine && this.props.activeTaba != i) && (
              <View style={{
                height: 1,
                marginTop: this.props.lineMarginTop ? this.props.lineMarginTop : 3,
                width: this.props.lineWidth ? this.props.lineWidth : deviceWidth / this.props.tabs.length,
                backgroundColor: colors.white
              }}/> )}

          </View>
        </TouchableOpacity>
        {/*左右间隔线*/}
        {(this.props.isShowCutLine && i < this.props.tabs.length - 1) &&
        <View style={{
          width: 0.5,
          marginTop: 12,
          marginBottom: 12,
          backgroundColor: '#ccc',
        }}/>}
      </View>
    );
  }

  render() {
    return (
      <View style={{
        flexDirection: 'row', height: this.props.tabHeight ? this.props.tabHeight : 50,
        backgroundColor: this.props.tabBgColor ? this.props.tabBgColor : colors.white
      }}>
        {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
      </View>
    );
  }
}

const styles = {
  tabs: {
    flexDirection: 'row',
    height: 50,
  },

  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },

  tabItem: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
}


export default ImageTab;
