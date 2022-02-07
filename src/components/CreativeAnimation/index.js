import React from "react";
import "./index.css";
import Car from "../../images/car.png";
import Motobike from "../../images/motobike.png";

function CreativeAnimation() {
  return (
    <div className="creative-animation-container">
      <hr />
      <div className="floating-text">
        <h2>
          COMING <br />
          SOON!
          <br />
        </h2>
      </div>
      <hr />
      {/* <div className="rotating-loading"></div> */}
      {/* driving-car-bike */}
      <div className="driving-car-bike">
        <div className="background">
          <img src={Car} alt="car" className="car" />
          <img src={Motobike} alt="motobike" className="motobike" />
        </div>
      </div>
      <hr />
      {/* text rotator */}
      <div className="text-rotator">
        <h2>
          I love Css <span></span>
        </h2>
      </div>
      <hr />
      <div className="banner-animate"></div>
      <hr />
      <div className="button-shaking">
        <a href="#">Hover Me</a>
      </div>
      <hr />
      <div className="animate-button">
        <a href="#">Hover Me</a>
      </div>
      <hr />
      <div className="lighting-text">
        <ul>
          <li>L</li>
          <li>I</li>
          <li>G</li>
          <li>H</li>
          <li>T</li>
          <li>I</li>
          <li>N</li>
          <li>G</li>
        </ul>
      </div>
      <hr />
      <div className="heart"></div>
      <hr />
      <div className="text-background">
        <h1>css animation</h1>
      </div>
      <hr />
      <div className="bouncing-ball">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <hr />
      <div className="rain-effect">
        <div className="rain"></div>
      </div>
      <hr />
      <div className="icon-hover-effect">
        <ul>
          <li>
            <i className="fas fa-heart"></i>
          </li>
          <li>
            <i className="fas fa-glass-martini"></i>
          </li>
          <li>
            <i className="fas fa-globe"></i>
          </li>
          <li>
            <i className="fas fa-gift"></i>
          </li>
        </ul>
      </div>
      <hr />
      <div className="loading-text">
        <ul>
          <li>L</li>
          <li>O</li>
          <li>A</li>
          <li>D</li>
          <li>I</li>
          <li>N</li>
          <li>G</li>
        </ul>
      </div>
      <hr />
      <div className="phone-pulse">
        <div className="pulse">
          <i className="fas fa-phone"></i>
        </div>
      </div>
      <hr />
      <div className="image-slider">
        <div className="slider"></div>
      </div>
      <hr />
      <div className="changing-bg-color">
        <h1>
          changed
          <br /> background
        </h1>
      </div>
      <hr />
      <div className="cradle-effect">
        <div className="cradle">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <hr />
      <div className="colorful-loading">
        <div className="container">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <hr />
      <div className="moving-square-effect">
        <div className="loader">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <hr />
      <div className="reveal-loading-text">
        <h1>loading</h1>
      </div>
    </div>
  );
}

export default CreativeAnimation;
