import { NavLink } from 'react-router';
import { useAuth } from '../context/AuthContext';
import useMyFunc from '../hooks/useFunc';

function Navbar() {
    const {user, logout} = useAuth();
    const {changeValueTheme} = useMyFunc();
    return ( 
        <div className="p-3 text-bg-dark header-container">
            <div className="container"> 
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"> 
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 me-5 fs-3 text-white text-decoration-none"> 
                        {user ? user.name : 'Dude!'}
                    </a> 
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"> 
                        <li><NavLink to="/" className="nav-link px-2 text-warning">Home</NavLink></li>
                        <li><NavLink to="contacts" className="nav-link px-2 text-white">Contacts</NavLink></li>
                        <li><NavLink to="about" className="nav-link px-2 text-white">About</NavLink></li> 
                    </ul> 
                    <div className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-5" role="search"> 
                        <button data-theme='dark' className="btn btn-dark border-warning text-warning rounded-pill px-3 me-2" onClick={(e)=>{changeValueTheme(e)}} type="button">Dark</button>
                        <button data-theme='light' className="btn btn-warning border-dark rounded-pill px-3" onClick={(e)=>{changeValueTheme(e)}} type="button">Light</button> 
                    </div> 
                    <div className="text-end"> 
                        <NavLink to='logpage' className="btn border-warning text-warning me-2">Login</NavLink> 
                        <NavLink onClick={logout} className="btn btn-warning">Logout</NavLink> 
                    </div> 
                </div> 
            </div> 
        </div>
    );
}

export default Navbar;