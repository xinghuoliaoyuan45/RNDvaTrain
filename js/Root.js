import React, {PureComponent} from 'react'
import SplashScreen from "react-native-splash-screen";
import {AsyncStorage, Dimensions} from 'react-native';
import {Pages} from "./pages";
import Storage from 'react-native-storage';


export default class Root extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    SplashScreen.hide()//隐藏启动屏
    initGlobalStorage()
    initGlobalSet()
  }

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

let initGlobalSet =()=>{
  GLOBAL.deviceWidth = Dimensions.get('window').width;
  GLOBAL.deviceHeight = Dimensions.get('window').height;
}



