import {ReactComponent as ShoppingIcon} from "../../assets/shoppin-bag.svg";
import './cart-icon.styles.scss';
import {connect} from "react-redux";
import {cartToggleHidden} from "../../redux/cart/cart.actions";


const CartIcon = ({cartToggleHidden}) => (
    <div onClick={cartToggleHidden} className='cart-icon'>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    cartToggleHidden: () =>  dispatch(cartToggleHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);
