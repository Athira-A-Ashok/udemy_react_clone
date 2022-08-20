import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContentLoading from "../ContentLoading/ContentLoading";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./ExploreCourses.css";

function ExploreCourses() {
  return (
    <div>
      <Navbar />
      <div className="filter-divs">
        <div className="filter-university">MG University</div>
        <div className="filter-branch">
          <p>B.com</p>
          <p>BA</p>
          <p>BBA</p>
          <p>BSC</p>
          <p>BCA</p>
        </div>
        <div className="filter-subject">
          <p>Computer Application</p>
          <p>Finance and Taxation</p>
          <p>HR</p>
          <p>Marketing</p>
          <p>Finance</p>
        </div>
        <div className="filter-semester">
          <p>Sem 1</p>

          <p>Sem 2</p>

          <p>Sem 3</p>

          <p>Sem 4</p>

          <p>Sem 5</p>

          <p>Sem 6</p>
        </div>
      </div>

      {/* ------------------------ Mobile view departments ------------------------ */}
      <select id="department">
        <option value="">Departments</option>
        <option value="B.com">Bcom</option>
        <option value="BA">BA</option>
        <option value="BBA" selected>
          BBA
        </option>
        <option value="BSC">BSC</option>
        <option value="BCA">BCA</option>
      </select>

      {/* ------------------------ Mobile view semesters ------------------------ */}
      <select id="semester">
        <option value="">Semester</option>
        <option value="1" selected>
          Sem 1
        </option>
        <option value="2">Sem 2</option>
        <option value="3">Sem 3</option>
        <option value="4">Sem 4</option>
        <option value="5">Sem 5</option>
        <option value="6">Sem 6</option>
      </select>

      {/* ------------------------ Mobile view subjects ------------------------ */}
      <select id="subjects">
        <option value="">Specialization</option>
        <option value="Computer Application" selected>
          Computer Application
        </option>
        <option value="Finance and Taxation">Finance and Taxation</option>
        <option value="HR">HR</option>
        <option value="Marketing">Marketing</option>
        <option value="Finance">Finance</option>
      </select>

      <div className="path-purchased-div">
        <p className="path"></p>
      </div>
      <ToastContainer />
      <div className="video-main-div">
        <div>
          <Link
            className="module-sub"
            to="/module/listing/"
            style={{ textDecoration: "none", color: "black" }}
          >
            subject
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ExploreCourses;
