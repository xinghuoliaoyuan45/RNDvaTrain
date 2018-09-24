import React from 'react';
import dva from './utils/Dva';


import models from './models'
//import { createLogger } from 'redux-logger';  //immutable 数据结构在 console里面是无法看到的 无效


import Root from "./Root";
import {COMMON_ERROR} from "./constants/ActionTypes";

const app = dva({
  initialState: {},
  models: models,

});
let store = app.getStore()
const App = app.start(<Root store={store}/>)


export default App;

