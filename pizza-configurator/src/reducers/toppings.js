const reducer = (state = toppings, action = {}) => {
    switch (action.type) {
    case 'ADD_TOPPINGS':
      return [
        ...state,
        action.payload
      ]
    default:
      return state
    }
}
const toppings = [
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
  
export default reducer