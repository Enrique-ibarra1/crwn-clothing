import CartActionTypes from './cart.types';

//ACTIONS ARE AN OBJECT WITH A TYPE, AND A PAYLOAD. PAYLOAD IS OPTIONAL
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})