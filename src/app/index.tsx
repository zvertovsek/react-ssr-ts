import * as React from 'react';
import { renderRoutes } from 'react-router-config';
import { authInitializer } from './sagas/authSaga';

import Header from './components/header';

const App = ({ route }: any) => {
    return (
        <div>
            <Header />
            {renderRoutes(route.routes)}
        </div>
    );
}

export default {
    preloaders: [ 
        { fn: authInitializer, attrs: {} } 
    ],
    component: App
}