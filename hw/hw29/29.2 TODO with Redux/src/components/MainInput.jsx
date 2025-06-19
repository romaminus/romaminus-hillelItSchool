import { useDispatch } from "react-redux";
import { addItem } from "../redux/reducers/todoReducer";
import { useState } from "react";
// import * as Yup from "yup";

function MainInput() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [validationErrorMsg, setValidationErrorMsg] = useState('');
  

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const trimmedValue = inputValue.trim()
          setValidationErrorMsg('');
          if (trimmedValue.length === 0) {
            setValidationErrorMsg('Please, enter some value.');
            return;
          }
          if (trimmedValue.length < 5) {
            setValidationErrorMsg('The entered value is too small. At least 5');
            return;
          }
          dispatch(addItem(inputValue));
          setInputValue('')
        }}
        className="flex mb-4"
      >
        <div className="flex-grow">
          <input
            type="text"
            name="todo"
            id="todoInput"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 me-2"
            placeholder="Add new todo"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setValidationErrorMsg('');
            }}
          />
          {validationErrorMsg && (
          <p className="text-red-500 text-sm mt-1">{validationErrorMsg}</p>
        )}
        </div>

        <button
          type="submit"
          className="form__btn inline-flex items-center justify-center ml-2 px-4 py-2 font-semibold bg-green-500 text-white rounded-md shadow-sm hover:bg-green-700 transition"
        >
          Add
        </button>
      </form>
    </>
  );
}

export default MainInput;
