import {HeaderContainer, LogoContainer, Logo, OptionsContainer, OptionLink} from "./header.styles";
import {auth} from "../../firebase/firebase.utils";
import {connect} from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {createStructuredSelector} from "reselect";

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/contact'>
                CONTACT
            </OptionLink>
            {
                !currentUser ?
                    (
                        <OptionLink to='/signin'>
                            SIGN IN
                        </OptionLink>
                    ) :
                    (
                        <OptionLink as="div"
                            onClick={()=>auth.signOut()}
                        >SIGN OUT</OptionLink>
                    )
            }
            <CartIcon/>
        </OptionsContainer>
        {
            !hidden ? <CartDropdown/> : null
        }
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);