import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./KtuCourses.css";

function KtuCourses() {
  const [showElement, setShowElement] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      setShowElement(true);
    }, 5000);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="filter-ktu">
        <div className="ktu-university">KT University</div>
      </div>
      {!showElement ? <div className="ktu-timeout">Coming Soon</div> : <></>}
      <div className="gotopage">
        <Link style={{ textDecoration: "none" }} to="/">
          Go to home page
        </Link>
      </div>
    </div>
  );
}

export default KtuCourses;
