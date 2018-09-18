import React from 'react';
import dva from './utils/Dva';

import HomeModel from './models/HomeModel';
import MeModel from './models/MeModel';
import GlobalModel from './models/GlobalModel'
//import { createLogger } from 'redux-logger';  //immutable 数据结构在 console里面是无法看到的 无效


import Root from "./Root";

const app = dva({
  initialState: {},
  models: [HomeModel,MeModel,GlobalModel],

});
let store = app.getStore()
const App = app.start(<Root store={store}/>)


export default App;

