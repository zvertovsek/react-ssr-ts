import renderer from './renderer';
import createStore from './store';
import { match } from 'react-router';
import { matchRoutes, RouteConfig } from 'react-router-config';
import Routes from '../app/routes';
import { SagaIterator } from 'redux-saga';
import { call, all, fork, join, CallEffectFn } from 'redux-saga/effects';

const express = require('express');
const proxy = require('express-http-proxy');
const app = express();
const _PORT: number = 3030;


interface IRouteConfig extends RouteConfig {
    loadData?: any;
    exact?: any;
    path: string;
    component: any;
}


type Loader = {
    fn: CallEffectFn<any>;
    attrs: Object;
}

app.use('/api', proxy('https://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts: any){
        opts.headers['x-forwarded-host'] = 'localhost:'+_PORT
        return opts;
    }
}))

app.use(express.static('public'));

app.get('*',  (req: any, res: any) => {
    const { store, sagaMiddleware, __API__ } = createStore(req);
    const preloaders: any[] = [];
    
    matchRoutes(Routes, req.path).forEach( ({ route }: any) => {
        if (route.preloaders) {
            route.preloaders.forEach((action: Object) => {
                preloaders.push(action)
            });
        }
    } );

    function* sagas(): any {
        yield all(
            preloaders.map( 
                (loader: CallEffectFn<any>) => call(loader.fn, { ...loader.attrs, __API__ }) 
            )
        );
    }
    
    sagaMiddleware.run(sagas).done.then(() => {
        res.send(renderer(req, store));
    });
    
});


app.listen(_PORT, () => {
    console.log("Listening on port 3030");
});
