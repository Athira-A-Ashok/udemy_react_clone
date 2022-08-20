import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Payment.css";

function App() {
  const [amount, setAmount] = useState(480000);

  return (
    <div>
      <Navbar />
      <div className="payment-wrapper">
        <div className="payment-sub-wrapper">
          <h1 className="proceed-to-pay-txt">Proceed to Pay</h1>
          <h3>purchasingCourse</h3>
          <h4>Modules</h4>
          <h4>Subjects</h4>
          <h4>Videos</h4>
          <div>
            <Link
              className="link"
              to="/module/listing/"
              style={{ textDecoration: "none", color: "#1881ad" }}
            >
              Go back
            </Link>
          </div>
          <button className="pay-btn">Pay with razorpay</button>
        </div>
      </div>
    </div>
  );
}

export default App;
