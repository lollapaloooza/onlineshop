import {Cart_Action_Types} from "./cart.types";

export const cartToggleHidden = () => ({
    type: Cart_Action_Types.CART_TOGGLE_HIDDEN
})

export const addItem = item => ({
    type: Cart_Action_Types.ADD_ITEM,
    payload: item
})