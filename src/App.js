import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import LandingPage from "./components/LandingPage";
import "./App.css";
import DonationForm from "./components/DonationForm";
import UserProfile from "./components/UserProfile";
import { useJwt } from "react-jwt";

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  useEffect(() => {
    if (!user) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, [user]);

  const token = user?.token;

  const { decodedToken, isExpired } = useJwt(token);

  console.log("UZZZERRR", decodedToken);
  console.log("EXPIRED ", isExpired);

  return (
    <div className="App">
      <Navbar user={user} setUser={setUser} />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/home"
          element={
            user && !isExpired ? <Home user={user} /> : <Navigate to="/" />
          }
        />
        <Route
          path="/login"
          element={
            !user || isExpired ? (
              <Login setUser={setUser} />
            ) : (
              <Navigate to="/home" />
            )
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
          element={
            user && !isExpired ? (
              <DonationForm user={decodedToken} token={token} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/userprofile"
          element={
            user && !isExpired ? (
              <UserProfile user={user} token={token} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
