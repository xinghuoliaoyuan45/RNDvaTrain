import {Dimensions, Platform} from 'react-native';
import {API, server, wxAppId} from "../config/api";
import {Toast} from 'antd-mobile';
import constants from './constants';
const React = require('react-native');
export const deviceHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;
const basePx = 375;

/**
 * 将String变量split '-' 变为数组
 */
export function spiltStringToArray(data){
  let array = [];
  if(data && data.indexOf('-') >= 0){
    array = data.split('-');
  }
  return array;
}

/**
 * 将String变量split变为数组
 */
export function spiltStringToArrayByChar(data,character){
  let array = [];
  if(data && character && data.indexOf(character) >= 0){
    array = data.split(character);
  }
  return array;
}

/**
 * 根据code判断权限
 * @param resourceCode
 * @param userResourceList
 */
export function hasPermission(resourceCode) {
  let resourceList = GLOBAL.user.codes;
  let found = false;
  for(let i = 0; i < resourceList.length; i++){
    if(resourceCode === resourceList[i]){
      found = true;
      break;
    }
  }
  return found;
  // return true;
}


/***
 * 资源列表
 */
export const resourceMap = constants.resourceMap;

/**
 * 判定登录人是否是店长或导购
 */
export function isShowGuideOrOwner(){
  const labels = GLOBAL.user.labels || '';
  if(labels.indexOf('店长') > -1 || labels.indexOf('导购') > -1){
    return true;
  }
  return false;
}

/**
 * px2dp
 * @param px
 * @return {number}
 */
export function px2dp(px) {
  return px *  deviceWidth / basePx
}


/**
 * 电话号码正则函数
 */
export function checkPhone(value){
  let isPhone = false;
  const reg=/^1[3456789]\d{9}$/;
  if (reg.test(value)) {
    isPhone = true;
  }
  return isPhone;
}

// export function checkPhone(value){
//   let isOK = false;
//   if(!value){
//     return isOK;
//   }
//   // const isPhone=/^1(3|4|5|7|8)\d{9}$/;
//   // const isMob=/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;
//   const both=/(^0\d{2,3}\-\d{7,8}$)|(^1[3|4|5|6|7|8][0-9]{9}$)/;
//   if(both.test(value)){
//     isOK = true;
//   }
//   return isOK;
// }

/**
 * 名字正则函数，不能有特殊字符
 */
export function checkName(value){
  let isName = false;
  const reg= /^[\u4E00-\u9FA5a-zA-Z0-9_]{0,}$/;
  if (reg.test(value)) {
    isName = true;
  }
  return isName;
}

/**
 * 验证字符串中是否包含emoji表情
 */
export function containEmoji(value){
  const reg = /\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g;
  if(reg.test(value)){
    return true;
  }
  return false
}

/**
 * 纯数字校验
 */
export function checkIsAllNumber(value){
  let isAllNumber = false;
  const reg= /^\d+$/;
  if (reg.test(value)) {
    isAllNumber = true;
  }
  return isAllNumber;
}

/**
 * 金额校验
 * 判断字符串如果是整数不能以0开头后面加正整数，如果是浮点数整数部分不能为两个0：如00.00，如果是整数，
 * @param str
 * @returns {*}
 */
export function checkRates(str){
  let re = /^(([1-9][0-9]*\.[0-9][0-9]*)|([0]\.[0-9][0-9]*)|([1-9][0-9]*)|([0]{1}))$/;
  let Sure;
  if (!re.test(str)){
    Sure =false;
  }else{
    Sure =true;
  }
  return Sure;
}


/**
 * 路径+ip
 */
export function getHttpUrl(url){
  //console.log("url",url);
  let returnUrl = '';
  if(url && typeof(url) == 'string'){
    if(url.indexOf('http') <0){
      if(url.indexOf('/') === 0){
        returnUrl = server + url;
      }else{
        returnUrl = server + '/' + url;
      }

    }else{
      returnUrl = url;
    }
  }
  return returnUrl;
}


