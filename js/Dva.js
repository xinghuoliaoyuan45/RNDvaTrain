import React, {Component} from 'react'
import {create} from 'dva-core';
import Root from './Root'

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




