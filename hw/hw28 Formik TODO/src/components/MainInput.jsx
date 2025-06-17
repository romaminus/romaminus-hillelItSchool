import { useFormik } from "formik";
import * as Yup from "yup";
const addTodoToLocalStorage = (todoText) => {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  const newTodo = {
    id: Date.now(),
    text: todoText,
    checked: false
  };
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
  console.log(`Завдання "${todoText}" додано до localStorage.`);
//   localStorage.clear()
};

function MainInput({onAddTodo}) {
  const validationSchema = Yup.object({
    todo: Yup.string()
      .trim()
      .min(1, "Завдання не може бути порожнім")
      .required("Будь ласка, введіть завдання"),
  });
  const formik = useFormik({
    initialValues: {
      todo: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      
      onAddTodo(values.todo);

      resetForm(); 
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit} className="flex mb-4">
        <div className="flex-grow">
          <input
            type="text"
            name="todo" // !!! Назва поля повинна відповідати ключу в initialValues та validationSchema
            id="todoInput" 
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 me-2"
            placeholder="Add new todo"
            value={formik.values.todo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.todo && formik.errors.todo ? (
            <div className="text-red-500 text-xs mt-1">{formik.errors.todo}</div>
          ) : null}
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
