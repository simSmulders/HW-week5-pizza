import React, { Component } from 'react';
import {connect} from 'react-redux';
import baseState from '../reducers/baseState'
import { updateBase25, updateBase30, updateBase35 } from '../actions/pizzalayers'
import Button from '@material-ui/core/Button';

class PizzaBase extends Component { 
    constructor(props) {
        super(props) 
        this.state= {
            baseState
        }
    }
    selectedBase(){
      return this.props.baseFilter.map((base)=>{
          return (
            <span key={base.id}> {base.name}<br/>{`€ ${base.price}`}</span>
          );
      });
  }
    
   render(){

       const bases = this.props.baseState
       
       
       const handleBase25= () => {
        let base25Filter = bases.filter(base => base.name === "25cm NY Style")
        this.props.updateBase25(base25Filter)
       }

       const handleBase30 = () => {
        let base30Filter = bases.filter(base => base.name === "30cm NY Style")
        this.props.updateBase30(base30Filter)
       }

       const handleBase35 = () => {
        let base35Filter = bases.filter(base => base.name === "35cm NY Style")
        this.props.updateBase35(base35Filter)
       }

       function refreshPage(){ 
        window.location.reload(); 
        }
        
       

    return (
        <div>
            <form className="filterForm">
            <br></br>
                    <label><b>Choose the base:</b></label>
                    <br></br>
                    <div className ="Check">
                    <br></br>

                        <label><input type="radio" name="base"  value="25cm NY Style" className="filterForm-radio" onClick={ handleBase25 } />25cm NY Style</label>
                        <br/>
                        <label><input type="radio" name="base" value="30cm NY Style" className="filterForm-radio" onClick={ handleBase30 }/>30cm NY Style</label>
                        <br/>
                        <label><input type="radio" name="base" value="35cm NY Style" className="filterForm-radio" onClick={ handleBase35 }/>35cm NY Style</label>
                        <br/>
                        <br></br>
                        <Button variant='extendedFab' color='white' type="button" onClick={ refreshPage }> <span>Refresh</span> </Button>
                        
                    </div>
            </form>
            <div>
            <br></br>
                <div>Selected Base: {this.selectedBase()}</div>
                {/* <p onClick={ handleSubmit }>Submit</p> */}
                <br />
            </div>
        </div>
                )
    
}
}


const mapStateToProps = ({baseState, baseFilter}) => ({baseState, baseFilter}) 


export default connect(mapStateToProps, { updateBase25, updateBase30, updateBase35 })(PizzaBase)