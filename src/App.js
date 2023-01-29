import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import LandingPage from "./components/LandingPage";
import "./App.css";
import DonationForm from "./components/DonationForm";
import UserProfile from "./components/UserProfile";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!user) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, [user]);

  return (
    <div className="App">
      <Navbar user={user} setUser={setUser} />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/home"
          element={user ? <Home user={user} /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={
            !user ? <Login setUser={setUser} /> : <Navigate to="/home" />
          }
        />
        <Route
          path="/signup"
          element={
            !user ? <Signup setUser={setUser} /> : <Navigate to="/home" />
          }
        />
        <Route
          path="/donation-form"
          element={user ? <DonationForm /> : <Navigate to="/" />}
        />
        <Route
          path="/userprofile"
          element={user ? <UserProfile /> : <Navigate to="/" />}
        />
      </Routes>
    </div>
  );
}

export default App;
