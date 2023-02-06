import { Link } from "react-router-dom";
import "../components/navbar.css";
import Logo from "./images/beanie-logo.png";

const Navbar = ({ user, setUser }) => {
  const handleClick = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  console.log("ussssssssser", user);

  return (
    <div className="navbar-container">
      <img src={Logo} alt="logo" style={{ width: "200px" }} />
      <div className="navbar-right">
        <Link to="/home" className="navbar-button">
          Home
        </Link>
      </div>
      <nav>
        {user !== null && (
          <div className="navbar-right">
            <div className="navbar-username-container">
              <span className="navbar-username">{user?.first + " "}</span>
            </div>
            <button onClick={handleClick} className="logout-button">
              Log out
            </button>
            <Link to="userprofile" className="navbar-button">
              user profile
            </Link>
          </div>
        )}
        {user === null && (
          <div className="navbar-right">
            <Link to="login" className="navbar-button">
              Login
            </Link>
            <Link to="signup" className="navbar-button">
              Signup
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};
export default Navbar;
