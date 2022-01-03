import Homepage from "./pages/homepage/homepage.component";
import {Route, Switch} from 'react-router-dom';

import './App.css';

const HatsPage = () => (
    <div>
        <h1>HATS Page</h1>
    </div>
)

function App() {
  return (
    <Switch>
        <Route path='/shop/hats' component={HatsPage}/>
        <Route path='/' component={Homepage}/>
    </Switch>
  );
}

export default App;
