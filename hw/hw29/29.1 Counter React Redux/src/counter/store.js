import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './redusers/counterReducer ';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
});
