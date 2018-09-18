import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import ImageTopTab from 'js/components/ImageTopTab';
import HeadStatusBar from 'js/components/HeadStatusBar';


class home extends Component {


  render() {
    return (

        <Container style={styles.container}>
          <HeadStatusBar/>
          <View style={{backgroundColor: colors.dividerLineColor, width: deviceWidth, height: 1}}/>
          <View style={{height: isIphoneXTabBarHeight()}}>
            <ScrollableTabView
              initialPage={this.props.tabIndex - 1}
              renderTabBar={this._renderTabBar}
            >
              {null}
            </ScrollableTabView>

            {(hasPermission(resourceMap.WORK) && parseInt(this.props.allUnReadCount + "") > 0) && (
              <View style={[chatStyles.badge, {left: this.getBadgeLeft(),}]}>
                <Text
                  style={chatStyles.badgeText}>{this.props.allUnReadCount <= 99 ? this.props.allUnReadCount : 99}</Text>
              </View>)}
          </View>

        </Container>
      );
  }
}

export default home

