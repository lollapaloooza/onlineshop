import {CartIconContainer, ShoppingIconContainer, ItemCountContainer} from "./cart-icon.styles";
import {connect} from "react-redux";
import {cartToggleHidden} from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";


const CartIcon = ({cartToggleHidden, itemCount}) => (
    <CartIconContainer onClick={cartToggleHidden}>
        <ShoppingIconContainer/>
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
)

const mapStateToProps =  createStructuredSelector({
    itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    cartToggleHidden: () =>  dispatch(cartToggleHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
