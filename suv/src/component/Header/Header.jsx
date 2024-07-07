import React from "react";
import "./Header.css";
// import { CgMenu } from "react-icons/cg";
// import {  CgCloseO } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">सुविDHA</div>
        <div className="navbar">
          <ul className="navbar-nav">
            <li>
              <NavLink className="navlink" to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink className="navlink" to='product'>Product</NavLink>
            </li>
            <li>
              <NavLink className="navlink" to='about'>About</NavLink>
            </li>
            <li>
              <NavLink className="navlink" to='contact'>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="icon">
        <MdOutlineShoppingCart />
      </div>
      {/* <CgMenu className="cgshow" />
      
      <CgCloseO className="cgclose"/> */}
      
    </header>
  );
}
