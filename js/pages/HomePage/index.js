import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View,Text} from 'react-native'

class home extends Component {
    render() {
        return (
            <View>
                <Text>home</Text>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(home);