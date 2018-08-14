import React from 'react';
import dva from './utils/Dva';
import {AsyncStorage} from 'react-native'
import {persistStore, autoRehydrate} from 'redux-persist'

import HomeModel from './models/HomeModel';
import MeModel from './models/MeModel';
import RouterModel from './models/RouterModel'
import GlobalModel from './models/GlobalModel'



import Router from "./router";

const app = dva({
  initialState: {},
  models: [HomeModel,MeModel,RouterModel,GlobalModel],
  extraEnhancers: [autoRehydrate()],
  onError(e) {
    console.log('onError', e);
  },
});
let store = app.getStore()
const App = app.start(<Router store={store}/>)
persistStore(store, {
  storage: AsyncStorage,
  blacklist:'router'
})

export default App;

//redux-persist react native 端本地存储指定使用AsyncStorage。
// Android是以K-V的形式存储在本地sqlite中,iOS 是直接存沙盒文件
//redux-persist 支持配置和黑名单。仅仅持久化白名单中的数据或者不持久化黑名单中的数据。
//由于大部分情况下我们的state都会非常的大。强烈建议建议大家使用白名单对持久化数据做过滤。
