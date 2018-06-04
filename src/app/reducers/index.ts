import { combineReducers } from 'redux';
import { userReducer } from './users';
import { RootStateModel } from '../models/state';

export { RootStateModel };
export const rootReducer = combineReducers<RootStateModel>({
    users: userReducer as any
});