import { useAuth } from "../context/AuthContext";
import { NavLink } from 'react-router';
import useMyFunc from "../hooks/useFunc";

function LogPage() {
    const {user,} = useAuth();
    const {inputChange, submitChange} = useMyFunc();
  return (
    <div
      className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5"
      tabIndex="-1"
      role="dialog"
      id="modalSignin"
    >
      
      <div className="modal-dialog">
        <div className="modal-content container rounded-4 shadow">
          <div className="modal-header p-5 pb-4 border-bottom-0">
            <h1 className="fw-bold mb-0 fs-2">Sign up for free</h1>
          </div>
          <div className="modal-body p-5 pt-0">
            <form className="">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control rounded-3"
                  id="floatingInput"
                  placeholder="name@example.com"
                  onChange={(e)=>{inputChange(e)}}
                  disabled={user ? true : false}
                />
                <label htmlFor="floatingInput">Enter your name here</label>
              </div>
              <button
                className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                type="button"
                onClick={(e)=>{submitChange(e)}}
              >
                Login
              </button>
              <hr className="my-4" />
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogPage;
