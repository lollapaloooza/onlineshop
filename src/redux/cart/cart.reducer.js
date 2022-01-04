import {Cart_Action_Types} from "./cart.types";
import {addItemToCart} from "./cart.utils";

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
        default:
            return state;
    }
}

export default cartReducer;