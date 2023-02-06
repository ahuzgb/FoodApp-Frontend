import { Link } from "react-router-dom";
import "../components/navbar.css";

const Navbar = ({ user, setUser }) => {
  const handleClick = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  console.log("ussssssssser", user);

  return (
    <div className="container">
      <div className="title">
        <Link to="/home" className="home">
          Home
        </Link>
      </div>
      <nav>
        {user !== null && (
          <div>
            <span>{user.email}</span>
            <button onClick={handleClick}>Log out</button>
            <Link to="userprofile">user profile</Link>
          </div>
        )}
        {user === null && (
          <div className="butons">
            <Link to="login" className="login">
              Login
            </Link>
            <Link to="signup" className="signup">
              Signup
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};
export default Navbar;
