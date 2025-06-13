import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

function Root() {
    return ( 
        <div>
            <Navbar />
            <div className="container">
                <Outlet />
            </div>
        </div>
    );
}

export default Root;