import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from '../reducers/todoReducer';
import { fetchTodos } from '../../api/todoApi';

function* fetchTodosSaga(action) {
    try {
        const todos = yield call(fetchTodos, action.payload);
        yield put(fetchDataSuccess(todos));
    } catch (error) {
        yield put(fetchDataFailure(error.message));
    }
};

export function* watchFetchTodos() {
    yield takeLatest(fetchDataRequest.type, fetchTodosSaga);
}