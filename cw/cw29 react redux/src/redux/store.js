import { createStore, combineReducers } from "redux";
import { ADD_TASK, DELETE_TASK, ADD_ALL_TASK } from "./actions";

let nextTaskId = 0;

// 2. Create a reducer
const tasks = (state = [], action) => {
    switch (action.type) {
        case ADD_TASK:
            return [...state, { id: nextTaskId++, 
                text: action.payload,
                completed: false,
            }];
        case ADD_ALL_TASK:
            return action.payload;
        case DELETE_TASK:
            return state.filter(task => task.id !== action.payload);
        default:
            return state;
    }
}
const rootReducer = combineReducers(
    {
        tasks,
    }
);

// 1. Create a store
export const store = createStore(rootReducer); 