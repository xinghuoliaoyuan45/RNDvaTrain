import React from 'react';
import dva from './utils/Dva';
import {AsyncStorage} from 'react-native'
//import {persistStore, autoRehydrate} from 'redux-persist'

import HomeModel from './models/HomeModel';
import MeModel from './models/MeModel';
import RouterModel from './models/RouterModel'
import GlobalModel from './models/GlobalModel'



import Router from "./router";

const app = dva({
  initialState: {},
  models: [HomeModel,MeModel,RouterModel,GlobalModel],
  //extraEnhancers: [autoRehydrate()],
  onError(e) {
    console.log('onError', e);
  },
});
let store = app.getStore()
const App = app.start(<Router store={store}/>)

// persistStore(store, {
//   storage: AsyncStorage,
//   blacklist:'router'
// })

export default App;

