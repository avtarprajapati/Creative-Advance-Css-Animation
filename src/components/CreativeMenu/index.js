import React from "react";
import "./index.css";

function CreativeMenu() {
  return (
    <div className="menu-container">
      <hr />
      {/* growing-border */}
      <div className="flex">
        <ul className="menu growing-border">
          <li className="menu-item">
            <a href="#">Home</a>
          </li>
          <li className="menu-item">
            <a href="#">About</a>
          </li>
          <li className="menu-item">
            <a href="#">Services</a>
          </li>
          <li className="menu-item">
            <a href="#">Portfolio</a>
          </li>
          <li className="menu-item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <hr />
      {/* background-border */}
      <div className="flex">
        <ul className="menu background-border">
          <li className="menu-item">
            <a href="#">Home</a>
          </li>
          <li className="menu-item">
            <a href="#">About</a>
          </li>
          <li className="menu-item">
            <a href="#">Services</a>
          </li>
          <li className="menu-item">
            <a href="#">Portfolio</a>
          </li>
          <li className="menu-item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <hr />
      {/* not work expected text color split-background */}
      <div className="flex">
        <ul className="menu split-background">
          <li className="menu-item">
            <a href="#">
              Home
              <div>
                <span />
                <span />
                <span />
                <span />
              </div>
            </a>
          </li>
          <li className="menu-item">
            <a href="#">
              About
              <div>
                <span />
                <span />
                <span />
                <span />
              </div>
            </a>
          </li>
          <li className="menu-item">
            <a href="#">
              Services
              <div>
                <span />
                <span />
                <span />
                <span />
              </div>
            </a>
          </li>
          <li className="menu-item">
            <a href="#">
              Portfolio
              <div>
                <span />
                <span />
                <span />
                <span />
              </div>
            </a>
          </li>
          <li className="menu-item">
            <a href="#">
              Contact
              <div>
                <span />
                <span />
                <span />
                <span />
              </div>
            </a>
          </li>
        </ul>
      </div>
      <hr />
      {/* border-bottom-moving */}
      <div className="flex">
        <ul className="menu border-bottom-moving">
          <li className="menu-item">
            <a href="#">Home</a>
          </li>
          <li className="menu-item">
            <a href="#">About</a>
          </li>
          <li className="menu-item">
            <a href="#">Services</a>
          </li>
          <li className="menu-item">
            <a href="#">Portfolio</a>
          </li>
          <li className="menu-item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <hr />
      {/* blurry-menu */}
      <div className="flex">
        <ul className="menu blurry-menu">
          <li className="menu-item">
            <a href="#">Home</a>
          </li>
          <li className="menu-item">
            <a href="#">About</a>
          </li>
          <li className="menu-item">
            <a href="#">Services</a>
          </li>
          <li className="menu-item">
            <a href="#">Portfolio</a>
          </li>
          <li className="menu-item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <hr />
      {/* Double menu effect */}
      <div className="flex">
        <ul className="menu double-menu">
          <li className="menu-item">
            <a href="#">
              <span>Home</span>
              <span>Home</span>
            </a>
          </li>
          <li className="menu-item">
            <a href="#">
              <span>About</span>
              <span>About</span>
            </a>
          </li>
          <li className="menu-item">
            <a href="#">
              <span>Services</span>
              <span>Services</span>
            </a>
          </li>
          <li className="menu-item">
            <a href="#">
              <span>Portfolio</span>
              <span>Portfolio</span>
            </a>
          </li>
          <li className="menu-item">
            <a href="#">
              <span>Contact</span>
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
      <hr />
      {/* 2 border effect */}
      <div className="flex">
        <ul className="menu two-border">
          <li className="menu-item">
            <a href="#">Home</a>
          </li>
          <li className="menu-item">
            <a href="#">About</a>
          </li>
          <li className="menu-item">
            <a href="#">Services</a>
          </li>
          <li className="menu-item">
            <a href="#">Portfolio</a>
          </li>
          <li className="menu-item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <hr />
      {/* border sniper effect */}
      <div className="flex">
        <ul className="menu border-sniper">
          <li className="menu-item">
            <a href="#">
              Home
              <span />
              <span />
            </a>
          </li>
          <li className="menu-item">
            <a href="#">
              About
              <span />
              <span />
            </a>
          </li>
          <li className="menu-item">
            <a href="#">
              Services
              <span />
              <span />
            </a>
          </li>
          <li className="menu-item">
            <a href="#">
              Portfolio
              <span />
              <span />
            </a>
          </li>
          <li className="menu-item">
            <a href="#">
              Contact
              <span />
              <span />
            </a>
          </li>
        </ul>
      </div>
      <hr />
      {/* border rotation effect */}
      <div className="flex">
        <ul className="menu border-rotation">
          <li className="menu-item">
            <a href="#">Home</a>
          </li>
          <li className="menu-item">
            <a href="#">About</a>
          </li>
          <li className="menu-item">
            <a href="#">Services</a>
          </li>
          <li className="menu-item">
            <a href="#">Portfolio</a>
          </li>
          <li className="menu-item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <hr />
      {/* colorful layer effect */}
      <div className="flex">
        <ul className="menu colorful-layer">
          <li className="menu-item">
            <a href="#" data-text="home">
              Home
            </a>
          </li>
          <li className="menu-item">
            <a href="#" data-text="about">
              About
            </a>
          </li>
          <li className="menu-item">
            <a href="#" data-text="service">
              Services
            </a>
          </li>
          <li className="menu-item">
            <a href="#" data-text="portfolio">
              Portfolio
            </a>
          </li>
          <li className="menu-item">
            <a href="#" data-text="contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CreativeMenu;
