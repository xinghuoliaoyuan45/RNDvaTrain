import React, {Component} from 'react'
import {create} from 'dva-core';
import { Provider } from 'react-redux'
export default (options) => {
    const app = create(options);

    if (!global.registered) options.models.forEach(model => app.model(model));
    global.registered = true; //global === GLOBAL true
    app.start();

    const store = app._store;

    app.start = (container) => ()=> <Provider store={store}>{container}</Provider>;// 注意是两层 在 App.js start

    app.getStore = () => store;

    return app;
};




