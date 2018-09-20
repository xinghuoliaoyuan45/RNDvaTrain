import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import {Actions} from 'react-native-router-flux'
import {Container, Content, Button,Header, Title,Body,Right,Left,Icon} from 'native-base'
import HeadBar from 'js/components/HeadBar';
export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <HeadBar
          titleText={this.props.title}
          leftBackIconOnPress={Actions.pop}
          rightVisible={false}/>
        <View style={{justifyContent: 'center', flex: 1}}>
        <View style={{alignSelf: 'center'}}>
          <Text onPress={() => Actions.pop()}>点我跳转到登陆</Text>
        </View>
        </View>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerStyle:{
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      height: 45,
      borderBottomWidth: 1,
      borderColor: '#CCCCCC'
  }
});
