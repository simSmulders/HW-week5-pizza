import { UPDATE_TOPPINGPINE, UPDATE_TOPPINGCORN, UPDATE_TOPPINGOLIV, UPDATE_TOPPINGONION, UPDATE_TOPPINGSPIN, UPDATE_TOPPINGCHER } from '../actions/pizzalayers'


export default (state = [], action = {}) => {
    switch (action.type) {
        case UPDATE_TOPPINGPINE:
            return [...state, action.payload]
        case UPDATE_TOPPINGCORN:
            return [...state, action.payload]
        case UPDATE_TOPPINGOLIV:
            return [...state, action.payload]
        case UPDATE_TOPPINGONION:
            return [...state, action.payload]
        case UPDATE_TOPPINGSPIN:
            return [...state, action.payload]
        case UPDATE_TOPPINGCHER:
            return [...state, action.payload]
    default:
      return state
    }
}