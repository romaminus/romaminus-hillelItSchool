
import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";
function DashboardPage() {
    const {user} = useAuth()
    return (
        <div className="home ">
                <h1>Welcome {user ? user.name : ''} to the Dashboard Page</h1>
                <Link to="/" className="btn btn-primary me-5">
                    Go to Home Page
                </Link>
                <Link to="/about" className="btn btn-primary">
                    Go to About Page
                </Link>
            </div>
    );
}

export default DashboardPage;
