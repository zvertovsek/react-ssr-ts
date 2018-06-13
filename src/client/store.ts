// client store
import { Store, createStore, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga';
// import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';
import { RootStateModel, rootReducer } from '../app/reducers';
import * as sagas from '../app/sagas';

export default (initialState: any = {}): Store<RootStateModel> => {
    let middleware = applyMiddleware(sagas.sagaMiddleware);
    // if (process.env.NODE_ENV !== 'production') {
    //     middleware = composeWithDevTools(middleware);
    // }
    
    const store = createStore(
        rootReducer, 
        initialState, 
        middleware
    );

    const __API__ = axios.create({
        baseURL: '/api'
    });

    sagas.runSagas({ __API__ });
    return store;
}

