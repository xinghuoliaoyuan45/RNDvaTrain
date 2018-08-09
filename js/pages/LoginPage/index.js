import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View,Text} from 'react-native'

class Login extends Component {
    render() {
        return (
            <View>
                <Text>Login</Text>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(Login);