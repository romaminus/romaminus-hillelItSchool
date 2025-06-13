import Navbar from "../components/Navbar";
import { Link } from "react-router";

function AboutPage() {
  return (
      <div className="home ">
        <h1>Welcome to the About Page</h1>
        <div>
          <Link to="/" className="btn btn-primary me-5">
            Go to Home Page
          </Link>
          <Link to="/dashboard" className="btn btn-primary">
            Go to Dashboard Page
          </Link>
        </div>
      </div>
  );
}

export default AboutPage;
