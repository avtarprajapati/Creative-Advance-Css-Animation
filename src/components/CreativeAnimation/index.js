import React from "react";
import Car from "../../images/car.png";
import Motobike from "../../images/motobike.png";
import "./index.css";

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
      {/* banner-animate */}
      <div className="banner-animate"></div>
      <hr />
      {/* button-shaking */}
      <div className="button-shaking">
        <a href="#">Hover Me</a>
      </div>
      <hr />
      {/* animate-button */}
      <div className="animate-button">
        <a href="#">Hover Me</a>
      </div>
      <hr />
      {/* lighting-text */}
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

      {/*  text-background */}
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
      <hr />
      <div className="line-loading">
        <div className="loading" />
      </div>
      <hr />
      <div className="growing-line-loading">
        <div className="loading">
          <div className="obj"></div>
          <div className="obj"></div>
          <div className="obj"></div>
          <div className="obj"></div>
          <div className="obj"></div>
          <div className="obj"></div>
          <div className="obj"></div>
        </div>
      </div>
      <hr />
      {/* rings-roation-loading */}
      <div className="ring-loader">
        <div className="loader">
          <div className="outer"></div>
          <div className="middle"></div>
          <div className="inner"></div>
          <div className="dot"></div>
        </div>
      </div>
      <hr />
      {/* fading out square */}
      <div className="fading-out-square">
        <div className="loader">
          <span className="s1"></span>
          <span className="s2"></span>
          <span className="s3"></span>
          <span className="s4"></span>
          <span className="s5"></span>
          <span className="s6"></span>
          <span className="s7"></span>
          <span className="s8"></span>
          <span className="s9"></span>
        </div>
      </div>
      <hr />
      {/* growing-line-loading */}
      <div className="growing-line-loading">
        <div className="loading">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <hr />
      {/* backgroung-box-moving */}
      <div className="backgroung-box-moving">
        <div className="container">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="text">Background animation</div>
        </div>
      </div>
      <hr />
      <div className="hexagon-loader-container">
        <div className="line">
          <div className="hexagon"></div>
        </div>
      </div>
      <hr />
      <div className="expanding-line-menu">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <hr />
      <div className="background-box-growing">
        <div className="container">
          <h2>background animation</h2>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </div>
    </div>
  );
}

export default CreativeAnimation;
