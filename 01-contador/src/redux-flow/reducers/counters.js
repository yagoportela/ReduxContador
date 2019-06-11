import { ADD_COUNTER, REMOVE_COUNTER, INCREMENT, DECREMENT } from './actions'

export const Value_Initial = [];

const Counters = (state = Value_Initial, action) => {

    if(action === undefined || action.type === undefined){
        return state
    }

    switch (action.type) {
        case ADD_COUNTER:
            return state.concat(0);

        case REMOVE_COUNTER: 
            return action.indice !== undefined ? state.filter((_, index) => action.indice !== index) : state;

        case INCREMENT:             
            return state.map((counter, index) => index === action.indice ? counter + 1 : counter );        

        case DECREMENT:
            return state.map((counter, index) =>  index === action.indice ? counter - 1 : counter);

        default:
            return state;
    }
}

export default Counters