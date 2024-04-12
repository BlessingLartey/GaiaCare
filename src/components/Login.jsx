import React, { useState } from "react";
import "../Styles/Login.css";
import Home from "../Pages/Home";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    //Authentication logic comes here
    if (username === "Joe Admin" && password === "Admin1234") {
      setIsLoggedIn(true);
      alert("Login successful!");
    } else {
      alert("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  if (isLoggedIn) {
    return (
      <div>
        <Home />
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <h1 className="login-heading">Agroforestry Firm Login</h1>
      <div className="form-group">
        <label className="label" htmlFor="username">
          Username:
        </label>
        <input
          className="input"
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="password">
          Password:
        </label>
        <input
          className="input"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="login-button" type="submit">
        Login
      </button>
    </form>
  );
};

export default Login;
