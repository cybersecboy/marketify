import { createSlice } from '@reduxjs/toolkit'

const mySlice = createSlice({
    name: 'slice1',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        clearItems: (state) => {
            state.items = []
        }
    }
})

export const { addItem, clearItems } = mySlice.actions;
export default mySlice.reducer;
