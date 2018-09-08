

export const sauceState = [
    {
      id: 1,
      name: 'White sauce',
      price: 0
    },
    {
      id: 2,
      name: 'Red sauce',
      price: 1.00
    },
    {
      id: 3,
      name: 'Mix it up',
      price: 1.50
    }
  ]
  
export default (state = sauceState, action = {}) => {
    return state
}