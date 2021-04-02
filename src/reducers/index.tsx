import { combineReducers } from 'redux';
import { layoutReducer } from './layoutReducer';
import auth from './auth';

export const rootReducer = combineReducers({
    layoutReducer,
    auth,
});
