import { useState } from "react";
import "./App.css";
import Field from "./components/Field";
import LibForm from './components/LibForm'

function App() {
  // const initValues = {
  //   email:'',
  //   textarea: ''
  // };
  // const [formData, setFormData] = useState(initValues);
  
  // const [errorEmail, setErrorEmail] = useState('');
  // const [errorTextarea, setErrorTextarea] = useState('');
  // const handleChange = e => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  //   // console.log('Form updated:', formData)
  // }
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   // if (!formData.email) {
  //   //   setErrorEmail('Email is required')
  //   //   return;
  //   // }
  //   // if (!formData.textarea) {
  //   //   setErrorTextarea('Textarea is required')
  //   //   return;
  //   // }
  //   console.log('Form submited:', formData);
  // }


  return (
    <>
      <div className="container">

        <LibForm />

        <h1>Forms</h1>

        {/* <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              name='email'
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
            {errorEmail && (
              <div className="text-danger">{errorEmail}</div>
            )}
            <Field label='Email address' placeholder='name@example.com' type='email' id='exampleFormControlInput1' />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Example textarea
            </label>
            <textarea
              value={formData.textarea}
              onChange={handleChange}
              className="form-control"
              name="textarea"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
            {errorTextarea && (
              <div className="text-danger">{errorTextarea}</div>
            )}
          </div>
          <button className="btn btn-primary">Send</button>
        </form> */}

        
      </div>
    </>
  );
}

export default App;
