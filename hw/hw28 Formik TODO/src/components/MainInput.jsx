import { useFormik } from "formik";
import * as Yup from "yup";

function MainInput({onAddTodo}) {
  const validationSchema = Yup.object({
    todo: Yup.string()
      .trim()
      .min(5, "Todo must be at least 5 characters long")
      .required("Please enter a todo"),
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
