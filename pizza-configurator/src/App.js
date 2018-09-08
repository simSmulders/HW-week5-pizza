import React, { Component } from 'react';
import './App.css';
import PizzaBase from './components/PizzaBase';
import PizzaSauce from './components/PizzaSauce'
import PizzaToppings from './components/PizzaToppings';
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img src={require('./logo/NewAgePizza.PNG')} className="App-logo" alt="logo" />
        </header>
        <div className="App-body">
          <CssBaseline />
          <PizzaBase />
          <PizzaSauce />
          <PizzaToppings />
        </div>
      </div>
    );
  }
}

export default App;
