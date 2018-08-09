import request from 'js/utils/request';
import {
  COMMON_ERROR,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  /**用户字典**/
    LOAD_DICT_LIST,
  LOAD_DICT_LIST_SUCCESS,
  LOAD_DICT_LIST_ERROR,
  /* 保存登陆表单 */
  SAVE_LOGIN_FORM,

  /* 加载用户资源（权限）列表*/
  LOAD_USER_RESOURCE_LIST,
  LOAD_USER_RESOURCE_LIST_SUCCESS,
  LOAD_USER_RESOURCE_LIST_ERROR,

  /* 保存用户资源（权限）搜索表单*/
  SAVE_SEARCH_USER_RESOURCE_FORM,

} from '../constants/ActionTypes';
import {fromJS, Map} from 'immutable';
import API from '../config/api'

export default {
  namespace: 'global',
  state: Map({
    error: false,
    user: {},
    drawerState: 'closed',
    drawerDisabled: true,
    tabIndex: '1',
    /**用户字典**/
    dictList: [],
    allDictMap: {},

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
    }
  }),
  reducers: {
    [SAVE_LOGIN_FORM](state, {name}) {
      debugger
      return state.set('loginForm', {
        ...state.get('loginForm'),
        ...action.payload.data
      });
    }

  },
  effects: {
    * [LOGIN]({data}, {call, put, select}) {
      //重置
      let userLoginInfo = new Object();
      userLoginInfo.loginName = data.loginName;
      userLoginInfo.password = "";
      GLOBAL.storage.save({
        key: 'userLoginInfo',
        data: userLoginInfo
      });
      const requestURL = API.login;
      const result = yield call(request, requestURL, {
        body: data || {}
      });
      debugger

    }
  },
}
