import React, {Component} from 'react';
import {View,Text} from 'react-native'
import {connect} from 'react-redux';

@connect()
class MeScreen extends Component {
    render() {
        return (
            <View>
               <Text>MeScreen</Text>
            </View>
        );
    }
}


export default MeScreen
