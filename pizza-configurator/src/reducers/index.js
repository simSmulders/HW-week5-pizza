import { combineReducers } from 'redux'
import baseState from './baseState'
import baseFilter from './baseFilter'
import sauceFilter from './sauceFilter'
import sauceState from './sauceState'
import toppingState from './toppingState'
import toppingFilter from './toppingFilter'
import dronePrice from './dronePrice'
import totalPrice from './totalPrice'


export default combineReducers({
    baseState,
    baseFilter,
    sauceState,
    sauceFilter,
    toppingState,
    toppingFilter,
    dronePrice,
    totalPrice
})