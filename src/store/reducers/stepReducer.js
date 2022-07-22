import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const stepReducer = createSlice({
    name: 'step',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
    },
})

export const { increment, decrement } = stepReducer.actions

export default stepReducer.reducer