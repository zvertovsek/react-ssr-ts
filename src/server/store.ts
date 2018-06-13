// server store

import { Store, createStore, applyMiddleware } from 'redux';
import { RootStateModel, rootReducer } from '../app/reducers';
import axios from 'axios';
import { sagaMiddleware, runSagas } from "../app/sagas";

export default (req: any) => {
    const store = createStore(
        rootReducer, 
        {}, 
        applyMiddleware(sagaMiddleware)
    );

    const __API__: any = axios.create({
        baseURL: 'https://react-ssr-api.herokuapp.com',
        headers: { cookie: req.get('cookie') ? req.get('cookie') : '' }
    });

    runSagas({ __API__ });

    return { store, sagaMiddleware, __API__ };
}

