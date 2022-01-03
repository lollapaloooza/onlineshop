import './header.styles.scss';
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from '../../../src/assets/ebay.svg'
import {auth} from "../../firebase/firebase.utils";

const Header = ({currentUser}) => (
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
        </div>
    </div>
)

export default Header;