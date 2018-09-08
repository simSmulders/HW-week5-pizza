export const toppingState = [
    {
      id: 1,
      name: 'Pineapple',
      price: 0.50
    },
    {
      id: 2,
      name: 'Corn',
      price: 0.50
    },
    {
      id: 3,
      name: 'Olives (green)',
      price: 0.50
    },
    {
      id: 4,
      name: 'Red onion',
      price: 0.50
    },
    {
      id: 5,
      name: 'Spinach',
      price: 0.50
    },
    {
      id: 6,
      name: 'Cherry tomatoes',
      price: 0.50
    }
    
  ]
  
  export default (state = toppingState, action = {}) => {
    return state
}