import { NavLink } from "react-router";
import { useAuth } from "../context/AuthContext";

function Navbar() {
    const {user, login} = useAuth()
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            {user ? (
              <span className="navbar-text">Hello {user.name}</span>
            ) : (<a
                  onClick={()=>{login('John')}}
                  className='btn btn-primary'
                  href="#"
                >
                  Login
                </a>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
