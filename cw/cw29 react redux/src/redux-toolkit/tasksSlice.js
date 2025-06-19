import { createSlice } from "@reduxjs/toolkit";

let nextTaskId = 0;

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        addTask: (state, action)=>{
            state.push({
                id: nextTaskId++,
                text: action.payload,
                completed: false
            })
        },
        deleteTask: (state, action) => {
            return state.filter(task=> task.id !== action.payload);
        },
        toogleTask: (state, action) => {
            const task = state.find(task => task.id === action.payload);
            if (task) {
                task.completed = !task.completed
            }
        }
    }
});
export const {addTask, deleteTask, toogleTask} = tasksSlice.actions
export default tasksSlice.reducer;