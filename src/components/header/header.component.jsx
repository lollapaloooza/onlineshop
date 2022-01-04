import './header.styles.scss';
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from '../../../src/assets/ebay.svg'
import {auth} from "../../firebase/firebase.utils";
import {connect} from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {createStructuredSelector} from "reselect";

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className="options">
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {
                !currentUser ?
                    (
                        <Link className='option' to='/signin'>
                            SIGN IN
                        </Link>
                    ) :
                    (
                        <div className='option'
                            onClick={()=>auth.signOut()}
                        >SIGN OUT</div>
                    )
            }
            <CartIcon/>
        </div>
        {
            !hidden ? <CartDropdown/> : null
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);