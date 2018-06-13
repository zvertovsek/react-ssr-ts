import { handleActions } from 'redux-actions';
import { RootStateModel } from '../models';
import { AuthActions } from '../actions';

const initialState: any = null;

export const authReducer = handleActions<RootStateModel.AuthState, any>(
    {
        [AuthActions.Type.AUTHENTICATE_USER_SUCCESS]: (state: any, action: any) => {
            return action.payload || false;
        }
    },
    initialState
);