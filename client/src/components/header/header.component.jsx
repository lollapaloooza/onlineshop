import {HeaderContainer, LogoContainer, Logo, OptionsContainer, OptionLink} from "./header.styles";
import {useSelector, useDispatch} from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {signOutStart} from "../../redux/user/user.actions";

const Header = () => {
    const currentUser = useSelector(selectCurrentUser);
    const hidden = useSelector(selectCartHidden);
    const dispatch = useDispatch();
    return (
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
                                        onClick={() => dispatch(signOutStart())}
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
}

export default Header;