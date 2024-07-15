import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
    value: number;
    loading: boolean;
    error: null | Error;
}

const initialState = {
    value: 0,
    loading: false,
    error: null,
} satisfies CounterState as CounterState;

export const asyncIncrement = createAsyncThunk('counter/asyncIncrement', async () => {
    return new Promise((res) => {
        setTimeout(res, 3000);
    });
});

export const asyncDecrement = createAsyncThunk('counter/asyncDecrement', async () => {
    return new Promise((res) => {
        setTimeout(res, 3000);
    });
});

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        decrementByAmount: (state, action: PayloadAction<number>) => {
            state.value -= action.payload;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(asyncIncrement.pending, function (state) {
                state.loading = true;
            })
            .addCase(asyncIncrement.fulfilled, function (state) {
                state.value = state.value + 1;
                state.loading = false;
            })
            .addCase(asyncDecrement.pending, function (state) {
                state.loading = true;
            })
            .addCase(asyncDecrement.fulfilled, function (state) {
                state.value = state.value - 1;
                state.loading = false;
            });
    },
});

export const { incrementByAmount, decrementByAmount } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
