import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { Dashboard } from './components/admin/Dashboard';
import Login from './components/layout/Login';
import Register from './components/layout/Register';
import history from './routing/history'
function App() {
  return (

    <Router history={history}>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Register} />
        <Route exact path='/dashboard' component={Dashboard} />

      </Switch>

    </Router>


  );
}

export default App;
