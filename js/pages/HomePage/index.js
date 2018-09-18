import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';


class home extends Component {


  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{height: 80, width: '100%', backgroundColor: 'red', flexDirection: 'row'}}>
          <View style={{flex:1}}>
            <Text>11111111111111111111111111111111111111111111</Text>
          </View>


          <Text style={{witdh:80, alignSelf:'center'}}>2222222</Text>

        </View>

      </View>
    );
  }
}

export default home

