import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./CalicutCourses.css";
import { Link } from "react-router-dom";

function CalicutCourses() {
  const [showElement, setShowElement] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      setShowElement(true);
    }, 5000);
  }, []);
  return (
    <div>
      <Navbar />
      <div className="filter-cal">
        <div className="cal-university">Calicut University</div>
      </div>
      {!showElement ? <div className="cal-timeout">Coming Soon</div> : <></>}
      <div className="gotopage">
        <Link style={{ textDecoration: "none" }} to="/">
          Go to home page
        </Link>
      </div>
    </div>
  );
}

export default CalicutCourses;
