import {all, call} from 'redux-saga/effects';
import {fetchCollectionsStart} from './shop/shop.sagas';
import {userSagas} from './user/user-sagas';
import { cartSagas } from './cart/cart.sagas';
//all takes in an array of sagas
export default function* rootSaga() {
    yield all([
        call(fetchCollectionsStart),
        call(userSagas),
        call(cartSagas)
        ]
    )
}