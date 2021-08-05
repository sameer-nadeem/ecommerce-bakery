import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import Login from './components/layout/Login';
import Register from './components/layout/Register';
import history from './routing/history'
function App() {
  return (

    <Router history={history}>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Register} />

      </Switch>

    </Router>


  );
}

export default App;
