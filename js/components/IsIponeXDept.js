//适配iphoneX

import {isIphoneX} from 'react-native-iphone-x-helper'


export function isIphoneXStatusBar() {
  return isIphoneX()?44:0
}
export function isIphoneXTabBar() {
  return isIphoneX()?34:0
}
export function isIphoneXTabBarHeight() {
  return isIphoneX()?83:63
}