/**
 * Upper Case
 * A-Z  26个大写字母
 */
export function getUpperCase(){
  let upperCaseArray=[];
  for(let i=0;i<26;i++){
    upperCaseArray.push(String.fromCharCode(65+i));
  }
  return upperCaseArray;
}

/**
 * 将对象转换为queryString
 * @param obj
 * @returns {string}
 */
export function objectToQueryString(obj){
  return Object.keys(obj).map((key, index)=>{
    return `${key}=${obj[key]}`
  }).join('&');
}

/**
 * 字符串截取(一个汉字==两个字符)
 * @param str
 * @param length
 * @returns {*}
 */
export function clipStringCN(str, n) {
  if(!str) return '';
  let strRealLength = str.replace(/[\u0391-\uFFE5]/g,"**").length;
  if(strRealLength <= n){ return str; }
  var m=Math.floor(n/2);
  for(var i=m; i<str.length; i++){
    if(str.substr(0,i).replace(/[\u0391-\uFFE5]/g,"**").length>=n){
      return str.substr(0,i)+"...";
    }
  }
  return this;
}

/***
 * 保留两位小数
 * 功能：将浮点数四舍五入，取小数点后2位
 * @param x
 * @returns {Number}
 */
//

export function toDecimal(x) {
  let f = parseFloat(x);
  if (isNaN(f)) {
    return;
  }
  f = Math.round(x*100)/100;
  return f;
}


/***
 * 数组去重
 * @param arr
 * @returns {Array}
 */
export function removeDuplicate(arr){
  let  result = [];
  let len = arr.length;
  arr.forEach(function(v, i ,arr){    //这里利用map，filter方法也可以实现
    let bool = arr.indexOf(v,i+1);    //从传入参数的下一个索引值开始寻找是否存在重复
    if(bool === -1){
      result.push(v);
    }
  });
  console.log("result",result);
  return result;
};


/**
 * 获取appId
 * @returns {string}
 */
export function getWXAppId(){
  let appId = '';
  if(Platform.OS == 'ios'){
    appId = wxAppId;
  }else{
    appId = 'wxf25c6e8a5fc7f20a'
  }
  return appId;
};

/***
 * 业绩统计获取用户的dept和roleType
 * @param
 * @returns {object}
 */
export function getDeptIdAndRoleType(){
  let loginInfo = GLOBAL.user;
  let deptId;
  let roleType;
  let dept = loginInfo.dept;
  //组织架构根结点
  if(dept&&dept.parentId == -1){
    //总部
    roleType = 5;
    deptId = loginInfo.hqId;
  }
  if(loginInfo.labelIds.indexOf(1) > -1){
    //导购
    roleType = 1;
    deptId = loginInfo.deptId;
  }else if(loginInfo.labelIds.indexOf(2) > -1){
    //店长
    roleType = 2;
    deptId = loginInfo.deptId;
  }
  if(loginInfo.deptType == 1&&loginInfo.dept){
    if(!dept.branchId&&(!dept.agentId||dept.agentId == '')){
      //大区
      roleType = 4;
      deptId = loginInfo.branchId;
    }else if(dept.branchId&&dept.branchId != '' && dept.agentId && dept.agentId != ''){
      //代理商
      roleType = 3;
      deptId = loginInfo.dealerId;
    }else if((!dept.branchId||dept.branchId == '') && (!dept.agentId||dept.agentId == '')){
      //总部
      roleType = 5;
      deptId = loginInfo.hqId;
    }
  }
  return { deptId ,roleType}
}

/***
 * 业绩统计获取用户的角色名称roleName
 * @param
 * @returns {object}
 */
