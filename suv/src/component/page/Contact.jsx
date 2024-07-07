import React from "react";
import './Contact.css'
import { NavLink } from "react-router-dom";
export default function Contact() {
  return (
    <div className="contactContainer">
      <h3 className="contact-heading">
        Contact Us
      </h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55574.581984403616!2d77.66765785561596!3d29.475194078459705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c1ba00983523d%3A0xc6a75ba008574871!2sMuzaffarnagar%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1717166568327!5m2!1sen!2sin"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="map"
      ></iframe>

      <form action="" className="form">
        <div className="form-div">
          <div className="form-manager">
          <div className="input">
            <input type="text" placeholder="Username" />
          </div>
          <div className="input">
            <input type="text" placeholder="Enter your Email" />
          </div>
          <div >
            <input type="text" placeholder="Text here" className="text-area"/>
          </div>
          </div>
        </div>
          <NavLink>
          <button type="submit" className="contact-btn">Submit</button>
          </NavLink>
      </form>
    </div>
  );
}
