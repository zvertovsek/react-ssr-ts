
import { Store, createStore, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import { RootStateModel, rootReducer } from '../app/reducers';
import * as sagas from '../app/sagas';

export function setStore(): Store<RootStateModel> {
    const sagaMiddleware = createSagaMiddleWare();
    const store = createStore(
        rootReducer, 
        {}, 
        applyMiddleware(sagaMiddleware)
    );

    sagas.registerWithMiddleware(sagaMiddleware);
    return store;
}

