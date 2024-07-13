import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

// Define a type for the slice state
interface CounterState {
    value: number;
}

// Define the initial state using that type
// Workaround: cast state instead of declaring variable type
const initialState = {
    value: 0,
} satisfies CounterState as CounterState;

export const counterSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        decrementByAmount: (state, action: PayloadAction<number>) => {
            state.value -= action.payload;
        },
    },
});

export const { incrementByAmount, decrementByAmount } = counterSlice.actions;

export const incrementAsync = (amount: number) => (dispatch) => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount))
    }, 3000)
}

export const decrementAsync = (amount: number) => (dispatch) => {
    setTimeout(() => {
        dispatch(decrementByAmount(amount))
    }, 3000)
}
  


// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
