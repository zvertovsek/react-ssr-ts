import { UserModel } from './user';

export interface RootStateModel {
    users: RootStateModel.UsersState
}

export namespace RootStateModel {
    export type UsersState = UserModel[];
}