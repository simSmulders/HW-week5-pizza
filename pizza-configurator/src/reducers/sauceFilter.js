import { UPDATE_SAUCEWHITE, UPDATE_SAUCERED, UPDATE_SAUCEMIX } from '../actions/pizzalayers'
//import { sauceState } from './sauce'

export default (state = [], action = {}) => {
    switch (action.type) {
        case UPDATE_SAUCEWHITE:
            return action.payload
        case UPDATE_SAUCERED:
            return action.payload
        case UPDATE_SAUCEMIX:
            return action.payload
    default:
      return state
    }
}