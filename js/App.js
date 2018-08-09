import React from 'react';
import dva from './Dva';

import Home from './models/HomeModel';
import Me from './models/MeModel';

const app = dva({
    models: [Home, Me],
    onError(e) {
        console.log('onError', e);
    },
});

const App = app.start();

export default App;
