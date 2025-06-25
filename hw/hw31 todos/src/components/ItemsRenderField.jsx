import { styles } from "../css path/customCssPath";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, toggleTextItem } from "../redux/reducers/todoReducer";
import { openModal } from "../redux/reducers/modalReducers";

function ItemsRenderField() {
  const { data: todos, isLoading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const handleToggle = (id) => {
    dispatch(toggleTextItem(id))
  }
  const handleDelete = (id) => {
    dispatch(deleteItem(id))
  }
  const handleEdit = (id) => {
    dispatch(openModal({ id }));
  }

  if (isLoading) {
    return <p className={styles.item.p}>Loading...</p>;
  }
  if (error) {
    return <p className={styles.item.p}>Load error: {error}</p>;
  }

  return (
    <>
      <ul className={styles.item.ul}>
        {todos.length === 0 ? (
          <p className={styles.item.p}>No todos. Add first!</p>
        ) : (
          todos.map(({ title, completed, id }) => (
            <li
              className={styles.item.li}
              key={id}
            >
              <input
                type="checkbox"
                className={styles.item.checkbox}
                checked={completed}
                onChange={()=>{handleToggle(id)}}
              />
              <span className={`${styles.item.span} ${completed ? styles.item.checkboxChecked : ""}`}>{title}</span>
              <button className={styles.btn.editBtn} onClick={()=>{handleEdit(id)}}>Edit</button>
              <button className={styles.btn.deleteBtn} onClick={()=>{handleDelete(id)}}>Delete</button>
            </li>
          ))
        )}
      </ul>
    </>
  );
}

export default ItemsRenderField;
