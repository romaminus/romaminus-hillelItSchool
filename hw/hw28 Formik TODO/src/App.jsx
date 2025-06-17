import { useState, useEffect } from "react";
import "./App.css";
import MainInput from "./components/MainInput";
import ToDoItem from "./components/ToDoItem";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(todos);
  }, []);

  const updateLocalStorage = (updatedTodos) => {
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const addTodo = (newTodoText) => {
    const newTodo = {
      id: Date.now(),
      text: newTodoText,
      checked: false,
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    console.log(
      `Завдання "${newTodoText}" додано. Поточні todos:`,
      updatedTodos
    );
    // localStorage.clear()
  };

  const toggleTodoCompleted = (idToToggle) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === idToToggle ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(updatedTodos);
    updateLocalStorage(updatedTodos);
    console.log(`Статус завдання з ID ${idToToggle} змінено.`);
  };

  const removeTodo = (idToRemove) => {
    const updatedTodos = todos.filter((todo) => todo.id !== idToRemove);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    console.log(`Завдання з ID ${idToRemove} видалено.`);
  };

  return (
    <>
      <div className="container mx-auto px-5">
        <h1 className="text-center text-3xl font-bold mt-5 mb-4">ToDo List</h1>
        <MainInput onAddTodo={addTodo} />
        <ul className="rounded-md shadow-md">
        {todos.length === 0 ? (
          <p className="text-center text-gray-500 p-4">No todos. Add first!</p>
        ) : (
          todos.map((todo) => (
            <ToDoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              checked={todo.checked}
              onRemoveTodo={removeTodo}
              onToggleTodoCompleted={toggleTodoCompleted}
            />
          ))
        )}
        </ul>
      </div>
    </>
  );
}

export default App;
