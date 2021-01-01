
import { createStore } from 'redux';

const ADD_COUNT = 'ADD_COUNT';
const MINUS_COUNT = 'MINUS_COUNT';


export const addCount = () => {
    return {
        type: ADD_COUNT
    }
}
export const minusCount = () => {
    return {
        type: MINUS_COUNT
    }
}

const reducer = (state = 0, action) => {
    console.log(action)
    switch (action.type) {
        case ADD_COUNT:
            return state + 1;
        case MINUS_COUNT:
            return state - 1;
        default:
            return state;
    }
};

const store = createStore(reducer);

export const actionCreators = {
    addCount,
    minusCount
}

export default store; 