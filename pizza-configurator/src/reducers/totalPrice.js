import { TOTAL_PRICE } from '../actions/pizzalayers'

export default (state = 0, { type }) => {
    switch (type) {
        case TOTAL_PRICE:
            return state 
        default:
            return state
    }
}