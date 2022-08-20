import React from "react";

function Banner() {
  return (
    <div
      style={{
        backgroundImage: "url('https://picsum.photos/200/620')",
        marginLeft: "20px",
        marginRight: "20px",
        marginTop: "61px",
        height: "500px",
      }}
    >
      <h4 style={{ color: "black", marginLeft: "240px", paddingTop: "150px" }}>
        Explore Here
      </h4>
      <button
        style={{
          color: "white",
          marginLeft: "200px",
          backgroundColor: "black",
          height: "40px",
          width: "15%",
          borderRadius: "24px",
        }}
      >
        View All Courses
      </button>
    </div>
  );
}

export default Banner;
