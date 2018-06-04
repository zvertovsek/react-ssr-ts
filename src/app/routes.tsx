import * as React from 'react';
import { Route } from 'react-router-dom';
import Home from '../app/components/Home';
import Users from '../app/components/Users';

export default () => {
    return (
        <div>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/users" component={Users} />
        </div>
    );
}
