import * as React from 'react';
import { Route } from 'react-router-dom';
import { RouteConfig } from 'react-router-config';

import App from '../app';
import HomePage from '../app/pages/HomePage';
import UsersPage from '../app/pages/UsersPage';

interface IRouteConfig extends RouteConfig {
    preloaders?: any;
    exact?: any;
    routes?: IRouteConfig[];
    path?: string;
    component: any;
}

const Routes: IRouteConfig[] = [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...UsersPage,
                path: '/users'
            }
        ]
    }
];

export default Routes;
