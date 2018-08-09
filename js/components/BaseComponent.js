import React from 'react';
import {View,Platform} from 'react-native';
//import RNUMAnalytics from 'react-native-app-analytics';
import {StackNavigator} from "react-navigation";
const  UMENG_ANDROID_APP_KEY ='5a4c4aa2f29d98018e000153'; //Umeng Android APP Key
const  UMENG_IOS_APP_KEY ='5a4c4aee8f4a9d5de80000c2'; //Umeng IOS APP Key


class BaseComponent extends React.Component {

  // MainStackRouter ->>>>>>>> 里面已经写过了
  // static navigationOptions = {
  //   header: null
  // };

  componentWillMount() {
    if(Platform.OS === 'ios'){
      // RNUMAnalytics.startWithConfigure(UMENG_IOS_APP_KEY,"");
    }else{
     // RNUMAnalytics.startWithConfigure(UMENG_ANDROID_APP_KEY,"");
    }
  }

  render(){
    return (
      <View>

      </View>
    )
  }
}

export default  BaseComponent;
