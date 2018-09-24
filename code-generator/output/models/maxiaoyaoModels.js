
//--------------------
//下面的内容复制到 config/api文件 里面

//获取部门树
getDeptTree: 'server + /api/v1/us/depts/stores/treelist'
//登录
login: 'server + /api/v1/us/users/login'


//-----------------------------
//下面的内容复制到 constants/ActionTypes文件 里面

//获取部门树
getDeptTree: 'test/GET_DEPT_TREE'
getDeptTreeSuccess: 'test/GET_DEPT_TREE_SUCCESS'

//登录
getMessage: 'test/GET_MESSAGE'
getMessageSuccess: 'test/GET_MESSAGE_SUCCESS'

//保存登陆表单
saveLoginForm: 'test/SAVE_LOGIN_FORM'


//下面的内容会写到 output文件夹 名字为filename --------------------------
import {API} from '../config/api'
import request from 'js/utils/request';
import {Toast} from 'antd-mobile'
import {createAction} from "../utils";
import Immutable from 'immutable';

import{
  getDeptTree,//获取部门树
  getDeptTreeSuccess,//获取部门树成功后
  getMessage,//登录
  getMessageSuccess,//登录成功后
  saveLoginForm//保存登陆表单
  }  from '../constants/ActionTypes';

export default {
  namespace: 'test',
  state: Immutable.fromJS({
      a:2
  }),
reducers: {
  /** 获取部门树*/
  [getDeptTreeSuccess](state, { payload }){
          return state.set('a',1);
        },
  /** 登录*/
  [getMessageSuccess](state, { payload }){
          return state.set('a',1);
        },
  /** 保存登陆表单*/
  [saveLoginForm](state, { payload }){
        return state.set('a',1);
    },
  },
effects: {
 
  * [getDeptTree]({payload}, {call, put, select}){
      const requestURL = API.getDeptTree;
       const result = yield call(request, requestURL, {
          body: payload || {}
       });
       if (result.success) {
          yield put(createAction(`${getDeptTreeSuccess}`)(result.data));
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

