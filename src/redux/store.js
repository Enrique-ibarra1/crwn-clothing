import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';

//logger will only be availaable in production
const middlewares = [];
//there is an env variable in node, which will change when deployed to production
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}
//applyMiddleware can take in any amount of middleware
const store = createStore(rootReducer, applyMiddleware(...middlewares));
//a session-persisted version of our store
const persistor = persistStore(store);

export {store, persistor};