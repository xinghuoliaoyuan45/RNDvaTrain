import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import {Actions} from 'react-native-router-flux'
import HeadBar from 'js/components/HeadBar';
import HeadStatusBar from "../../components/HeadStatusBar";
import * as base from 'native-base'

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <base.Container>
        <HeadStatusBar/>
        <HeadBar
          titleText={this.props.title}
          leftBackIconOnPress={Actions.pop}
          leftVisible={true}
          rightVisible={false}/>
          <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
            <base.Button onPress={Actions.home} style={{alignSelf:'center'}}>
            <base.Text >点我跳转到home</base.Text>
            </base.Button>
            <base.Button onPress={Actions.login} style={{alignSelf:'center'}}>
            <base.Text >点我跳转到login</base.Text>
            </base.Button>
          </View>
      </base.Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 45,
    borderBottomWidth: 1,
    borderColor: '#CCCCCC'
  }
});
