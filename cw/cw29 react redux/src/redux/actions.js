export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const ADD_ALL_TASK = 'ADD_ALL_TASK'

export const addTask = (text) => ({
    type: ADD_TASK,
    payload: text,
});

export const addAllTasks = (tasks) => ({
    type: ADD_ALL_TASK,
    payload: tasks,
})

export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: id,
});
