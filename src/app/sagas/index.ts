import createSagaMiddleware from 'redux-saga';
import * as userSagas from './userSaga';

const sagas: any = {
    ...userSagas
};

export const sagaMiddleware = createSagaMiddleware();

export function runSagas() {
    for (let name in sagas) {
        sagaMiddleware.run(sagas[name]);
    }
}
