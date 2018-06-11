import renderer from './renderer';
import createStore from './store';
import { match } from 'react-router';
import { matchRoutes, RouteConfig } from 'react-router-config';
import Routes from '../app/routes';
import { all, fork, join } from 'redux-saga/effects';
import { fetchUsers } from '../app/sagas/userSaga';

interface IRouteConfig extends RouteConfig {
    loadData?: any;
    exact?: any;
    path: string;
    component: any;
}

const express = require('express');
const app = express();



app.use(express.static('public'));

app.get('*',  (req: any, res: any) => {
    console.log("HIT");

    const { store, sagaMiddleware } = createStore();
    
    function* sagas(){
        yield all([
            fetchUsers()
        ]);
    }
    
    sagaMiddleware.run(sagas).done.then(() => {
        res.send(renderer(req, store));
    });
    
});


app.listen(3030, () => {
    console.log("Listening on port 3030");
});