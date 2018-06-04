import * as userSagas from './userSaga';

const sagas: any = {
    ...userSagas
};

export function registerWithMiddleware(middleware: { run: Function }) {
    for (let name in sagas) {
        middleware.run(sagas[name]);
    }
}
