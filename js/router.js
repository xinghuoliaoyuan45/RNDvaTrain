import React, {PureComponent} from 'react'
import SplashScreen from "react-native-splash-screen";
import {AsyncStorage, BackHandler, ToastAndroid} from 'react-native';
import {Pages} from "./pages";
import Storage from 'react-native-storage';


export default class Router extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    SplashScreen.hide()//隐藏启动屏
    initGlobalStorage()
  }

  // backHandle = () => {
  //   const currentScreen = getCurrentScreen(this.props.router)
  //   if (currentScreen === 'home' || currentScreen === 'me') {
  //     let now = Date.now()
  //     if (this.lastBackPressed && this.lastBackPressed + 2000 >= now) {
  //       //最近2秒内按过back键，可以退出应用。
  //       BackHandler.exitApp() // 退出APP
  //       return true
  //     }
  //     this.lastBackPressed = Date.now();
  //     ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
  //     return true
  //
  //   } else {
  //     this.props.dispatch(NavigationActions.back())
  //     return false
  //   }
  // }


  render() {
    return <Pages/>
  }


}


let initGlobalStorage = () => {
  let storage = new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
    defaultExpires: null,
    enableCache: true,
    sync: {}
  })
  GLOBAL.storage = storage;
}




