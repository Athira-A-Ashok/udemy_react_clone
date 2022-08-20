import React from "react";
import img from "./images/404img.png";
import "./notfound.css";

const PageNotFound = () => {
  return (
    <div className="notfound">
      <img src={img} alt="" width="40%" height="40%" position="fixed" />
    </div>
  );
};

export default PageNotFound;
