import { createAction } from 'redux-actions';

export namespace AuthActions {
    export enum Type {
        AUTHENTICATE_USER = 'AUTHENTICATE_USER',
        AUTHENTICATE_USER_SUCCESS = 'AUTHENTICATE_USER_SUCCESS'
    }

    export const authUser = createAction(Type.AUTHENTICATE_USER);
    export const authUserSuccess = createAction<any>(Type.AUTHENTICATE_USER_SUCCESS);
}

export type AuthActions = Omit<typeof AuthActions, 'Type'>;