import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

function TaskList() {
    const tasks = useSelector(state => state.tasks);
    if (tasks.length === 0) {
        return <p>No tasks</p>
    }
  return (
    <ul className="list-group">
        {tasks.map(task=>(
            <TaskItem key={task.id} task={task} />
        ))}
    </ul>
  );
}

export default TaskList;
