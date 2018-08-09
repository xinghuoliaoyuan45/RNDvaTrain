import React from 'react'
import {Platform} from 'react-native'
import {TabNavigator, TabBarBottom} from 'react-navigation'
import home from '../pages/HomePage'
import me from '../pages/MePage'
export default TabNavigator({
    home: {screen: home},
    me : {screen:me}
}, {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            labelStyle: {
                color: 'black'
            },
            showIcon: true,
            showLabel: true,
            indicatorStyle: {backgroundColor: 'transparent'}
        },
        lazy: true,
        swipeEnabled: false,
        animationEnabled: Platform.OS === 'ios'
    }
)