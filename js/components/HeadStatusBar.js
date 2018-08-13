import React, {Component} from 'react';
import {StatusBar,View, Platform} from 'react-native';
import colors from 'js/themes/colors';
import {isIphoneXStatusBar} from 'js/components/IsIponeXDept'
import DeviceInfo from 'react-native-device-info';

export default class HeadStatusBar extends Component {

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    translucent={true}
                    hidden={false}
                    animated={true}
                    barStyle="default"
                    backgroundColor={colors.transparent}
                    networkActivityIndicatorVisible={false}
                />
            </View>
        )
    }
}

const styles =
    {
        container: {
            height:  Platform.OS == 'ios' ? isIphoneXStatusBar():parseFloat(DeviceInfo.getSystemVersion()) > 4.4 ? StatusBar.currentHeight : 24 - StatusBar.currentHeight,
            backgroundColor:colors.appColor,
            width: '100%',
        }
    };


