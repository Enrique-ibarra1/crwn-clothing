import {createSelector} from 'reselect';
import memoize from 'lodash.memoize';
const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    //keys iterates over an objects keys into an array
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = memoize((collectionUrlParam) => createSelector(
    [selectCollections],
    //find collection id matching the url parameter in COLLECTION_ID_MAP array
    collections => collections[collectionUrlParam]
))