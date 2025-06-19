import { createSlice } from '@reduxjs/toolkit';


const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        deleteItem: (state, action) => {
            return state.filter(element=> element.id !== action.payload)
        },
        toggleText: (state, action) => {
            const checked = state.find(element=>element.id === action.payload);
            if (checked) {
                checked.checked = !checked.checked
            }
        },
        addItem: (state, action) => {
            state.push({
                id: Date.now(),
                text: action.payload,
                checked: false,
            })
        }
    }
});
export const { deleteItem, toggleText, addItem} = todoSlice.actions;
export default todoSlice.reducer;