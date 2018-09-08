import { combineReducers } from 'redux'
import baseState from './baseState'
import baseFilter from './baseFilter'
import sauce from './sauce'
import toppings from './toppings'


export default combineReducers({
    baseState,
    baseFilter,
    sauce,
    toppings
})