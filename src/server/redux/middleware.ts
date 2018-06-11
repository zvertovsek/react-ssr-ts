import { applyMiddleware } from 'redux';
import { sagaMiddleware } from "./sagas";

export const rootMiddleware = applyMiddleware(
    sagaMiddleware
);