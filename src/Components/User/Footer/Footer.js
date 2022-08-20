import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <p>Terms and Conditions</p>
        <p>Privacy policy</p>
        <p>Help and support</p>
        <p>Career</p>
      </div>
      <div className="footer-right">
        <div className="studyouk-logo">
          <p className="studyouk-text">StudyOuk</p>
        </div>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/profile.php?id=100072065906812"
            target="_blank"
          >
            <i class="fab fa-facebook-square"></i>
          </a>
          <a
            href="https://instagram.com/studyouk?utm_medium=copy_link"
            target="_blank"
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/maxzon-softwares-952054222"
            target="_blank"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="mailto: maxzonsoftwares@gmail.com" target="_blank">
            <i class="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
