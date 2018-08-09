import {server} from "../config/api";

/***
 * url 校验
 * @param str
 * @returns {boolean}
 * @constructor
 */
export function CheckUrl(str) {
  var RegUrl = new RegExp();
  RegUrl.compile("^[A-Za-z]+://[A-Za-z0-9-_]+\\.[A-Za-z0-9-_%&\?\/.=]+$");//jihua.cnblogs.com
  if (!RegUrl.test(str)) {
    return false;
  }
  return true;
}


/***
 * url 添加 http://
 * @param url
 * @returns {string}
 * @constructor
 */
export function AddHttp(url){
  let returnUrl = '';
  if(url && typeof(url) == 'string'){
    if(url.indexOf('http://') <0 || url.indexOf('https://') <0){
      returnUrl = "http://"+url;
    }else{
      returnUrl = url;
    }
  }
  return returnUrl;
}

