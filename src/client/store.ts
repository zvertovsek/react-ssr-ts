// client store
import { Store, createStore, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import { RootStateModel, rootReducer } from '../app/reducers';
import * as sagas from '../app/sagas';

export default (): Store<RootStateModel> => {
    const store = createStore(
        rootReducer, 
        {}, 
        applyMiddleware(sagas.sagaMiddleware)
    );

    sagas.runSagas();
    return store;
}

