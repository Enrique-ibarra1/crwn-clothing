import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';

const middlewares = [logger];
//applyMiddleware can take in any amount of middleware
const store = createStore(rootReducer, applyMiddleware(...middlewares));
//a session-persisted version of our store
const persistor = persistStore(store);

export {store, persistor};