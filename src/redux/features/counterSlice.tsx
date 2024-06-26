import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CounterState { value: number }
const initialState: CounterState = { value: 0 }

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value = state.value + 1
        },
        incrementByFive: (state, action:PayloadAction<number>) => {
            state.value = state.value + action.payload
        },
        decrement: (state) => {
            state.value = state.value - 1
        },
    }
});

export const { increment, incrementByFive, decrement } = counterSlice.actions;
export default counterSlice.reducer;