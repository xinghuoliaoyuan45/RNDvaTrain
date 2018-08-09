import {Dimensions} from 'react-native';
import moment from 'moment';
import Picker from 'react-native-picker';
const React = require('react-native');
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

/**
 *  2017-01-01 --2030-12-31
 * @returns {Array}
 * @private
 */
export function loadDateData(startYear = parseInt(moment(new Date()).format('YYYY'))) {

    let date = [];
    for (let i = startYear; i < startYear+50; i++) {
        let month = [];
        for (let j = 1; j < 13; j++) {
            let day = [];
            if (j === 2) {
                for (let k = 1; k < 29; k++) {
                    if (k < 10) {
                        day.push('0' + k);
                    } else {
                        day.push(k);
                    }

                }
                //Leap day for years that are divisible by 4, such as 2000, 2004
                if (i % 4 === 0) {
                    day.push(29);
                }
            }
            else if (j in {1: 1, 3: 1, 5: 1, 7: 1, 8: 1, 10: 1, 12: 1}) {
                for (let k = 1; k < 32; k++) {
                    if (k < 10) {
                        day.push('0' + k);
                    } else {
                        day.push(k);
                    }
                }
            }
            else {
                for (let k = 1; k < 31; k++) {
                    if (k < 10) {
                        day.push('0' + k);
                    } else {
                        day.push(k);
                    }
                }
            }
            let _month = {};
            if (j < 10) {
                _month['0' + j] = day;
            } else {
                _month[j] = day;
            }

            month.push(_month);
        }
        let _date = {};
        _date[i] = month;
        date.push(_date);
    }
    // console.log('选择日期date', date);
    return date;
}
export function loadDateTimeData() {
  let years = [],
    months = [],
    days = [],
    hours = [],
    minutes = [];
  for(let i=1;i<51;i++){
    years.push(i+1980);
  }
  for(let i=1;i<13;i++){
    months.push(i);
    hours.push(i);
  }
  for(let i=1;i<32;i++){
    days.push(i);
  }
  for(let i=1;i<61;i++){
    minutes.push(i);
  }
  let pickerData = [years, months, days, ['am', 'pm'], hours, minutes];
  let date = new Date();
  let selectedValue = [
    [date.getFullYear()],
    [date.getMonth()+1],
    [date.getDate()],
    [date.getHours() > 11 ? '下午' : '上午'],
    [date.getHours() === 12 ? 12 : date.getHours()%12],
    [date.getMinutes()]
  ];
  let onPickerSelect = pickedValue => {
    console.log(pickedValue);
    let targetValue = [...pickedValue];
    if(parseInt(targetValue[1]) === 2){
      if(targetValue[0]%4 === 0 && targetValue[2] > 29){
        targetValue[2] = 29;
      }
      else if(targetValue[0]%4 !== 0 && targetValue[2] > 28){
        targetValue[2] = 28;
      }
    }
    else if(targetValue[1] in {4:1, 6:1, 9:1, 11:1} && targetValue[2] > 30){
      targetValue[2] = 30;

    }
    // forbidden some value such as some 2.29, 4.31, 6.31...
    if(JSON.stringify(targetValue) !== JSON.stringify(pickedValue)){
      // android will return String all the time，but we put Number into picker at first
      // so we need to convert them to Number again
      targetValue.map((v, k) => {
        if(k !== 3){
          targetValue[k] = parseInt(v);
        }
      });
      Picker.select(targetValue);
      console.log('select value:', targetValue);
      pickedValue = targetValue;
    }
  }
  let toDateTimeString = (pickedValue)=>{
    let dateString = pickedValue[0] + "-" + pickedValue[1] + "-" + pickedValue[2];
    let hour24 = '';
    if(pickedValue[3] == '下午'){
      hour24 = pickedValue[4] + 12;
    }
    return dateString + ' ' + hour24 + ':' + pickedValue[5];
  }
  let initData = {
    pickerData : pickerData,
    selectedValue: selectedValue,
    onPickerSelect: onPickerSelect,
    toDateTimeString: toDateTimeString,
  }
  return initData;
}

export function timestampToString(ts, format) {
  return new moment(ts).format(format);
}

