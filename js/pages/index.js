import React, {Component} from 'react'
import {
  Text,
  View,
  StyleSheet,
  BackHandler,
  ToastAndroid,
} from 'react-native'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox,
} from 'react-native-router-flux';

import Login from './LoginPage'
import Home from './HomePage'
import TestPage from './TestPage'


const onBackPress = () => {
  const currentScreen = getCurrentScreen(Actions.state)
  if (currentScreen === 'home') {
    let now = Date.now()
    if (this.lastBackPressed && this.lastBackPressed + 2000 >= now) {
      return false
    }
    this.lastBackPressed = Date.now();
    ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
    return true
  } else if (currentScreen === 'login') {
    return false
  }
  else {
    Actions.pop()
    return true
  }
}


export const Pages = () => (
  <Router backAndroidHandler={onBackPress}>
    <Scene
      hideNavBar
      transitionConfig={() => ({screenInterpolator: CardStackStyleInterpolator.forHorizontal})}
    >
      <Scene  component={Login} key="login"/>
      <Scene  component={Home} key="home"/>
      <Scene  component={TestPage} key={'test'}/>

    </Scene>
  </Router>
);

function getCurrentScreen(navigationState) {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  if (route.routes) {
    return getCurrentScreen(route)
  }
  return route.routeName
}
