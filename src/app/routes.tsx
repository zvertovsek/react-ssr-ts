import * as React from 'react';
import { Route } from 'react-router-dom';
import { RouteConfig } from 'react-router-config';
import Home from '../app/components/Home';
import Users, { loadData } from '../app/components/Users';

interface IRouteConfig extends RouteConfig {
    loadData?: any;
    exact?: any;
    path: string;
    component: any;
}

const Routes: IRouteConfig[] = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/users',
        component: Users,
        loadData: loadData
    }
];

export default Routes;
