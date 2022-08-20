import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Collapsible from "react-collapsible";

import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./PurchasedCourse.css";

function PurchasedCourse() {
  return (
    <div>
      <NavBar />
      <div className="purchased-courses-main-div">
        <p className="purchased-courses-txt">Purchased Courses</p>

        <>
          <>
            <div tabIndex="1" className="purchased-courses-div">
              <p>university</p>
              <p>department</p>
              <p>Semester</p>
              <p className="sub">specialization</p>
              <div>
                <Collapsible trigger="">
                  <div className="sub-div">
                    <div>
                      <Link
                        to="/module/listing/"
                        style={{ textDecoration: "none" }}
                      >
                        <div>
                          <p className="purchase-sub">obj</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </Collapsible>
              </div>
            </div>
          </>
        </>
      </div>
      <div className="gotopage">
        <Link style={{ textDecoration: "none" }} to="/explore/courses/bba">
          Go to explore page
        </Link>
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default PurchasedCourse;
