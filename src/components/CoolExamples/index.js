import React from "react";
import "./index.css";

function CoolExamples() {
  return (
    <div className="cool-expample-container">
      <ul className="smoky-text">
        <li>S</li>
        <li>M</li>
        <li>O</li>
        <li>K</li>
        <li>Y</li>
      </ul>
      <div className="fill-text">
        <h2>text</h2>
      </div>
      <div className="container-social-media">
        <a href="#" className="icon">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="icon">
          <i className="fab fa-google"></i>
        </a>
        <a href="#" className="icon">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="#" className="icon">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      {/* rotate text border */}
      <div className="rotate-text-border box ">
        <span className="rotated"></span>
        <h1>
          CSS
          <br />
          <span>border</span>
          <br />
          hover
          <br />
          effect
        </h1>
      </div>
    </div>
  );
}

export default CoolExamples;
