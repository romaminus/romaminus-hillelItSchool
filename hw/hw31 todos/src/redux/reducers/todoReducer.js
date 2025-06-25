import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    isLoading: false,
    error: null,
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.data.push({
                id: Date.now(),
                title: action.payload,
                completed: false,
            })
        },
        deleteItem: (state, action) => {
            state.data = state.data.filter(element=> element.id !== action.payload);
        },
        toggleTextItem: (state, action) => {
            const completed = state.data.find(element=>element.id === action.payload);
            if (completed) {
                completed.completed = !completed.completed
            }
        },
        editItem: (state, action) => {
            const { id, currentText } = action.payload;
            const item = state.data.find(element=>element.id === id);
            if (item) {
                item.title = currentText;
            }
        },
        clearAll: (state) => {
            state.data = [];
        },
        clearCompleted: (state) => {
            state.data = state.data.filter(element=>element.completed === false);
        },
        fetchDataRequest: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        fetchDataSuccess: (state, action) => {
            state.data = [...state.data, ...action.payload];
            state.isLoading = false;
        },
        fetchDataFailure: (state, action) => {
            state.error = action.payload;
            state.data = [];
        },
    }
});
export const { deleteItem, toggleText, addItem, fetchDataRequest, fetchDataSuccess, fetchDataFailure, editItem, toggleTextItem, clearAll, clearCompleted } = todoSlice.actions;
export default todoSlice.reducer;