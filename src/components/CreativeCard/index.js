import React from "react";
import Card01 from "../../images/card01.jpg";
import CaptainWoman from "../../images/CaptainWoman.png";
import Pen from "../../images/pen.png";
import Man from "../../images/man.jpg";
import DeskImg from "../../images/DeskImg.jpg";
import "./index.css";

function CreativeCard() {
  return (
    <div className="card-container">
      {/* background transition */}
      <div className="card background-transition">
        <div className="content">
          <h2>Design</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
            vero quia beatae quaerat assumenda error aliquid placeat iure
            excepturi atque.
          </p>
          <a href="#">Read more</a>
        </div>
      </div>
      <hr />
      {/* expandable card effect */}
      <div className="card expandable-card">
        <div className="imgbox">
          <img src={Card01} alt="cardimg" className="imgbox" />
        </div>
        <div className="content">
          <h2>card hover</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            quibusdam eaque, accusamus doloribus id vel? Cumque possimus eveniet
            veritatis esse.
          </p>
        </div>
      </div>
      {/* Captain marvel card effect */}
      <div className="card captain-marvel-card">
        <div className="content">
          <h2>Captain Marvel</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            quibusdam eaque, accusamus doloribus id vel? Cumque possimus eveniet
            veritatis esse.
          </p>
          <a href="#">Read More</a>
        </div>
        <img src={CaptainWoman} alt="Captain Woman" />
      </div>
      {/* creative border card */}
      <div className="card creative-border-card">
        <div className="face face1">
          <div className="content">
            <h2>Services</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              ducimus qui. Autem cumque magni quia officiis placeat quibusdam
              illum esse similique est consectetur! Obcaecati sequi, harum
              soluta voluptates nam aut!
            </p>
            <a href="#">Read more</a>
          </div>
        </div>
        <div className="face face2">
          <h2>88</h2>
        </div>
      </div>
      {/* double face card hover effect */}
      <div className="card face-card">
        <div className="face1">
          <div className="imgbox">
            <img src={Pen} alt="pen" />
            <h3>design</h3>
          </div>
        </div>
        <div className="face2">
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, maiores.
            </p>
            <a href="#">read more</a>
          </div>
        </div>
      </div>
      {/* layer-card */}
      <div className="card layer-card-effect">
        <div className="imgbox">
          <img src={Man} alt="man" />
        </div>
        <div className="details">
          <h2>
            john doe
            <br />
            <span>founder</span>
          </h2>
        </div>
      </div>
      {/* scaling card effect */}
      <div className="card scaling-card-effect">
        <div className="imgbox">
          <img src={DeskImg} alt="Desk" />
        </div>
        <div className="content">
          <h3>Post Title</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae corrupti temporibus maxime labore molestias quidem
            consequatur ratione, officiis quia libero? Recusandae error
            repudiandae earum quos cupiditate pariatur officia quia velit.
          </p>
          <a href="#">read more</a>
        </div>
      </div>
    </div>
  );
}

export default CreativeCard;
