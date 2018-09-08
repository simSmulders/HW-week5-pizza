import { DRONE_PRICE, totalPrice } from '../actions/pizzalayers'

export default (state = totalPrice(), { type }) => {
    switch (type) {
        case DRONE_PRICE:
            return state * 1,1
        default:
            return state
    }
}