import { Outlet, Link } from "react-router-dom";
import "./LandingPage.css";
function LandingPage() {
  return (
    <>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </div>

      <Outlet />
    </>
  );
}

export default LandingPage;
