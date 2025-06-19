import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useStore } from "react-redux";
import TaskList from "./components/TaskList";
// import { addAllTasks, addTask, } from "./redux/actions";
import { addTask } from "./redux-toolkit/tasksSlice";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  function handleClick() {
    if (text.trim() !== "") {
      dispatch(addTask(text));
      setText("");
    }
  }
  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(data => dispatch(addAllTasks(data)))
  // })
  const store = useStore();
  console.log(store.getState());
  

  return (
    <div className="container">
      <h1>Task Maneger</h1>
      <div className="mb-4">
        <div className="mb-3">
          <label htmlFor="task" className="form-label">
            Task
          </label>
          <input
            type="text"
            className="form-control"
            id="task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={handleClick}>
          Add Task
        </button>
      </div>
      <TaskList />
    </div>
  );
}

export default App;
