
import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';
const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        addCount(state, action) {
            return state + action.payload;
      },
        minusCount(state, action) {
            return state - action.payload;
      },
    },
  })

// const reducer = (state = 0, action) => {
//     console.log(action)
//     switch (action.type) {
//         case ADD_COUNT:
//             return state + 1;
//         case MINUS_COUNT:
//             return state - 1;
//         default:
//             return state;
//     }
// };


export const { addCount, minusCount } = counterSlice.actions;

export default configureStore({reducer: counterSlice.reducer});