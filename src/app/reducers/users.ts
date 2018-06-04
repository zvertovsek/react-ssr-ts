import { handleActions } from 'redux-actions';
import { RootStateModel, UserModel } from '../models';
import { UserActions } from '../actions';

const initialState: RootStateModel.UsersState = [];

export const userReducer = handleActions<RootStateModel.UsersState, UserModel>(
    {
        [UserActions.Type.USERS_FETCH_SUCCESS]: (state: any, action: any) => {
            return {
                ...state,
                ...action.payload
            };
        }
    },
    initialState
);