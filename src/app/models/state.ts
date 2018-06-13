import { UserModel } from './user';

export interface RootStateModel {
    users: RootStateModel.UsersState,
    auth: any
}

export namespace RootStateModel {
    export type UsersState = UserModel[];
    export type AuthState = any;
}