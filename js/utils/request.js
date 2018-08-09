import { Toast } from 'antd-mobile';
import { Alert } from 'react-native';
import { API } from 'js/config/api'
// import Toast, {DURATION} from 'react-native-easy-toast';

/** 请求超时毫秒数 */
export const REQ_TIMEOUT = 30000;
// let closeToastTimeout;
/** 请求超时白名单 */
const REQ_TIMEOUT_WHITE_LIST = [
  API.sendCustomerMessage, //向客户发送消息
  API.addCustomerMass, //群发
];

/**
 * 判断api是否在超时白名单中
 * @param apiPath
 * @returns {boolean}
 */
function isApiInReqTimeoutWhiteList(apiPath){
  let inWhiteList = false;
  for(let i = 0; i < REQ_TIMEOUT_WHITE_LIST.length; i++){
    if(apiPath.indexOf(REQ_TIMEOUT_WHITE_LIST[i]) > -1){
      inWhiteList = true;
    }
  }
  return inWhiteList;
}
/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if(response && response.json && response.ok === true){
    var result = response.json();

    return result;
  }
  return response;

}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  return response;
  //
  // const error = new Error(response.statusText);
  // error.response = response;
  // throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options) {
  if(!url){
    return;
  }
  Toast.loading('加载中',50);
  let opt = {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token': GLOBAL.token,
      'clientMark':'react-native',
    },
    method: 'post',
    credentials: 'include',
    ...options
  }
  if(opt.body){

    Object.keys(opt.body).map(function(key, index) {
      if(opt.body[key] === '' || opt.body[key] === null || opt.body[key] === undefined){
        delete opt.body[key]
      }else if(key === 'status' && (opt.body[key] === '0' || opt.body[key] === '请选择')){
        delete opt.body[key]
      }

    });
    opt.body = JSON.stringify(opt.body)
  }
  let reqTimeout = REQ_TIMEOUT;
  if(isApiInReqTimeoutWhiteList(url)){
    reqTimeout = 6000000;
  }
  return _fetch(fetch_promise(url, opt), reqTimeout);
}

function _fetch(fetch_promise, timeout) {
  var abort_fn = null;
  var abort_promise = new Promise((resolve, reject) => {
    abort_fn = function() {
      reject('abort promise');
    };
  });
  var abortable_promise = Promise.race([
    fetch_promise,
    abort_promise
  ]);
  setTimeout(function(){
    abort_fn();
  }, timeout);

  return abortable_promise;
}

function fetch_promise(url, opt = {}) {
  return new Promise((resolve, reject) => {
    return fetch(url, opt)
      .then(checkStatus)
      .then(parseJSON)
      .then((json)=>{
        if(!json.success && json.errorMsg){
          Toast.hide();
          Toast.fail(json.errorMsg, 2);
        }else{
          Toast.hide();
        }
        json.reqBody = opt.body;
        resolve(json);
      })
      .catch((e)=>{
        reject(e);
        // clearTimeout(timeoutToast);
        if(e.message == 'Network request failed'){
          Toast.hide();
          Toast.fail('无法连接到网络', 2);
        }else if (e === 'abort promise'){
          console.log('请求超时');
        }else{
          Toast.hide();
          Toast.fail('网络错误', 2);
          throw e;
        }
      });
  })
}
