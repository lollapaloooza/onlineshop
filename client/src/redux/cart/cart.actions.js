import {Cart_Action_Types} from "./cart.types";

export const cartToggleHidden = () => ({
    type: Cart_Action_Types.CART_TOGGLE_HIDDEN
})

export const addItem = item => ({
    type: Cart_Action_Types.ADD_ITEM,
    payload: item
})

export const removeItem = item => ({
    type: Cart_Action_Types.REMOVE_ITEM,
    payload: item
})

export const clearItemFromCart = item => ({
    type: Cart_Action_Types.CLEAR_ITEM_FROM_CART,
    payload: item
})

export const clearCart = () => ({
    type: Cart_Action_Types.CLEAR_CART
})