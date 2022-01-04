import {Cart_Action_Types} from "./cart.types";
import {addItemToCart, clearItemFromCart, removeItemFromCart} from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Cart_Action_Types.CART_TOGGLE_HIDDEN: {
            return {
                ...state,
                hidden: !state.hidden
            }
        }
        case Cart_Action_Types.ADD_ITEM: {
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        }
        case Cart_Action_Types.REMOVE_ITEM: {
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        }
        case Cart_Action_Types.CLEAR_ITEM_FROM_CART: {
            return {
                ...state,
                cartItems: clearItemFromCart(state.cartItems, action.payload)
            }
        }
        default:
            return state;
    }
}

export default cartReducer;