// import { deleteTask } from "../redux/actions";
import { deleteTask, toogleTask } from "../redux-toolkit/tasksSlice";
import { useDispatch } from "react-redux";
function TaskItem({ task }) {
    const dispatch = useDispatch();
    function handleDelete() {
        dispatch(deleteTask(task.id));
    }
    function handleToggle(){
      dispatch(toogleTask(task.id))
    }
  return (
    <li className="list-group-item d-flex align-items-center justify-content-between">
      <span onClick={handleToggle} className={task.completed ? 'text-decoration-line-through' : ''}>{task?.name || task.text}</span>
      <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default TaskItem;
