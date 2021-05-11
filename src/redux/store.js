import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';
// import ReduxThunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import {fetchCollectionsStart} from './shop/shop.sagas'
const sagaMiddleware = createSagaMiddleware();

//logger will only be availaable in production
const middlewares = [sagaMiddleware];
//there is an env variable in node, which will change when deployed to production
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}
//applyMiddleware can take in any amount of middleware
const store = createStore(rootReducer, applyMiddleware(...middlewares));
//here pass in created sagas
sagaMiddleware.run(fetchCollectionsStart)

//a session-persisted version of our store
const persistor = persistStore(store);

export {store, persistor};