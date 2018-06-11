// server store

import { Store, createStore, applyMiddleware } from 'redux';
import {  } from 'redux-saga';
import { RootStateModel, rootReducer } from '../app/reducers';
import { sagaMiddleware, runSagas } from "../app/sagas";

export default () => {
    const store = createStore(
        rootReducer, 
        {}, 
        applyMiddleware(sagaMiddleware)
    );

   runSagas();

    return { store, sagaMiddleware };
}

