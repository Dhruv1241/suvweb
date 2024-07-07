import React from "react";
import { NavLink } from "react-router-dom";
import './ErrorPage.css'
export default function ErrorPage() {
  return (
    <div className="err-container">
      <div className="err">
        <h2>404</h2>
        <h2>OH OH! you are lost</h2>
        <p>
          The page you are looking for dose not exit. How are you here is a
          mistery. But you can click the button below to go back to the home
          page
        </p>
      <NavLink to='/' className='err-btn'><button>Go back to the home</button></NavLink>
      </div>
    </div>
  );
}
