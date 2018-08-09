import React, {Component} from 'react';
import {View,Text} from 'react-native'
import {connect} from 'react-redux';


class MeScreen extends Component {
    render() {
        return (
            <View>
               <Text>MeScreen</Text>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(MeScreen);