import { SagaIterator } from 'redux-saga';
import { put, call, takeEvery, takeLatest } from 'redux-saga/effects';
import { UserActions } from '../actions';



function* fetchUsers({ __API__ }: any): IterableIterator<any> {
    try {
        const response = yield __API__.get('/users');
        yield put(UserActions.fetchUsersSuccess(response.data));
    } catch {
        console.log('error fetching users')
    }
}

export const usersInitializer = (arg: any) => fetchUsers(arg);

export function* usersSagasListener(arg:any): SagaIterator {
    yield takeEvery(UserActions.Type.USERS_FETCH, fetchUsers, arg);
}
