import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
import {persistReducer} from 'redux-persist';
//the local storage on our window object, window.localstorage
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    //lets redux resist know the only data we want to persist is the cart state
    whitelist: ['cart']
}
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});
export default persistReducer(persistConfig, rootReducer);