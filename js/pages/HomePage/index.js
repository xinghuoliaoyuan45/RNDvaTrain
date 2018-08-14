import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View,Text} from 'react-native'

@connect()
class home extends Component {
    render() {
        return (
            <View>
                <Text>home</Text>
            </View>
        );
    }
}
export default home

