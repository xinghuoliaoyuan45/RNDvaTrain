import React, {Component} from 'react'
import {create} from 'dva-core';
import {Provider, connect} from 'react-redux';
import SplashScreen from "react-native-splash-screen";
import MainStackRouter from "./routers/MainStackRouter";

export default (options) => {
    const app = create(options);

    if (!global.registered) options.models.forEach(model => app.model(model));

    global.registered = true;//global === GLOBAL true

    app.start();

    const store = app._store;

    app.start = () => ()=> <Root store={store}/>;// 注意是两层

    app.getStore = () => store;
    return app;
};


class Root extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    componentDidMount() {
        SplashScreen.hide()//隐藏启动屏
    }

    render() {
        return (
            <Provider store={this.props.store}>
                <MainStackRouter/>
            </Provider>
        )
    }
}


