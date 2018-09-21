// {
//   filename:"testModel"
//   "namespace": "test",
//   "actions": [   {
//   "name": "保存登陆表单",
//   "type": "single",
//   "method_base": "saveLoginForm",
//   "constant_name": "SAVE_LOGIN_FORM"
// }, {
//   "name": "获取登录数据",
//   "type": "api",
//   "method_base": "getMessage",
//   "constant_name": "GET_MESSAGE"
// }]
// }
//--------------------
//复制到 config/api文件 里面




//-----------------------------







//--------------------------
import {API} from '../config/api'
import request from 'js/utils/request';
import {Toast} from 'antd-mobile'
import {createAction} from "../utils";
import Immutable from 'immutable';
import{COMMON_ERROR}  from '../constants/ActionTypes';

export default {
  namespace: 'common',
  state: Immutable.fromJS({
      errorMessage:''
  }),
reducers: {
  /** 公共处理的model*/
  [COMMON_ERROR](state, { payload }){
    let action = payload
    if(action.error && action.error.errorMsg){
      if(action.error.toastType == 'info'){
        Toast.info(action.error.errorMsg, 1);
      }else{
        Toast.fail(action.error.errorMsg, 1);
      }
    }else if(action.error.status){
      Toast.fail('服务器繁忙')
    }else if(action.error == 'abort promise'){
      Toast.fail('请求超时',1)
    }else{
      console.log(action.error);
    }
    return state.set('error', action.error)
  }
},
effects: {

}
}
