import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import shop from "../../assets/images.jpeg";
import "./HeroSection.css";
import FeatureData from "../page/FeatureData";
export default function HeroSection({ data }) {
  const { name } = data;
  
  return (
    <>
    <div className="main">
      <div className="hero-container">
        <div className="section">
          <p>welcome to</p>
          <h1>{name}</h1>
          <p>
            Inevitably, your customers will need to communicate with you about
            their order or experience. They may need to correct their personal
            information, make an exchange, or return a faulty product. Your
            website is where these customers will turn to get in touch with you.
            The easier you make it for customers to connect—with a contact form
            or chat service, for example—the easier it will be to solve their
            problems quickly.
          </p>
          <NavLink className='navlink'>
            <button>Shop</button>
          </NavLink>
        </div>
      </div>
      <div className="section-img">
        <img src={shop} alt="" />
      </div>
    </div>
      <FeatureData/>
    </>
  );
}
