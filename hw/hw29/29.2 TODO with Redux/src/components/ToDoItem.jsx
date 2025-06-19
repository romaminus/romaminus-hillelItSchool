import { useSelector, useDispatch } from "react-redux";
import { deleteItem, toggleText } from "../redux/reducers/todoReducer";

function ToDoItem() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul className="rounded-md shadow-md">
      {todos.length === 0 ? (
        <p className="text-center text-gray-500 p-4">No todos. Add first!</p>
      ) : (
        todos.map((todo) => (
          <li
            className={`flex items-center mb-2 block w-full p-3 border border-gray-200 bg-white rounded-md ${
              todo.checked ? "todo-item--checked" : ""
            }`}
            key={todo.id}
          >
            <input
              type="checkbox"
              checked={todo.checked}
              onChange={() => dispatch(toggleText(todo.id))}
              className="form-check-input me-2"
            />
            <span
              className={`todo-item__description flex-grow ${
                todo.checked ? "line-through text-gray-500" : ""
              }`}
            >
              {todo.text}
            </span>
            <button
              type="button"
              className="inline-flex items-center justify-center px-3 py-1 text-sm font-semibold bg-red-500 text-white rounded-md shadow-sm hover:bg-red-700 todo-item__delete"
              onClick={() => dispatch(deleteItem(todo.id))}
            >
              Видалити
            </button>
          </li>
        ))
      )}
    </ul>
  );
}

export default ToDoItem;
