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
        
        let Totalprice = this.saucePrice().reduce((a,b) => {
            return a + b;
        }, this.basePrice().reduce((a, b) => {
            return a + b;
        }, 0)) 
        ;
        
        
        return (
        <div>
            <h2>Total Price: </h2>
            {Totalprice}
        </div>   
        )         
    }
   
    
}

const mapStateToProps = ({baseFilter, sauceFilter }) => ({baseFilter, sauceFilter}) 

export default connect(mapStateToProps)(Total)