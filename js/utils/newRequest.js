import ky from 'ky';
import { Alert } from 'react-native';
import { API } from 'js/config/api'
import {Pages} from "../pages";

const controller = new AbortController();
const {signal} = controller;

const REQ_TIMEOUT_WHITE_LIST = [
  API.sendCustomerMessage, //向客户发送消息
  API.addCustomerMass, //群发
];


function setTimeout(url) {
  if(url.indexOf(REQ_TIMEOUT_WHITE_LIST)!=-1){
    setTimeout(() => controller.abort(), 10000)
  }else{
    setTimeout(() => controller.abort(), 4000)
  }
}

export default function requestNew(url, options) {
  return (async () => {
    try {
      return await ky.post(url, {signal}).json();
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('Fetch aborted');
      } else {
        console.error('Fetch error:', error);
      }
    }
  })
}
