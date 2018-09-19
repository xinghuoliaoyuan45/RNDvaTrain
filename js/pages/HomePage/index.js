import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import HeadStatusBar from 'js/components/HeadStatusBar';


class home extends Component {
  render() {
    console.log(this.props.title)
    return (

      <View style={{flex:1}}>
        <Text style={{alignSelf:'center'}}></Text>
      </View>

      );
  }
}

export default home

