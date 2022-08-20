import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CanvasVideo from "react-canvas-video";
import ContentLoader from "react-content-loader";
import "./WatchVideo.css";

function WatchVideo(props) {
  return (
    <div>
      <Navbar />
      <div>
        <div>
          <CanvasVideo
            options={{
              autoplay: true,
            }}
            styles={{
              canvas: {
                height: "76vh",
              },
              progress: {
                height: "40px",
              },
            }}
          />
          <div className="overlay">
            <h2>StudyOuk</h2>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <p className="study-video-title">title</p>
          <p className="study-video-views">
            <Link
              style={{ textDecoration: "none", color: "blue" }}
              to="/purchased/courses"
            >
              Go to purchase page
            </Link>
          </p>
        </div>
        <h5 className="video-desc-heading">Description</h5>
        <div className="panel-wrapper">
          <a href="#show" className="show btn" id="show">
            Show More
          </a>
          <a href="#hide" className="hide btn" id="hide">
            Show Less
          </a>
          <div className="panel">description</div>
          <div className="fade"></div>
        </div>
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default WatchVideo;
