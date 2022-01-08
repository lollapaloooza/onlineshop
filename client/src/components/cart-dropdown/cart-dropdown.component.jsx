import {CartDropdownContainer, CartItemsContainer, CartDropdownButton, EmptyMessageContainer} from "./cart.styles";
import CartItem from "../cart-item/cart-item.component";
import {useSelector, useDispatch} from "react-redux";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {useHistory} from "react-router-dom";
import {cartToggleHidden} from "../../redux/cart/cart.actions";

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ?
                        cartItems.map(item => (
                            <CartItem key={item.id} item={item}/>
                        ))
                        : <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
                }
            </CartItemsContainer>
            <CartDropdownButton onClick={()=> {
                history.push('/checkout');
                dispatch(cartToggleHidden());
            }}>GO TO CHECKOUT</CartDropdownButton>
        </CartDropdownContainer>
    )
}

export default CartDropdown;