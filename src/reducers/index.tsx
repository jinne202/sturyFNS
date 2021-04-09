import { combineReducers } from 'redux';
import { layoutReducer } from './layoutReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
    layoutReducer,
    userReducer,
});
