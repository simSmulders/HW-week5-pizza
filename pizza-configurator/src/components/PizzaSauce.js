import React, { Component } from 'react';
import {connect} from 'react-redux';
import sauceState from '../reducers/sauceState'
import { updateSauceWhite, updateSauceRed, updateSauceMix } from '../actions/pizzalayers'


class PizzaSauce extends Component { 
    constructor(props) {
        super(props) 
        this.state= {
            sauceState
        }
    }
    selectedSauce(){
      return this.props.sauceFilter.map((sauce)=>{
          return (
            <span key={sauce.id}> {sauce.name}<br/>{sauce.price}</span>
          );
      });
  }
    
   render(){

       const handleSubmit = (event) => {
           event.preventDefault()
       }

       const sauces = this.props.sauceState
       
       
       const handleSauceWhite = () => {
        let sauceWhiteFilter = sauces.filter(sauce => sauce.name === "White sauce")
        this.props.updateSauceWhite(sauceWhiteFilter)
       }

       const handleSauceRed = () => {
        let sauceRedFilter = sauces.filter(sauce => sauce.name === "Red sauce")
        this.props.updateSauceRed(sauceRedFilter)
       }

       const handleSauceMix = () => {
        let sauceMixFilter = sauces.filter(sauce => sauce.name === "Mix it up")
        this.props.updateSauceMix(sauceMixFilter)
       }

       function refreshPage(){ 
        window.location.reload(); 
        }
        
       

    return (
        <div>
            <form className="SauceForm">
                    <label>Choose the sauce:</label>
                    <div className ="SauceRadio">

                        <label><input type="radio" name="sauce"  value="White Sauce" className="SauceForm-radio" onClick={ handleSauceWhite } />White sauce</label>
                        <br/>
                        <label><input type="radio" name="sauce" value="Red Sauce" className="SauceForm-radio" onClick={ handleSauceRed }/>Red Sauce</label>
                        <br/>
                        <label><input type="radio" name="sauce" value="Mix It Up" className="SauceForm-radio" onClick={ handleSauceMix }/>Mix it up</label>
                        <br/>
                        <button type="button" onClick={ refreshPage }> <span>Refresh</span> </button>
                    </div>
            </form>
            <div>
                <div>Selected Sauce: {this.selectedSauce()}</div>
                {/* <p onClick={ handleSubmit }>Submit</p> */}
                <br />
            </div>
        </div>
                )
    
}
}


const mapStateToProps = ({sauceState, sauceFilter}) => ({sauceState, sauceFilter}) 


export default connect(mapStateToProps, { updateSauceWhite, updateSauceRed, updateSauceMix })(PizzaSauce)

            