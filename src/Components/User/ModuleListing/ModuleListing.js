import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./ModuleListing.css";
import { useParams, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";

function Explorenew() {
  const [university, setUniversity] = useState("Mahatma Gandhi University");
  const [department, setDepartment] = useState("B.com");
  const [specialization, setSpecialization] = useState("Finance and Taxation");
  const [semester, setSemester] = useState("6");
  const [subject, setSubject] = useState("Advertisement and sales management");

  return (
    <div>
      <Navbar />
      <div
        className="module-purchased"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div className="card">
          <img src="https://picsum.photos/280/130" alt="" />
          <h2 style={{ paddingLeft: "8px" }}>
            4800
            <span>
              <s>16000</s>
            </span>
          </h2>
          <h6 style={{ paddingLeft: "8px" }}>
            University :
            <span
              style={{ color: "grey", fontSize: "13px", paddingLeft: "5px" }}
            ></span>
          </h6>
          <h6 style={{ paddingLeft: "8px" }}>
            Department :
            <span
              style={{ color: "grey", fontSize: "13px", paddingLeft: "5px" }}
            ></span>
          </h6>
          <h6 style={{ paddingLeft: "8px" }}>
            Specialization :
            <span
              style={{ color: "grey", fontSize: "13px", paddingLeft: "5px" }}
            ></span>
          </h6>
          <h6 style={{ paddingLeft: "8px" }}>
            Semester :
            <span
              style={{ color: "grey", fontSize: "13px", paddingLeft: "5px" }}
            ></span>
          </h6>
          <h6 style={{ paddingLeft: "8px" }}>
            Subject :
            <span
              style={{ color: "grey", fontSize: "13px", paddingLeft: "5px" }}
            ></span>
          </h6>
          <div>
            <Link
              className="module-buynow-button"
              to="/purchase/course"
              style={{ textDecoration: "none", color: "black" }}
            >
              BUY NOW
            </Link>
          </div>
        </div>
      </div>
      <div className="explore-button-style">
        <div className="explore-new-filter">
          <div className="goback">
            <Link to="/explore/courses/bba">
              <KeyboardBackspaceIcon
                style={{
                  fontSize: "30px",
                  color: "black",
                  marginLeft: "145px",
                }}
              />
            </Link>
          </div>
          <h1>Subject</h1>
        </div>
      </div>
      <div className="explore-new-content">
        <div className="wrapper">
          <div className="collapsible">
            <input type="checkbox" id="collapsible-head" />
            <label for="collapsible-head">Module 1</label>
            <>
              <div className="collapsible-text">
                <>
                  <p>no video</p>
                  <p>
                    <Link to="/watch/video/">
                      <SlowMotionVideoIcon
                        style={{
                          fontSize: "23px",
                          paddingTop: "10px",
                          paddingRight: "5px",
                          textDecoration: "none",
                        }}
                      />
                      Video No.
                    </Link>
                  </p>
                </>
                <>
                  <p>
                    <Link to="/watch/video/">
                      <SlowMotionVideoIcon
                        style={{
                          fontSize: "23px",
                          paddingTop: "10px",
                          paddingRight: "5px",
                          textDecoration: "none",
                        }}
                      />
                      Video No.
                    </Link>
                  </p>
                  <p>
                    {" "}
                    <SlowMotionVideoIcon
                      style={{
                        fontSize: "23px",
                        paddingTop: "10px",
                        paddingRight: "5px",
                        textDecoration: "none",
                      }}
                    />
                    Video No.
                  </p>
                  <ToastContainer />
                </>
                <i class="fa fa-lock"></i>
              </div>
              <div className="collapsible-text">
                <p className="Novideo">Coming soon</p>
              </div>
            </>
          </div>
        </div>
        <div className="wrapper">
          <div className="collapsiblee">
            <input
              type="checkbox"
              id="collapsiblee-head"
              aria-expanded="true"
            />
            <label for="collapsiblee-head" aria-expanded="true">
              Module 2
            </label>
            <>
              <div className="collapsiblee-text">
                <>
                  <p>
                    <Link to="/watch/video/">
                      <SlowMotionVideoIcon
                        style={{
                          fontSize: "23px",
                          paddingTop: "10px",
                          paddingRight: "5px",
                          textDecoration: "none",
                        }}
                      />
                      Video No.
                    </Link>
                  </p>
                </>
                <>
                  <p>
                    <Link to="/watch/video/">
                      <SlowMotionVideoIcon
                        style={{
                          fontSize: "23px",
                          paddingTop: "10px",
                          paddingRight: "5px",
                          textDecoration: "none",
                        }}
                      />
                      Video No.
                    </Link>
                  </p>
                  <p>
                    {" "}
                    <SlowMotionVideoIcon
                      style={{
                        fontSize: "23px",
                        paddingTop: "10px",
                        paddingRight: "5px",
                        textDecoration: "none",
                      }}
                    />
                    Video No.
                  </p>
                  <ToastContainer />
                </>
              </div>
              <div className="collapsiblee-text">
                <p className="Novideo">Coming soon</p>
              </div>
            </>
          </div>
        </div>
        <div className="wrapper">
          <div className="collapsibleee">
            <input type="checkbox" id="collapsibleee-head" />
            <label for="collapsibleee-head">Module 3</label>
            <>
              <div className="collapsibleee-text">
                <>
                  <p>
                    <Link to="/watch/video/">
                      <SlowMotionVideoIcon
                        style={{
                          fontSize: "23px",
                          paddingTop: "10px",
                          paddingRight: "5px",
                          textDecoration: "none",
                        }}
                      />
                      Video No.
                    </Link>
                  </p>
                </>
                <>
                  <p>
                    <Link to="/watch/video/">
                      <SlowMotionVideoIcon
                        style={{
                          fontSize: "23px",
                          paddingTop: "10px",
                          paddingRight: "5px",
                          textDecoration: "none",
                        }}
                      />
                      Video No.
                    </Link>
                  </p>
                  <p>
                    {" "}
                    <SlowMotionVideoIcon
                      style={{
                        fontSize: "23px",
                        paddingTop: "10px",
                        paddingRight: "5px",
                        textDecoration: "none",
                      }}
                    />
                    Video No.
                  </p>
                  <ToastContainer />
                </>
                <i class="fa fa-lock"></i>
              </div>
              <div className="collapsibleee-text">
                <p className="Novideo">Coming soon</p>
              </div>
            </>
          </div>
        </div>
        <div className="wrapper">
          <div className="collapsibleeee">
            <input type="checkbox" id="collapsibleeee-head" />
            <label for="collapsibleeee-head">Module 4</label>
            <>
              <div className="collapsibleeee-text" id="accordion">
                <>
                  <p>
                    <Link to="/watch/video/">
                      <SlowMotionVideoIcon
                        style={{
                          fontSize: "23px",
                          paddingTop: "10px",
                          paddingRight: "5px",
                          textDecoration: "none",
                        }}
                      />
                      Video No.
                    </Link>
                  </p>
                </>
                <>
                  <p>
                    <Link to="/watch/video/">
                      <SlowMotionVideoIcon
                        style={{
                          fontSize: "23px",
                          paddingTop: "10px",
                          paddingRight: "5px",
                          textDecoration: "none",
                        }}
                      />
                      Video No.
                    </Link>
                  </p>
                  <p>
                    {" "}
                    <SlowMotionVideoIcon
                      style={{
                        fontSize: "23px",
                        paddingTop: "10px",
                        paddingRight: "5px",
                        textDecoration: "none",
                      }}
                    />
                    Video No.
                  </p>
                  <ToastContainer />
                </>
                <i class="fa fa-lock"></i>
              </div>
              <div className="collapsibleeee-text">
                <p className="Novideo">Coming soon</p>
              </div>
            </>
          </div>
        </div>
        <div className="wrapper">
          <div className="collapsibleeeee">
            <input type="checkbox" id="collapsibleeeee-head" />
            <label for="collapsibleeeee-head">Module 5</label>
            <>
              <div className="collapsibleeeee-text">
                <>
                  <p>
                    <Link to="/watch/video/">
                      <SlowMotionVideoIcon
                        style={{
                          fontSize: "23px",
                          paddingTop: "10px",
                          paddingRight: "5px",
                          textDecoration: "none",
                        }}
                      />
                      Video No.
                    </Link>
                  </p>
                </>
                <>
                  <p>
                    <Link to="/watch/video/">
                      <SlowMotionVideoIcon
                        style={{
                          fontSize: "23px",
                          paddingTop: "10px",
                          paddingRight: "5px",
                          textDecoration: "none",
                        }}
                      />
                      Video No.
                    </Link>
                  </p>
                  <p>
                    {" "}
                    <SlowMotionVideoIcon
                      style={{
                        fontSize: "23px",
                        paddingTop: "10px",
                        paddingRight: "5px",
                        textDecoration: "none",
                      }}
                    />
                    Video No.
                  </p>
                  <ToastContainer />
                </>
                <i class="fa fa-lock"></i>
              </div>
              <div className="collapsibleeeee-text">
                <p className="Novideo">Coming soon</p>
              </div>
            </>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Explorenew;
