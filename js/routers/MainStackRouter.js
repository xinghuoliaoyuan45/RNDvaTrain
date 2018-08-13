import React from 'react'
import {StackNavigator} from 'react-navigation'
import Login from '../pages/LoginPage'
import TabRouter from './TabRouter'

export default StackNavigator({
    Login: {screen: Login},
    TabNavigation: {screen: TabRouter},
    //页面都写在这里













}, {
    headerMode: 'screen',
    navigationOptions: ({navigation}) => {
        return {
            headerBackTitle: null,
            headerTintColor: 'white',
            headerTitleStyle: {alignSelf: 'center', color: 'black'},
            headerStyle: {
                backgroundColor: 'white',
                borderBottomColor: '#f3f3f3',
                borderBottomWidth: 1,
                elevation: 0,
            },
            header: null,
        }
    }
})
