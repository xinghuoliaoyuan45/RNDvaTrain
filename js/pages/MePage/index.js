import React, {Component} from 'react';
import {View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

class MeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: '我的',
    tabBarIcon: ({focused}) =>
      (focused ? <Icon name={'ios-body'} size={22} color={'black'}/> :
      <Icon name={'ios-body'} size={22}  color={'gray'}/>),
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Me</Text>
      </View>
    );
  }
}


export default MeScreen
