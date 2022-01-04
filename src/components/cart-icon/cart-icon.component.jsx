import {ReactComponent as ShoppingIcon} from "../../assets/shoppin-bag.svg";
import './cart-icon.styles.scss';
import {connect} from "react-redux";
import {cartToggleHidden} from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";


const CartIcon = ({cartToggleHidden, itemCount}) => (
    <div onClick={cartToggleHidden} className='cart-icon'>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
    cartToggleHidden: () =>  dispatch(cartToggleHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
