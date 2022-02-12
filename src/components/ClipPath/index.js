import React from "react";
import "./index.css";
import ImgSlide from "../../images/img-slider-1.jpg";
import DeskImg from "../../images/DeskImg.jpg";
import Image2 from "../../images/2.jpg";

function ClipPath() {
  return (
    <div className="clip-path-container">
      <div className="triangle">
        <img src={ImgSlide} alt="Boat" />
      </div>
      <hr />
      <div className="loading-split">
        <div className="loader">
          <span className="top-half">Loading</span>
          <span className="bottom-half">Loading</span>
        </div>
      </div>
      <hr />
      <div className="wave-container">
        <div className="wave">
          <h2>Wave</h2>
          <h2>Wave</h2>
        </div>
      </div>
      <hr />
      <div className="img-hover-effect">
        <div className="container">
          <div className="clip clip1" />
          <div className="clip clip2" />
          <div className="clip clip3" />
        </div>
      </div>
      <hr />
      <div className="popup-effect">
        <div className="container">
          <h2>Information</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            laudantium? Perferendis eveniet amet ducimus ipsam exercitationem
            possimus veniam esse mollitia corporis odio voluptate accusantium,
            deserunt magnam praesentium quidem fugit illum.
          </p>
        </div>
      </div>
      <hr />
      {/* white and black text */}
      <div className="text-effect">
        <div className="container">
          <h2>black</h2>
          <h2>white</h2>
        </div>
      </div>
      <hr />
      {/* image circle hover effect*/}
      <div className="img-circle-hover">
        <div className="card">
          <div className="img">
            <img src={Image2} alt="1" />
          </div>
          <div className="content">
            <h2>title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              qui, at commodi optio voluptatum cupiditate velit, maxime modi
              soluta accusantium eaque! Ducimus qui facilis in perferendis
              quibusdam. Atque, officia nulla.
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
      <hr />
      <div className="img-hover">
        <div className="card">
          <div className="content">
            <h2>Image hover Effect</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur quas perspiciatis accusantium. Ab similique vitae ipsa
              necessitatibus atque quas iure enim nobis cumque obcaecati,
              suscipit soluta in excepturi, officia aut!
            </p>
            <a href="#">Read More</a>
          </div>
          <img src={DeskImg} alt="DeskImg" className="img" />
        </div>
      </div>
      <hr />
      <div className="creative-menu-split">
        <ul className="menu">
          <li>
            <a href="#" data-text="home">
              Home
            </a>
          </li>
          <li>
            <a href="#" data-text="about">
              About
            </a>
          </li>
          <li>
            <a href="#" data-text="services">
              Services
            </a>
          </li>
          <li>
            <a href="#" data-text="team">
              Team
            </a>
          </li>
          <li>
            <a href="#" data-text="contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <div className="creative-button-hover">
        <a href="#">
          <span>button</span>
          <span>button</span>
        </a>
      </div>
    </div>
  );
}

export default ClipPath;
