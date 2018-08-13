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

// const mapStateToProps = (state) => {
//   return {
//     user: state.getIn(['global', 'user']),
//     isLoggedIn: state.getIn(['global', 'isLoggedIn']),
//     loginForm: state.getIn(['global', 'loginForm']),
//   }
// }

// export function mapDispatchToProps(dispatch) {
//   return {
//     login: (data) => {
//       dispatch(login(data));
//     },
//     logoutSuccess: (data) => {
//       dispatch(logoutSuccess(data));
//     },
//     // 保存登陆表单
//     saveLoginForm: (data)=> dispatch(saveLoginForm({data})),
//     toggleKickModal: (payload) => {
//       dispatch(toggleKickModal(payload));
//     },
//   }
// }

// export default connect(
//     mapStateToProps,mapDispatchToProps
// )(MeScreen);
export default MeScreen
