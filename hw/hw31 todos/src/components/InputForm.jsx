import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { styles } from '../css path/customCssPath';
import { addItem } from '../redux/reducers/todoReducer';


function InputForm() {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const handleSubmit = (e, value) => {
    e.preventDefault();
    dispatch(addItem(value));
    setValue('')
  }
  return (
    <>
      <form className={styles.form.form} onSubmit={(e)=>{handleSubmit(e, value)}}>
        <div className="flex-grow">
            <input 
              type="text" 
              placeholder="Add a new todo" 
              className={styles.form.input}
              value={value}
              onChange={e=>{setValue(e.target.value)}} />
        </div>
        <button 
        type="submit" className={styles.btn.btn}>Add</button>   
      </form>
    </>
  );
}

export default InputForm;
