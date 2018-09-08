import { UPDATE_BASE25, UPDATE_BASE30, UPDATE_BASE35 } from '../actions/pizzalayers'
//import { baseState } from './baseState'

export default (state = [], action = {}) => {
    switch (action.type) {
        case UPDATE_BASE25:
            return action.payload
        case UPDATE_BASE30:
            return action.payload
        case UPDATE_BASE35:
            return action.payload
    default:
      return state
    }
}