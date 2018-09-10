import React, { Component } from 'react';
import './App.css';
import PizzaBase from './components/PizzaBase';
import PizzaSauce from './components/PizzaSauce'
import PizzaToppings from './components/PizzaToppings';
import CssBaseline from '@material-ui/core/CssBaseline';
import Total from './components/Total'
import { Route } from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img src={require('./logo/NewAgePizza.PNG')} className="App-logo" alt="logo" />
        </header>
        <div className="App-body">
          <CssBaseline />
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={ PizzaBase } />
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={ PizzaSauce } />
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={ PizzaToppings } />
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={ Total } />
        </div>
      </div>
    );
  }
}

export default App;
