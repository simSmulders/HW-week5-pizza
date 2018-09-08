
export const baseState = [
    {
      id: 1,
      name: '25cm NY Style',
      price: 8.99
    },
    {
      id: 2,
      name: '30cm NY Style',
      price: 11.49
    },
    {
      id: 3,
      name: '35cm NY Style',
      price: 13.49
    }
  ]
  
  export default (state = baseState, action = {}) => {
    return state
  }