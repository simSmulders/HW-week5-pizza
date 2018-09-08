const reducer = (state = sauce, action = {}) => {
    switch (action.type) {
    case 'ADD_SAUCE':
      return [
        ...state,
        action.payload
      ]
    default:
      return state
    }
}

const sauce = [
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
  
export default reducer