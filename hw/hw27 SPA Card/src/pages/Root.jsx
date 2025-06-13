import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';
import useMyFunc from "../hooks/useFunc";
import { useEffect } from "react";

function Root() {
    const {user} = useAuth();
    return ( 
        <>
            <Navbar />
            <div className={user ? user.theme : 'dark'}>
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default Root;