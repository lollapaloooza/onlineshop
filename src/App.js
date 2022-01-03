import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

import {Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={ShopPage}/>
    </Switch>
  );
}

export default App;
