import { styles } from "../css path/customCssPath";
import { useDispatch, } from 'react-redux';
import { clearAll, fetchDataRequest, clearCompleted } from '../redux/reducers/todoReducer';


function Header() {
    const dispatch = useDispatch();
    const handleGetList = () => {
        dispatch(fetchDataRequest());
    }
    const handleClearCompleted = () => {
        dispatch(clearCompleted());
    }
    const handleClearAll = () => {
        dispatch(clearAll());
    }
  return (
    <header className={styles.header.header}>
      <div className={styles.header.container}>
        <a to="/" className="flex items-center space-x-2">
          <img
            src="./public/to-do-list-svgrepo-com.svg"
            alt="logo"
            className="w-10 h-10"
          />
          <span className="text-2xl font-bold">ToDo List</span>
        </a>

        <button 
            className={styles.btn.btn}
            onClick={handleGetList}
            >Get List From Server
        </button>

        <div>
          <button className={styles.btn.deleteBtn} onClick={handleClearCompleted}>Clear Completed</button>
          <button className={styles.btn.deleteBtn} onClick={handleClearAll}>Clear All</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
