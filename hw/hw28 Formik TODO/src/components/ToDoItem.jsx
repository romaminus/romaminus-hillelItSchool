
import React from "react";

function ToDoItem({id, text, checked, onRemoveTodo, onToggleTodoCompleted}) {
    const textClasses = `todo-item__description flex-grow ${checked ? 'line-through text-gray-500' : ''}`;

    return ( 
        
                <li
                    className={`flex items-center mb-2 block w-full p-3 border border-gray-200 bg-white rounded-md ${checked ? 'todo-item--checked' : ''}`}
                    data-id={id}
                >
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => onToggleTodoCompleted(id)}
                        className="form-check-input me-2"
                    />
                    <span
                        className={textClasses}
                    >
                        {text}
                    </span>
                    <button
                        type="button"
                        className="inline-flex items-center justify-center px-3 py-1 text-sm font-semibold bg-red-500 text-white rounded-md shadow-sm hover:bg-red-700 todo-item__delete"
                        // onClick={() => handleDeleteTodo(todo.id)}
                        onClick={() => onRemoveTodo(id)}
                    >
                        Видалити
                    </button>
                </li>
     );
}

export default ToDoItem;