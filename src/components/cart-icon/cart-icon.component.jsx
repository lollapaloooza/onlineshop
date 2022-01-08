import {CartIconContainer, ShoppingIconContainer, ItemCountContainer} from "./cart-icon.styles";
import {useSelector, useDispatch} from "react-redux";
import {cartToggleHidden} from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";


const CartIcon = () => {
    const itemCount = useSelector(selectCartItemsCount);
    const dispatch = useDispatch();
    return (
        <CartIconContainer onClick={() => dispatch(cartToggleHidden())}>
            <ShoppingIconContainer/>
            <ItemCountContainer>{itemCount}</ItemCountContainer>
        </CartIconContainer>
    )
}
export default CartIcon;
