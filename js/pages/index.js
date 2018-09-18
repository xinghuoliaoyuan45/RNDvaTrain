import React, {Component} from 'react'
import {
  Text,
  View,
  StyleSheet,
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
import Home  from './HomePage'

const onBackPress = () => {
  console.log(Actions.state);
  if (Actions.state.index !== 1) {
    return false
  }
  Actions.pop()
  return true
}

export  const Pages = () => (
  <Router backAndroidHandler={onBackPress}>
    <Modal
      hideNavBar
      transitionConfig={() => ({ screenInterpolator: CardStackStyleInterpolator.forFadeFromBottomAndroid })}
    >
        <Stack hideNavBar component={Login} key="Login"/>
        <Scene hideNavBar component={Home} key="home"/>

    </Modal>
  </Router>
);
