import React, { Component } from 'react';
import { connect } from 'react-redux'


class Total extends Component { 
   
    basePrice(){
        return (this.props.baseFilter.map((base)=>{
            return base.price;
        })) 
    }
    saucePrice(){
        return (this.props.sauceFilter.map((sauce)=>{
            return sauce.price;
        })) 
    }



    render(){
        
        let totalprice = this.saucePrice().reduce((a,b) => {
            return a + b;
        }, this.basePrice().reduce((a, b) => {
            return a + b;
        }, 0)) 
        ;
        
        
        return (
        <div>
            <h2>Total Price: </h2>
            {totalprice}
            <br></br>
            <label><input type='checkbox' /><i>{`turbo-drone-delivery for an additonional 10% on the price: ${Math.round((totalprice * 1.1)*100)/100}`}</i></label>
        </div>   
        )         
    }
   
    
}

const mapStateToProps = ({baseFilter, sauceFilter }) => ({baseFilter, sauceFilter}) 

export default connect(mapStateToProps)(Total)