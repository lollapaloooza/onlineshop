import {Cart_Action_Types} from "./cart.types";

const INITIAL_STATE = {
    hidden: true
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Cart_Action_Types.CART_TOGGLE_HIDDEN: {
            return {
                ...state,
                hidden: !state.hidden
            }
        }

        default:
            return state;
    }
}

export default cartReducer;