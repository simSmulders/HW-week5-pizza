import React, { Component } from 'react';
import './App.css';
import PizzaBase from './components/PizzaBase';
//import TotalContainer from './components/TotalContainer';
import PizzaSauce from './components/PizzaSauce'
import PizzaToppings from './components/PizzaToppings';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PizzaBase />
        <PizzaSauce />
        <PizzaToppings />
      </div>
    );
  }
}

export default App;
