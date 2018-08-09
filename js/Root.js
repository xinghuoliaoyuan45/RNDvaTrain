import React, {Component} from "react";
import SplashScreen from "react-native-splash-screen";
import Provider from "react-redux/es/components/Provider";
import MainStackRouter from "./routers/MainStackRouter";
import Storage from 'react-native-storage';
import {AsyncStorage} from 'react-native';

var storage = new Storage({
  // maximum capacity, default 1000
  size: 1000,

  // Use AsyncStorage for RN, or window.localStorage for web.
  // If not set, data would be lost after reload.
  storageBackend: AsyncStorage,

  // expire time, default 1 day(1000 * 3600 * 24 milliseconds).
  // can be null, which means never expire.
  // defaultExpires: 1000 * 3600 * 24,
  defaultExpires: null,

  // cache data in the memory. default is true.
  enableCache: true,

  // if data was not found in storage or expired,
  // the corresponding sync method will be invoked and return
  // the latest data.
  sync: {
    // we'll talk about the details later.
  }
})


GLOBAL.storage = storage;

// 禁用屏幕底部的黄色警告
console.disableYellowBox = true;


export default class Root extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  componentDidMount() {
    SplashScreen.hide()//隐藏启动屏
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <MainStackRouter/>
      </Provider>
    )
  }
}
function mapStateToProps(state) {
  return {};
}


export default connect(mapStateToProps, null)(Root);
