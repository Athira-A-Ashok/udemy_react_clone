import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import banner from "../../images/banner.jpg";
import "./Landing.css";

function Landing() {
  return (
    <>
      <Navbar />
      <div>
        <img src={banner} alt="" className="banner-img" />
      </div>

      <h2 className="treding-courses-text">Universities and Subjects</h2>

      <div className="university-listing">
        <Link
          className="mg-university"
          to="/explore/courses/bba"
          style={{ textDecoration: "none", color: "black" }}
        >
          MG University
        </Link>

        <Link
          className="kt-university"
          to="/ktu/courses"
          style={{ textDecoration: "none", color: "black" }}
        >
          KT University
          <p className="comming-soon-text">Coming soon</p>
        </Link>
        <Link
          className="calicut-university"
          to="/calicut/courses"
          style={{ textDecoration: "none", color: "black" }}
        >
          Calicut University
          <p className="comming-soon-text">Coming soon</p>
        </Link>
      </div>

      <div className="subject-listing">
        <Link
          className="sub-one"
          to="/explore/courses/BCA"
          style={{ textDecoration: "none", color: "black" }}
        >
          BCA
        </Link>
        <Link
          className="sub-two"
          to="/explore/courses/BA"
          style={{ textDecoration: "none", color: "black" }}
        >
          BA English
        </Link>
        <Link
          className="sub-three"
          to="/explore/courses/bba"
          style={{ textDecoration: "none", color: "black" }}
        >
          BBA
        </Link>
        <Link
          className="sub-four"
          to="/explore/courses/B.com"
          style={{ textDecoration: "none", color: "black" }}
        >
          Bcom Computer Application
        </Link>
      </div>

      <div className="subject-listing">
        <Link
          className="sub-one"
          to="/explore/courses/B.com"
          style={{ textDecoration: "none", color: "black" }}
        >
          Bcom finance
        </Link>
        <Link
          className="sub-two"
          to="/explore/courses/BSC"
          style={{ textDecoration: "none", color: "black" }}
        >
          Bsc physics
        </Link>
        <Link
          className="sub-three"
          to="/explore/courses/BSC"
          style={{ textDecoration: "none", color: "black" }}
        >
          Bsc chemistry
        </Link>
        <Link
          className="sub-four"
          to="/explore/courses/BSC"
          style={{ textDecoration: "none", color: "black" }}
        >
          Bsc computer science
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Landing;
