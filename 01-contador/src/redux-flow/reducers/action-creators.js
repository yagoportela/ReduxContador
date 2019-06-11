import  { ADD_COUNTER, REMOVE_COUNTER, INCREMENT, DECREMENT }from './actions'

export const addCounter = () => ({ type: ADD_COUNTER })
export const removeCounter = (index) => ({ type: REMOVE_COUNTER, indice: index })
export const increment = (index) => ({ type: INCREMENT, indice: index })
export const decrement = (index) => ({ type: DECREMENT, indice: index })