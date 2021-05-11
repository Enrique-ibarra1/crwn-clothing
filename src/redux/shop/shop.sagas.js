import { takeEvery, call, put } from 'redux-saga/effects';
import ShopActionTypes from './shop.types';
import {firestore, collectionsSnapshotToMap} from '../../firebase/firebase.utils';
import {fetchCollectionsSuccess, fetchCollectionsFailure} from './shop.actions'
export function* fetchCollectionsAsync() {
    yield console.log('firing');
    try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(collectionsSnapshotToMap, snapshot);
        //put is the saga version of creating dispatch, it must be yielded
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch(error) {
        yield put(fetchCollectionsFailure(error.message))
    }
    
        //the old code for doing the above...
        // collectionRef.get().then(snapshot => {
        //     const collectionsMap = collectionsSnapshotToMap(snapshot);
        //     dispatch(fetchCollectionsSuccess(collectionsMap));
        // }).catch(err => dispatch(fetchCollectionsFailure(err.message)));
}
//this is a saga function/ a generator function
export function* fetchCollectionsStart() {
    //the second parameter is another generator function
    yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync )
}