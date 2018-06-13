import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import createStore from './store';
import Routes from '../app/routes';

interface W extends Window {
    __STATE__?: Object;
}

((window: W) => {
    const serverState = window.__STATE__;
    const store = createStore(serverState);

    delete window.__STATE__;

    ReactDOM.hydrate(
        <Provider store={store}>
            <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
            </BrowserRouter>
        </Provider>, 
        document.querySelector("#root")
    );
    
})(window);
