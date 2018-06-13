import { SagaIterator } from 'redux-saga';
import { put, call, takeEvery, takeLatest } from 'redux-saga/effects';
import { AuthActions } from '../actions';

function* authenticateUser({ __API__ }: any): IterableIterator<any> {
    try {
        const response = yield __API__.get('/current_user');
        yield put(AuthActions.authUserSuccess(response.data));
    } catch {
        console.log('error authenticating user')
    }
}

export const authInitializer = (arg: any) => authenticateUser(arg);

export function* authSagasListener(arg:any): SagaIterator {
    yield takeEvery(AuthActions.Type.AUTHENTICATE_USER, authenticateUser, arg);
}