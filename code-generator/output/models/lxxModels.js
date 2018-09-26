
//--------------------
//下面的内容复制到 config/api文件 里面

//获取部门树
getDeptTree: 'server + /api/v1/us/depts/stores/treelist'
//登录
login: 'server + /api/v1/us/users/login'


//-----------------------------
//下面的内容复制到 constants/ActionTypes文件 里面
//（用 '> '替代 '/'是因为dva会认为没必要写namespace但是我认为在ActionTypes文件还是要区分，便于阅读代码

//获取部门树
export const getDeptTreeMa = 'test>GET_DEPT_TREE_MA'
export const getDeptTreeMaSuccess = 'test>GET_DEPT_TREE_MA_SUCCESS'
export const getDeptTreeMaError = 'test>GET_DEPT_TREE_MA_ERROR'

//登录
export const getMessage = 'test>GET_MESSAGE'
export const getMessageSuccess = 'test>GET_MESSAGE_SUCCESS'
export const getMessageError = 'test>GET_MESSAGE_ERROR'

//保存登陆表单
export const saveLoginForm = 'test>SAVE_LOGIN_FORM'


//下面的内容会写到 output文件夹 名字为filename --------------------------
import {API} from '../config/api'
import request from 'js/utils/request';
import {Toast} from 'antd-mobile'
import {createAction} from "../utils";
import Immutable from 'immutable';

import{
  getDeptTreeMa,//获取部门树
  getDeptTreeMaSuccess,//获取部门树成功后
  getDeptTreeMaError,//获取部门树失败后
  getMessage,//登录
  getMessageSuccess,//登录成功后
  getMessageError,//登录失败后
  saveLoginForm//保存登陆表单
  }  from '../constants/ActionTypes';

export default {
  namespace: 'test',
  state: Immutable.fromJS({
      a:2
  }),
reducers: {
  /** 获取部门树*/
  [getDeptTreeMaSuccess](state, { payload }){
          return state.set('a',1);
        },
  [getDeptTreeMaError](state, { payload }){
            return state.set('a',1);
        },
  /** 登录*/
  [getMessageSuccess](state, { payload }){
          return state.set('a',1);
        },
  [getMessageError](state, { payload }){
            return state.set('a',1);
        },
  /** 保存登陆表单*/
  [saveLoginForm](state, { payload }){
        return state.set('a',1);
    },
  },
effects: {
 
  * [getDeptTreeMa]({payload}, {call, put, select}){
      const requestURL = API.getDeptTreeMa;
       const result = yield call(request, requestURL, {
          body: payload || {}
       });
       if (result.success) {
          yield put(createAction(`${getDeptTreeMaSuccess}`)(result.data));
        }else{
         yield put(createAction(`${COMMON_ERROR}`)(result));
      }
   }, 
  * [getMessage]({payload}, {call, put, select}){
      const requestURL = API.getMessage;
       const result = yield call(request, requestURL, {
          body: payload || {}
       });
       if (result.success) {
          yield put(createAction(`${getMessageSuccess}`)(result.data));
        }else{
         yield put(createAction(`${COMMON_ERROR}`)(result));
      }
   }, 
  },
}

