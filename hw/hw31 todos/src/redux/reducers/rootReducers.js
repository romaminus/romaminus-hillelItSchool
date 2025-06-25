import { combineReducers } from '@reduxjs/toolkit';
import todoReducer from './todoReducer';
import modalReducers from './modalReducers';

const rootReducers = combineReducers({
    todos: todoReducer,
    modal: modalReducers,
});

export default rootReducers;