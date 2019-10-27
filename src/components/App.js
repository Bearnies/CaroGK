import React from 'react';
import './App.css';
import Game from './Game'
import AccountLogin from './AccountLogin';
import AccountSignup from './AccountSignup';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

function App() {
  return <Router>
      <Switch>
        <Route exact path ='/' component={AccountLogin}></Route>
        <Route path ='/login' component={AccountLogin}></Route>
        <Route path ='/home' component={Game}></Route>
        <Route path ='/signup' component={AccountSignup}></Route>
      </Switch>   
  </Router>
}

export default App;
