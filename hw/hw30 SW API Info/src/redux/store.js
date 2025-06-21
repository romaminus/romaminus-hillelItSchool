import { configureStore } from "@reduxjs/toolkit";
import pathReduser from './redusers/pathReduser';
import dataReducer from './redusers/dataReducer'

export const store = configureStore({
    reducer: {
        path: pathReduser,
        data: dataReducer,
    }
});
