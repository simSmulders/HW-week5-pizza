// import React from 'react'
// import {connect} from 'react-redux'
// import Total from './Total'

// class EventDetailsContainer extends React.Component {
  
//     // selectedUsers(){
//     //     return this.props.userFilter.map((user)=>{
//     //         return (
//     //           <p key={user.Id}> {user.name}<br/>{user.Age}<br/>{user.MealType}</p>
//     //         );
//     //     });
//     // }
//   basePrice() {
//     return this.props.baseFilter.map(base => {
//         return base.price
//     })
//   }
  
// //   totalPrice() {
// //       return console.log(base.price)
// //   }

//   render() {
      
//     return (
//         <div>
//         <h1>Total Price:</h1>
//         <p>{this.props.basePrice(base)}</p>
//     </div>
//     )
//   }
// }

// const mapStateToProps = ({baseFilter}) => ({baseFilter}) 

// export default connect(mapStateToProps)(EventDetailsContainer)