export const pickerUtils = (function () {
  let years = [],
    months = [],
    days = [],
    hours = [],
    minutes = [];
  for(let i=1;i<51;i++){
    years.push(i+1980);
  }
  for(let i=1;i<13;i++){
    months.push(i);
    hours.push(i);
  }
  for(let i=1;i<32;i++){
    days.push(i);
  }
  for(let i=0;i<60;i++){
    minutes.push(i);
  }
  let dateTimePickerData = [years, months, days, ['上午', '下午'], hours, minutes];
  let datePickerData = [years, months, days];
  let date = new Date();
  let dateTimeSelectedValue = [
    date.getFullYear(),
    date.getMonth()+1,
    date.getDate(),
    date.getHours() > 11 ? '下午' : '上午',
    date.getHours() === 12 ? 12 : date.getHours()%12,
    date.getMinutes()
  ];
  let getDateTimeSelectedValue = ()=>{
    let date = new Date();
    let dateTimeSelectedValue = [
      date.getFullYear(),
      date.getMonth()+1,
      date.getDate(),
      date.getHours() > 11 ? '下午' : '上午',
      date.getHours() === 12 ? 12 : date.getHours()%12,
      date.getMinutes()
    ];
    return dateTimeSelectedValue;
  }
  let getDateSelectedValue = ()=>{
    let date = new Date();
    let dateSelectedValue = [
      date.getFullYear(),
      date.getMonth()+1,
      date.getDate()
    ];
    return dateSelectedValue;
  }
  let dateTimeOnPickerSelect = pickedValue => {
    let targetValue = [...pickedValue];
    if(parseInt(targetValue[1]) === 2){
      if(targetValue[0]%4 === 0 && targetValue[2] > 29){
        targetValue[2] = 29;
      }
      else if(targetValue[0]%4 !== 0 && targetValue[2] > 28){
        targetValue[2] = 28;
      }
    }
    else if(targetValue[1] in {4:1, 6:1, 9:1, 11:1} && targetValue[2] > 30){
      targetValue[2] = 30;

    }
    if(targetValue[3] == '下午'){ //下午12点以后就是第二天了
      if(targetValue[4] == 12){
        targetValue[4] = 11;
      }
    }
    // forbidden some value such as some 2.29, 4.31, 6.31...
    if(JSON.stringify(targetValue) !== JSON.stringify(pickedValue)){
      // android will return String all the time，but we put Number into picker at first
      // so we need to convert them to Number again
      targetValue.map((v, k) => {
        if(k !== 3){
          targetValue[k] = parseInt(v);
        }
      });
      Picker.select(targetValue);
      pickedValue = targetValue;
    }
  }
  let dateOnPickerSelect = pickedValue => {
    let targetValue = [...pickedValue];
    if(parseInt(targetValue[1]) === 2){
      if(targetValue[0]%4 === 0 && targetValue[2] > 29){
        targetValue[2] = 29;
      }
      else if(targetValue[0]%4 !== 0 && targetValue[2] > 28){
        targetValue[2] = 28;
      }
    }
    else if(targetValue[1] in {4:1, 6:1, 9:1, 11:1} && targetValue[2] > 30){
      targetValue[2] = 30;

    }
    // forbidden some value such as some 2.29, 4.31, 6.31...
    if(JSON.stringify(targetValue) !== JSON.stringify(pickedValue)){
      // android will return String all the time，but we put Number into picker at first
      // so we need to convert them to Number again
      targetValue.map((v, k) => {
        if(k !== 3){
          targetValue[k] = parseInt(v);
        }
      });
      Picker.select(targetValue);
    }
  }
  function fillZeroForNum(num){
    if(num > 9){
      return num;
    }else{
      return '0' + num;
    }
  }
  let dateTimeArrayToString = (pickedValue)=>{
    let dateString = pickedValue[0] + "-" + fillZeroForNum(pickedValue[1]) + "-" + fillZeroForNum(pickedValue[2]);
    let hour24 = pickedValue[4];
    if(pickedValue[3] == '下午'){
      hour24 = parseInt(pickedValue[4]) + 12;
    }
    return moment(dateString + ' ' + fillZeroForNum(hour24) + ':' + fillZeroForNum(pickedValue[5])).format('YYYY-MM-DD HH:mm');
  }
  let dateArrayToString = (pickedValue)=>{
    let dateString = pickedValue[0] + "-" + fillZeroForNum(pickedValue[1]) + "-" + fillZeroForNum(pickedValue[2]);

    return dateString;
  }
  let dateTimeStringToArray = () => {

  }
  return {
    datePickerData: datePickerData,
    dateTimePickerData : dateTimePickerData,
    dateTimeSelectedValue: dateTimeSelectedValue,
    getDateTimeSelectedValue: getDateTimeSelectedValue,
    getDateSelectedValue: getDateSelectedValue,
    dateTimeOnPickerSelect: dateTimeOnPickerSelect,
    dateOnPickerSelect: dateOnPickerSelect,
    dateTimeArrayToString: dateTimeArrayToString,
    dateArrayToString: dateArrayToString,
    dateTimeStringToArray: dateTimeStringToArray
  }

})();
