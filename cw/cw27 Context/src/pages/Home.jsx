import { Link } from "react-router";
import Navbar from "../components/Navbar";

function HomePage() {
    return ( 
            <div className="home ">
                <h1>Welcome to the Home Page</h1>
                <p>This is the main page of our application</p>
                <div>
                    <Link to='/about' className="btn btn-primary me-5">
                        Go to About Page
                    </Link>
                    <Link to='/dashboard' className="btn btn-primary">
                        Go to Dashboard Page
                    </Link>
                </div>
            </div>
    );
}

export default HomePage;