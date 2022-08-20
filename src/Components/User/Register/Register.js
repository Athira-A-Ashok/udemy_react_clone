import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "./Register.css";
import Navbar from "../Navbar/Navbar";

function Register() {
  return (
    <div>
      <Navbar />
      <div className="body">
        <div className="container">
          <h3>Register</h3>
          <div className="form">
            <label>Username</label>
            <input type="text" placeholder="Username" />
            <label>Email</label>
            <input type="email" placeholder="Email" required />
            <label>Password</label>
            <input type="password" required placeholder="Password" />
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
            />
            <input className="submit" type="submit" value="Register" />
            <span>
              Have an account? <Link to="/login">Login</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
