import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View,Text} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';


class home extends Component {
  static navigationOptions = {
    tabBarLabel: '主页',
    tabBarIcon: ({focused}) =>
      (focused ? <Icon name={'ios-home'} size={18}  color={'black'}/> :
        <Icon name={'ios-home'} size={18}  color={'gray'}/>),
  }
    render() {
        return (
            <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
                <Text>home</Text>
            </View>
        );
    }
}
export default home

