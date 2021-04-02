import { applyMiddleware, createStore } from 'redux';

import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from '../reducers';

const configureStore = (context: any) => {
    console.log(context);
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];
    const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
    const store = createStore(rootReducer, enhancer);
    return store;
};

const wrapper: any = createWrapper(configureStore, { debug: true });

export default wrapper;
