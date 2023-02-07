import { useState } from "react";
import "../components/signup.css";
const Signup = ({ setUser }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:8080/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name: name,
        last_name: surname,
        city,
        email,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(data.error);
    }

    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(data));
      setIsLoading(false);
      setUser(data);
    }
  };

  return (
    <div className="container-signup">
    <form className="signup" onSubmit={handleSubmit}>
      <label>First name </label>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <label>Last name </label>
      <input
        type="text"
        onChange={(e) => setSurname(e.target.value)}
        value={surname}
      />
      <label>City</label>
      <input
        type="text"
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />
      <label>Email </label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label>Password </label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
  </div>
  );
};

export default Signup;
