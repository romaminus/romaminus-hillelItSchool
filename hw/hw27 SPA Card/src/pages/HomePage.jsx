import { useEffect, useState } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

function HomePage() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [selectedTaskText, setSelectedTaskText] = useState("");

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('list')) || [];
        setTodos(storedTodos);
    }, []);

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(todos));
    }, [todos]);

    const handleAddTodo = (e) => {
        e.preventDefault();
        const trimmedValue = inputValue.trim();

        if (trimmedValue === "") {
            alert('Будь ласка, введіть завдання.');
            return;
        }

        const newId = todos.length > 0 ? Math.max(...todos.map(item => item.id)) + 1 : 0;
        const newItem = {
            id: newId,
            value: trimmedValue,
            checked: false
        };

        setTodos(prevTodos => [...prevTodos, newItem]);
        setInputValue("");
    };

    const handleToggleCheck = (id) => {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id ? { ...todo, checked: !todo.checked } : todo
            )
        );
    };

    const handleDeleteTodo = (id) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };

    const handleTaskClick = (text) => {
        setSelectedTaskText(text);
        const taskModal = new window.bootstrap.Modal(document.getElementById('taskModal'));
        taskModal.show();
    };

    return (
        <>
            <div className="container container-height">
                <h1 className="text-center mb-4">Список Завдань</h1>

                <form className="form js--form d-flex mb-4" onSubmit={handleAddTodo}>
                    <input
                        type="text"
                        name="value"
                        required
                        className="form-control me-2 js--form__input"
                        placeholder="Додати нове завдання"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button type="submit" className="btn btn-success form__btn">Додати</button>
                </form>

                <ul className="list-group js--todos-wrapper">
                    {todos.map((todo) => (
                        <li
                            key={todo.id}
                            className={`list-group-item todo-item d-flex align-items-center mb-2 ${todo.checked ? 'todo-item--checked' : ''}`}
                            data-id={todo.id}
                        >
                            <input
                                type="checkbox"
                                checked={todo.checked}
                                onChange={() => handleToggleCheck(todo.id)}
                                className="form-check-input me-2"
                            />
                            <span
                                className="todo-item__description flex-grow-1"
                                onClick={() => handleTaskClick(todo.value)}
                            >
                                {todo.value}
                            </span>
                            <button
                                type="button"
                                className="btn btn-danger btn-sm todo-item__delete"
                                onClick={() => handleDeleteTodo(todo.id)}
                            >
                                Видалити
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="modal fade" id="taskModal" tabIndex="-1" aria-labelledby="taskModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="taskModalLabel">Ваше завдання</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" id="taskModalBody">
                            {selectedTaskText}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрити</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;