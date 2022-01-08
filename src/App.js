import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SingInAndSignUpPage from "./pages/sing-in-and-sign-up/sign-in-and-sign-up.component";
import {useSelector, useDispatch} from "react-redux";
import {selectCurrentUser} from "./redux/user/user.selectors";
import {checkUserSession} from "./redux/user/user.actions";
import CheckoutPage from "./pages/checkout/checkout.component";

import {useEffect} from "react";
import {Route, Switch, Redirect} from 'react-router-dom';

import './App.css';

const App = () => {

    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();


    useEffect(() => {
       dispatch(checkUserSession());
    }, [dispatch]);

    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={Homepage}/>
                <Route path='/shop' component={ShopPage}/>
                <Route exact path='/checkout' component={CheckoutPage}/>
                <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/'/>) : (<SingInAndSignUpPage/>)}/>
            </Switch>
        </div>
    );
}

export default App;
