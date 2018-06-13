import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import Routes from '../app/routes'; 

const serialize = require('serialize-javascript');

export default (req: any, store: any) => {
    const content = ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    );
    return `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.__STATE__ = ${serialize(store.getState())}
                </script>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
}
