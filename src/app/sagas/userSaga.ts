import { put, call, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { UserActions } from '../actions';


export function* fetchUsers(): IterableIterator<any> {
    try {
        const response = yield axios.get('https://react-ssr-api.herokuapp.com/users');
        yield put(UserActions.fetchUsersSuccess(response.data));
    } catch {
        console.log('error fetching users')
    }
}

// export function* usersSagas(): IterableIterator<any> {
//     yield takeEvery(UserActions.Type.USERS_FETCH, fetchUsers);
// }
