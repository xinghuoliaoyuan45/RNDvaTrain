import request from 'js/utils/request';
import {Toast} from 'antd-mobile'
import {
  COMMON_ERROR,
  LOGIN,
  LOGIN_SUCCESS,
  TEST_TO_REDUCER
} from '../constants/ActionTypes';
import {API} from '../config/api'
import {DeviceEventEmitter, Alert} from 'react-native';
import {createAction} from "../utils";
import Immutable from 'immutable';
import {Actions} from 'react-native-router-flux'


export default {
  namespace: 'global',
  state: Immutable.fromJS({
    error: false,
    user: {},
    tabIndex: '1',
    loginForm: {
      doingAutoLogin: false, //是否正在登录
      showLoginUI: false, //是否显示登录UI
    },

    /* 用户资源（权限）列表 */
    userResourceList: [
      {"id": 86, "name": "工作", "code": "144"},
    ],
    /* 用户资源（权限） 搜索表单 */
    searchUserResourceForm: {
      key: {},
      searchDate: {},
      status: {},
      current: 1,
      pageSize: 10,
      total: 1
    },
    testReducer:0
  }),
  reducers: {
    [TEST_TO_REDUCER](state,{payload}){
      console.log(payload)
      return state.set('testReducer',payload.a)
    },
    [COMMON_ERROR](state, {payload}) {
      console.log(payload.errorMsg);
      return state.set('error', payload.errorMsg)
    },
    [LOGIN_SUCCESS](state, {payload}) {
      return state
        .set('user', payload)
        .set('isLoggedIn', true)
        .set('tabIndex', '1');
    },
  },
  effects: {
    * [LOGIN]({payload}, {call, put, select}) {
      const requestURL = API.login;
      const result = yield call(request, requestURL, {
        body: payload || {}
      });

      if (result.success) {
        //用戶的登录信息,存放登录名、密码
        let userLoginInfo = new Object();
        userLoginInfo.loginName = payload.loginName;
        userLoginInfo.password = payload.password;


        GLOBAL.token = result.data.token;
        yield put(createAction(`${LOGIN_SUCCESS}`)(result.data));
        Actions.home()
        //Actions.test({title:'maxiaoyao'})
      } else {
        yield put(createAction(`${COMMON_ERROR}`)(result));
        Toast.fail(result.errorMsg,1)
      }
    }
  },
}