export function getRoleName(){
  let loginInfo = GLOBAL.user;
  let roleName = '';
  let dept = loginInfo.dept;
  //组织架构根结点
  if(dept&&dept.parentId == -1){
    //总部
    roleName = '总部';
  }
  if(loginInfo.labelIds.indexOf(1) > -1){
    //导购
    roleName = '导购';
  }else if(loginInfo.labelIds.indexOf(2) > -1){
    //店长
    roleName = '店长';
  }
  if(loginInfo.deptType == 1&&loginInfo.dept){
    if(!dept.branchId&&(!dept.agentId||dept.agentId == '')){
      //大区
      roleName = '大区';
    }else if(dept.branchId&&dept.branchId != '' && dept.agentId && dept.agentId != ''){
      //代理商
      roleName = '代理商';
    }else if((!dept.branchId||dept.branchId == '') && (!dept.agentId||dept.agentId == '')){
      //总部
      roleName = '总部';
    }
  }
  return {roleName}
}
/**
 * 业绩权限登陆权限逻辑
 *  @param
 * @returns {object}
 * */
export function getAchieveDeptIdAndRoleType(){
  let loginInfo = GLOBAL.user;
  let deptId;
  let roleType;
  let roleName = '';
  let dept = loginInfo.dept;

  if(dept&&dept.parentId == -1){
    //总部
    roleType = 5;
    deptId = loginInfo.hqId;
    roleName = '总部';
  }
  if(loginInfo.labelIds.indexOf(42) > -1){
    //导购
    roleName = '导购';
    roleType = 1;
    deptId = loginInfo.deptId;
  }else if(loginInfo.labelIds.indexOf(41) > -1){
    //店长
    roleName = '门店';
    roleType = 2;
    deptId = loginInfo.deptId;
  }
  if (dept&&dept.type === 5){
    //大区
    roleName = '大区';
    roleType = 4;
    deptId = loginInfo.branchId;
  }
  if (dept&&dept.type === 4){
    //代理商
    roleName = '代理商';
    roleType = 3;
    deptId = loginInfo.dealerId;
  }
  if (dept&&dept.type === 1){
    //部门
    if (isNotBlankString(dept.branchId) && !isNotBlankString(dept.agentId)){
       //大区下部门
      roleName = '部门';
      roleType = 4;
      deptId = loginInfo.branchId;
    }
    if (isNotBlankString(dept.branchId) && isNotBlankString(dept.agentId) ){
      //经销商下部门
      roleName = '部门';
      roleType = 3;
      deptId = loginInfo.dealerId;
    }
    if (!isNotBlankString(dept.branchId) && !isNotBlankString(dept.agentId)){
      //总部下部门
      roleName = '部门';
      roleType = 5;
      deptId = loginInfo.hqId;
    }
  }
  return { deptId , roleType ,roleName}
}
/*
  根据roleType获取下级名称
* */
export function getSubOrdinateUnit(item){
  let loginInfo = GLOBAL.user;
  let roleType = item;
  let dept = loginInfo.dept;

  if(roleType === 1){
    //导购
    roleType = 1;
    return '';
  }else if(roleType === 2){
    //门店
    roleType = 2;
    return '人';
  }
  if (roleType === 4){
    //大区
    roleType = 4;
    return '代理商';
  }
  if (roleType === 3){
    //代理商
    roleType = 3;
    return '部门';
  }
  if (dept.type === 1){
    //部门
    if (isNotBlankString(dept.branchId) && !isNotBlankString(dept.agentId) && roleType === 4){
      //大区下部门
      roleType = 4;
      return '门店';
    }
    if (isNotBlankString(dept.branchId) && isNotBlankString(dept.agentId) && roleType === 3){
      //经销商下部门
      roleType = 3;
      return '门店';
    }
    if (!isNotBlankString(dept.branchId) && !isNotBlankString(dept.agentId) && roleType === 5){
      //总部下部门
      roleType = 5;
      return '门店';
    }
  }
  return ''
}
/**
 * 非空判断
 * */
export function isNotBlankString(str){
  if (str && str != '' && str != null){
    return true
  }
  else {
    return false
  }
}
/**
 * 判断字符串
 * */
export function checkCustomerInfo(data){
  if(data){
    return data;
  }
  else {
    return '';
  }
}
