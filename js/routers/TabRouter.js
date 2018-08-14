import React from 'react'
import {Platform} from 'react-native'
import {TabNavigator, TabBarBottom} from 'react-navigation'
import home from '../pages/HomePage'
import me from '../pages/MePage'
import GlobalModel from "../models/GlobalModel";


let a = false
let judagePermission
if (a) {
  judagePermission = {
    me: {screen: me}
  }
} else {
  judagePermission = {
    home: {screen: home},
    me: {screen: me}
  }
}

export default TabNavigator(
    judagePermission
  , {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      labelStyle: {
        color: 'black'
      },
      showIcon: true,
      showLabel: true,
      indicatorStyle: {backgroundColor: 'transparent'}
    },
    lazy: true,
    swipeEnabled: false,
    animationEnabled: Platform.OS === 'ios'
  }
)
