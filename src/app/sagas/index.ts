import createSagaMiddleware from 'redux-saga';
import { usersSagasListener } from './userSaga';
import { authSagasListener } from './authSaga';

const sagas: any = {
    usersSagasListener,
    authSagasListener
};

export const sagaMiddleware = createSagaMiddleware();

export function runSagas(options: any = {}) {
    for (let name in sagas) {
        sagaMiddleware.run(sagas[name], options);
    }
}
