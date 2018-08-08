import React, {Component} from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return {};
}

class SomeTest extends Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(SomeTest);