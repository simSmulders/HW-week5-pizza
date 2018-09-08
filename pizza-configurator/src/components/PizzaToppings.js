import React, { Component } from 'react';
import {connect} from 'react-redux';
import toppingState from '../reducers/toppingState'
import { updateToppingPine, updateToppingCorn, updateToppingOliv, updateToppingOnion, updateToppingSpin, updateToppingCher } from '../actions/pizzalayers'
import Button from '@material-ui/core/Button';



class PizzaToppings extends Component { 
    constructor(props) {
        super(props) 
        this.state= {
            toppingState,
            isChecked: false
        }
    }
    
    selectedTopping(){
            return this.props.toppingFilter.map((topping)=>{
                return (
                    <span key={topping.id}> {topping.name}<br/>{topping.price}</span>
                );
            });
  }
    
   render(){

       const handleSubmit = (event) => {
           event.preventDefault()
        //    console.log(base.name, sauce.name, topping.name)
       }

       const toppings = this.props.toppingState
       
       
       const handleToppingPine = () => {
        let toppingPineFilter = toppings.filter(topping => topping.name === "Pineapple")
        this.props.updateToppingPine(toppingPineFilter)
       }

       const handleToppingCorn = () => {
        let toppingCornFilter = toppings.filter(topping => topping.name === "Corn")
        this.props.updateToppingCorn(toppingCornFilter)
       }

       const handleToppingOliv = () => {
        let toppingOlivFilter = toppings.filter(topping => topping.name === "Olives (green)")
        this.props.updateToppingOliv(toppingOlivFilter)
       }

       const handleToppingOnion = () => {
        let toppingOnionFilter = toppings.filter(topping => topping.name === "Red onion")
        this.props.updateToppingOnion(toppingOnionFilter)
       }

       const handleToppingSpin = () => {
        let toppingSpinFilter = toppings.filter(topping => topping.name === "Spinach")
        this.props.updateToppingSpin(toppingSpinFilter)
       }

       const handleToppingCher = () => {
        let toppingCherFilter = toppings.filter(topping => topping.name === "Cherry tomatoes")
        this.props.updateToppingCher(toppingCherFilter)
       }

       

       function refreshPage(){ 
        window.location.reload(); 
        }
        
       

    return (
        <div>
            <form className="ToppingForm">
                    <label>Choose the toppings:</label>
                    <div className ="ToppingCheck">

                        <label><input type="checkbox" name="topping"  value="Pineapple" className="ToppingForm-check" onClick={ handleToppingPine } />Pineapple</label>
                        <br/>
                        <label><input type="checkbox" name="topping" value="Corn" className="ToppingForm-check" onClick={ handleToppingCorn }/>Corn</label>
                        <br/>
                        <label><input type="checkbox" name="topping" value="Olives (green)" className="ToppingForm-check" onClick={ handleToppingOliv }/>Olives (green)</label>
                        <br/>
                        <label><input type="checkbox" name="topping" value="Red Onion" className="ToppingForm-check" onClick={ handleToppingOnion}/>Red Onion</label>
                        <br/>
                        <label><input type="checkbox" name="topping" value="Spinach" className="ToppingForm-check" onClick={ handleToppingSpin }/>Spinach</label>
                        <br/>
                        <label><input type="checkbox" name="topping" value="Cherry tomatoes" className="ToppingForm-check" onClick={ handleToppingCher }/>Cherry tomatoes</label>
                        <br/>
                        <Button type="button" onClick={ refreshPage }> <span>Refresh</span> </Button>
                    </div>
            </form>
            <div>
                <div>Selected Toppings: {this.selectedTopping()}</div>
                <Button onClick={ handleSubmit }>Submit</Button>
                <br />
            </div>
        </div>
                )
    
}
}


const mapStateToProps = ({toppingState, toppingFilter}) => ({toppingState, toppingFilter}) 


export default connect(mapStateToProps, { updateToppingPine, updateToppingCorn, updateToppingOliv, updateToppingOnion, updateToppingSpin, updateToppingCher })(PizzaToppings)

            