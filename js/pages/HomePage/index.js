import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, Keyboard, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import HeadStatusBar from 'js/components/HeadStatusBar';
import Me from '../MePage'
import colors from 'js/themes/colors'
import {Content, Container} from 'native-base';
import {isIphoneXTabBarHeight} from 'js/components/IsIponeXDept'
import Test from '../TestPage'
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ImageTab from 'js/components/ImageTab'
import * as base from 'native-base'
import {
  changeBottomTab,//底部栏切换
  TEST_TO_REDUCER
} from 'js/constants/ActionTypes';
import {createAction} from "js/utils";
import {Actions} from "react-native-router-flux";

class home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabs: this.initTabs()
    }
  }

  componentDidMount = () => {

  }

  initTabs = () => {
    let tabNames = []; //tab上显示的名字
    let activeImageNames = []; //激活时，各tab显示的图片
    let inActiveImageNames = []; //未激活时，各tab显示的图片
    let index = 1;
    let pageMap = {}; //页面与tabIndex的映射
    if (1) {
      tabNames.push('我的');
      activeImageNames.push(require('js/assets/images/foot_home_select.png'));
      inActiveImageNames.push(require('js/assets/images/foot_home_unselect.png'));
      pageMap[index] = <Me/>;
      index++;
    }
    if (2) {
      tabNames.push('客户');
      activeImageNames.push(require('js/assets/images/foot_customer_select.png'));
      inActiveImageNames.push(require('js/assets/images/foot_customer_unselect.png'));
      pageMap[index] = <Test/>;
      index++;
    }
    return {
      tabNames,
      activeImageNames,
      inActiveImageNames,
      pageMap
    }
  }
  _renderTabBar = () => {
    // console.log("this.props.tabIndex-1",this.props.tabIndex-1);
    return (
      <ImageTab
        tabNames={this.state.tabs.tabNames}
        imageWidth={20}
        imageHeight={20}
        textSize={10}
        isShowBottomLine={false}
        textMarginTop={5}
        tabHeight={isIphoneXTabBarHeight()}
        inActiveColor={colors.textDarkGray}
        activeColor={colors.orange}
        tabLocalImageActiveNames={this.state.tabs.activeImageNames}
        tabLocalImageInActiveNames={this.state.tabs.inActiveImageNames}
        isShowLocalImage={true}
        activeTaba={this.props.tabIndex - 1}
        onChangeTab={(i) => this._onChangeTab(i)}
        isIndexTab={true}
      />
    )
  };

  _onChangeTab = (i) => {
    // this.setState({tabSwitchIndex: i});
    Keyboard.dismiss();
    this.props.dispatch(createAction(`global/${TEST_TO_REDUCER}`)({a: '马骁尧'}))
    this.props.dispatch(createAction(`tab/${changeBottomTab}`)((i + 1)))
  };

  render() {
    return (
      <base.Container>
        <HeadStatusBar/>
        <View style={{flex: 1,  justifyContent: 'center'}}>
          <base.Button style={{alignSelf: 'center'}}>
            <base.Text onPress={() => {
              Actions.Test({title:'TestTitle'})
            }}>
              跳转到Test 页面
            </base.Text>
          </base.Button>
        </View>
        <View style={{backgroundColor: colors.dividerLineColor, width: GLOBAL.deviceWidth, height: 1}}/>
        <View style={{height: isIphoneXTabBarHeight()}}>
          <ScrollableTabView
            initialPage={this.props.tabIndex - 1}
            renderTabBar={this._renderTabBar}
          >
            {/*下面的代码如果不写会报错 ScrollableTabView 会检查children*/}
            {
              this.state.tabs.tabNames.map((tabName, i) => {
                return <Text key={i} style={{height: 0}}></Text>
              })
            }
          </ScrollableTabView>
        </View>
      </base.Container>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    tabIndex: state.tab.getIn(['tabIndex']),
  };
}

export default connect(mapStateToProps)(home);

