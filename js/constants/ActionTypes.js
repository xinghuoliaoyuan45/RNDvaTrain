/**
 * 定义action的类型
 */

export const TEST_TO_REDUCER = 'TEST_TO_REDUCER' //测试

export const FETCH_HOME_NAME = 'FETCH_HOME_NAME'; // 获取home name
export const SET_HOME_NAME = 'SET_HOME_NAME'; // 设置home name


export const COMMON_ERROR = 'poly/App/COMMON_ERROR';
// 登录
export const LOGIN = 'poly/App/LOGIN';
export const LOGIN_SUCCESS = 'poly/App/LOGIN_SUCCESS';
export const LOGIN_ERROR = 'polyApp/LOGIN_ERROR';
// 退出
export const LOGOUT = 'poly/App/LOGOUT';
export const LOGOUT_SUCCESS = 'poly/App/LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'polyApp/LOGOUT_ERROR';

// 注册
export const REGISTER = 'poly/App/REGISTER';
export const REGISTER_SUCCESS = 'poly/App/REGISTER_SUCCESS';
export const REGISTER_ERROR = 'poly/App/REGISTER_ERROR'

/* 保存登陆表单 */
export const SAVE_LOGIN_FORM = 'global>SAVE_LOGIN_FORM';

//底部栏切换
export const changeBottomTab =  'tab>CHANGE_BOTTOM_TAB'





//用户字典
export const LOAD_DICT_LIST = 'sys/LOAD_DICT_LIST';
export const LOAD_DICT_LIST_SUCCESS = 'sys/LOAD_DICT_LIST_SUCCESS';
export const LOAD_DICT_LIST_ERROR = 'sys/LOAD_DICT_LIST_ERROR';

/* 加载用户资源（权限） 列表*/
export const LOAD_USER_RESOURCE_LIST='global/LOAD_USER_RESOURCE_LIST';
export const LOAD_USER_RESOURCE_LIST_SUCCESS='global/LOAD_USER_RESOURCE_LIST_SUCCESS';
export const LOAD_USER_RESOURCE_LIST_ERROR='global/LOAD_USER_RESOURCE_LIST_ERROR';
/* 保存 用户资源（权限） 搜索表单*/
export const SAVE_SEARCH_USER_RESOURCE_FORM = 'global/SAVE_SEARCH_USER_RESOURCE_FORM';

