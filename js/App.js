import React from 'react';
import dva from './utils/Dva';
import {AsyncStorage} from 'react-native'


import HomeModel from './models/HomeModel';
import MeModel from './models/MeModel';
import RouterModel from './models/RouterModel'
import GlobalModel from './models/GlobalModel'
import createLogger from 'redux-logger'


import Router from "./router";

const app = dva({
  initialState: {},
  models: [HomeModel,MeModel,RouterModel,GlobalModel],
  onAction:createLogger(), // onAction支持数组，可同时传入多个中间件

  onError(e) {
    console.log('onError', e);
  },
});
let store = app.getStore()
const App = app.start(<Router store={store}/>)


export default App;

