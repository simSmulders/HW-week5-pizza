import React, { Component } from 'react';
//import './Filter.css'
import {connect} from 'react-redux';
//import { Link } from 'react-router-dom'
import baseState from '../reducers/baseState'
import { updateBase25, updateBase30, updateBase35 } from '../actions/pizzalayers'


class Filter extends Component { 
    constructor(props) {
        super(props) 
        this.state= {
            baseState
        }
    }

    
   render(){

       const handleSubmit = (event) => {
           event.preventDefault()
           console.log(this.props.baseFilter)
       }

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
                    <label>Choose the base:</label>
                    <div className ="Check">

                        <label><input type="radio" name="base"  value="25cm NY Style" className="filterForm-radio" onClick={ handleBase25 } />25cm NY Style</label>
                        <br/>
                        <label><input type="radio" name="base" value="30cm NY Style" className="filterForm-radio" onClick={ handleBase30 }/>30cm NY Style</label>
                        <br/>
                        <label><input type="radio" name="base" value="35cm NY Style" className="filterForm-radio" onClick={ handleBase35 }/>35cm NY Style</label>
                        <br/>
                        <button type="button" onClick={ refreshPage }> <span>Refresh</span> </button>
                    </div>
            </form>
            <div>
                <p>Selected Base: ({this.props.baseFilter.name})</p>
                <p onClick={ handleSubmit }>Submit</p>
                <br />
            </div>
        </div>
                )
    
}
}


const mapStateToProps = ({baseState, baseFilter}) => ({baseState, baseFilter}) 


export default connect(mapStateToProps, { updateBase25, updateBase30, updateBase35 })(Filter)

            



// import React from 'react'
// import { addBase } from '../actions/pizzalayers'
// import { connect } from 'react-redux';

// class PizzaBase extends React.Component {
//   state = {
//     id:"base25"
//   }
//   handleSubmit = (e) => {
//     e.preventDefault()
//     //this.state.addBase()
//     console.log(this.state.name)
    
//   }

//   handleChange = (event) => {
//     const value = event.target.value;
//     const name = event.target.name;

//     this.setState({
//       [name]: value
//     });
//   }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <header className="addbase"> Add Base: </header>
//           <label htmlFor="base25">25cm NY Style € 8,99</label>
//             <input id="base25" type="radio" name="base" onChange={this.handleChange} />
          
//           <label htmlFor="base30">30cm NY Style € 11,49</label>
//             <input id="base30" type="radio" name="base" onChange={this.handleChange} />
          
//           <label htmlFor="base35">35cm NY Style € 13,49</label>
//             <input id="base35" type="radio" name="base" onChange={this.handleChange} />
            
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }

//   const mapStateToProps = state => {
//     return {
//       base: state.base
//     }
//   }
  

//   export default connect(mapStateToProps, { addBase })(PizzaBase)