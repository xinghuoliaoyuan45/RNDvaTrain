import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View,Text} from 'react-native'


class home extends Component {
    render() {
        return (
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <Text>home</Text>
            </View>
        );
    }
}
export default home

