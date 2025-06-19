import { Form, Formik, Field, ErrorMessage, useFormik } from "formik";

function LibForm() {
  // Option 1
  const initValues = {
    email: "email@examp.le",
    password: "",
    message: "",
  };
  function validate(values) {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Password is Required";
    } else if (values.password.length < 6) {
      errors.password = "Password shold be more than 6";
    }
    return errors;
  }
  function handleSubmit(values, formikBag) {
    console.log("Formik submit", values);
    console.log(formikBag);
    formikBag.resetForm();
  }

  // Option 2

  const userForm = useFormik({
    initialValues: {
      username: "romaminus19@gmail.com",
      userpass: "",
    },
    onSubmit: (values) => {
      console.log("Form submit:", values);
    },
    validate: (values) => {
      const errors = {};
      if (!values.username) {
        errors.username = "Required";
      }
      if (!values.userpass) {
        errors.userpass = "Password is Required";
      } else if (values.userpass.length < 6) {
        errors.userpass = "Password shold be more than 6";
      }
      return errors;
    },
  });

  return (
    <div>
      <h2>Formik</h2>

      <Formik
        initialValues={initValues}
        onSubmit={handleSubmit}
        validate={validate}
      >
        <Form>
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label"
              placeholder="name@example.com"
            >
              Email address
            </label>
            <Field name="email" id="email" className="form-control" />
            <ErrorMessage
              name="email"
              component="div"
              className="text-danger"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Password
            </label>
            <Field
              id="password"
              name="password"
              className="form-control"
              type="password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-danger"
            />
          </div>
          <button type="submit" className="btn btn-primary">Send</button>
        </Form>
      </Formik>

      <form onSubmit={userForm.handleSubmit} className="mt-5">
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            User Name
          </label>
          <input
            type="email"
            className="form-control"
            id="username"
            name="username"
            placeholder="name@example.com"
            onChange={userForm.handleChange}
            onBlur={userForm.handleBlur}
            value={userForm.values.username}
          />
          {userForm.errors.username && userForm.touched.username && (
            <div className="text-danger">
                {userForm.errors.username}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="userpass" className="form-label">
            User Password
          </label>
          <input
            type="password"
            className="form-control"
            id="userpass"
            name="userpass"
            onChange={userForm.handleChange}
            onBlur={userForm.handleBlur}
            value={userForm.values.userpass}
          />
          {userForm.errors.userpass && userForm.touched.userpass &&(
            <div className="text-danger">
                {userForm.errors.userpass}
            </div>
          )}
          <button type="submit" className="btn btn-primary">Send</button>
        </div>
      </form>
    </div>
  );
}

export default LibForm;
