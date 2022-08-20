import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import "./Login.css";
import Navbar from "../Navbar/Navbar";

function Login() {
  const [username, setUsername] = useState("");
  const [usernameRequired, setUsernameRequired] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordRequired, setPasswordRequired] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="login-first-div">
        <div className="login-second-div">
          <h3>Login</h3>
          <div className="form1">
            <label>Username</label>
            <input
              className="input"
              type="text"
              required
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {usernameRequired ? (
              <span className="text-danger">This field is required</span>
            ) : null}

            <label>Password</label>
            <input
              type="password"
              required
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordRequired ? (
              <span className="text-danger">This field is required</span>
            ) : null}
            <input className="submit" type="submit" value="Login" />
            <span>
              Don't have an account? <Link to="/register">Join Now</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
