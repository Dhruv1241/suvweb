import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div className="container-footer">
        <div className="footer">
          <div className="footer-heading">
            <h3>Let get start</h3>
            <h3>Takl to us today</h3>
          </div>
          <NavLink className="footer-navlink">
            <button className="footer-btn">Let start</button>
          </NavLink>
        </div>
      </div>
      <div className="main-footer-container">
        <div className="main-footer">
          <div className="about">
            Inevitably, your customers will need to communicate with you about
            their order or experience. They may need to correct their personal
            information, make an exchange, or return a faulty product
          </div>
          <div className="footer-input">
            <input type="text" placeholder="enter your email" />
            <NavLink className="down-footer-btn">
              <button type="submit" >Send</button>
            </NavLink>
          </div>
          <div className="footer-icon">icon icon icon</div>
          <div className="footer-contact">
            <div>Call Us</div>
            MuzaffarNagar, UttarPradesh
            1234512345
          </div>
        </div>
      </div>
    </>
  );
}
