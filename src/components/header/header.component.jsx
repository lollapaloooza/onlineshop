import {HeaderContainer, LogoContainer, Logo, OptionsContainer, OptionLink} from "./header.styles";
import {connect} from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {createStructuredSelector} from "reselect";
import {signOutStart} from "../../redux/user/user.actions";

const Header = ({currentUser, hidden, signOutStart}) => (
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
                            onClick={signOutStart}
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

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);