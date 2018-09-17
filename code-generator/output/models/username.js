import pathToRegexp from 'path-to-regexp';
import {test} from '../proxy/username';

export default {
  namespace: 'username',
  state: {
    
  },
  subscriptions: {
    setup({ dispatch, history, state, props}) {
      history.listen(({ pathname }, state) => {
        if (pathToRegexp('/username').test(pathname)) {
          dispatch({type:'initData'});
        }
      });
    }
  },
  effects: {
    initData: [function*({ payload }, { put, call, select }) {
      document.title = '...';

    }, { type: 'takeLatest' }],

  },
  reducers: {
    test(state, { payload }) {
      return { ...state, a: b };
    },
  }
}