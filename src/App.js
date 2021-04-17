import React from "react";
import { Route, Link, Switch } from 'react-router-dom'
import Homepage from './components/homepage'
import Order from './components/order'

const App = () => {


  return (
    <div>
      <nav>
        <h1>Lambda Eats</h1>
        <div>
          <Link to='/'>Home</Link>
        </div>
      </nav>
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route path='/pizza'>
          <Order />
        </Route>
      </Switch>

    </div>
  );
};
export default App;
