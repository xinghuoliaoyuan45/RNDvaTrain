
//--------------------
//下面的内容复制到 config/api文件 里面



//-----------------------------
//下面的内容复制到 constants/ActionTypes文件 里面

//底部栏切换
changeBottomTab: 'Home/CHANGE_BOTTOM_TAB'


//下面的内容会写到 output文件夹 名字为filename --------------------------
import {API} from '../config/api'
import request from 'js/utils/request';
import {Toast} from 'antd-mobile'
import {createAction} from "../utils";
import Immutable from 'immutable';

import{
  changeBottomTab,//底部栏切换
  
  }  from '../constants/ActionTypes';

export default {
  namespace: 'Home',
  state: Immutable.fromJS({
      a:2
  }),
reducers: {
  /** 底部栏切换*/
  [changeBottomTab](state, { payload }){
        return state.set('a',1);
    },
  },
effects: {
 
  },
}

