import { createAction } from 'redux-actions';
import { UserModel } from '../models/user';

export namespace UserActions {
    export enum Type {
        USERS_FETCH = 'USERS_FETCH',
        USERS_FETCH_SUCCESS = 'USERS_FETCH_SUCCESS'
    }

    export const fetchUsers = createAction(Type.USERS_FETCH);
    export const fetchUsersSuccess = createAction<UserModel>(Type.USERS_FETCH_SUCCESS);
}

export type UserActions = Omit<typeof UserActions, 'Type'>;

