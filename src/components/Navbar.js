import { Link } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
  const handleClick = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div className="container">
      <div className="title">
        <Link to="/home">My Cool App</Link>
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
          <div>
            <Link to="login">Login</Link>
            <Link to="signup">Signup</Link>
          </div>
        )}
      </nav>
    </div>
  );
};
export default Navbar;
