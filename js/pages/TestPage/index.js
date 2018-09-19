import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import {Actions} from 'react-native-router-flux'
import {Container, Content, Header, Title,Body,Right,Left} from 'native-base'

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Header>
          <Left/>
          <Body>
          <Title>TestPage</Title>
          </Body>
          <Right/>
        </Header>
        <View style={{justifyContent: 'center', flex: 1}}>
          <Text style={{alignSelf: 'center'}} onPress={() => Actions.pop()}>点我跳转到登陆</Text>
        </View>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
