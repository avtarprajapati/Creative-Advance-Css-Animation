import React from "react";
import Photo from "../../images/photo.png";
import Deer from "../../images/deer.jpg";
import Nature from "../../images/nature.png";
import Girl from "../../images/girl.jpg";
import CD from "../../images/CD.jpg";
import "./index.css";

function CreativeImage() {
  return (
    <div className="image-container">
      <figure className="container fe-1">
        <img src={Photo} alt="robot" width={180} height={150} />
        <figcaption className="caption caption-1">
          <h1>Amazing caption!</h1>
          <p>you can write anything you want here!</p>
        </figcaption>
      </figure>
      <hr />
      <figure className="container fe-2">
        <img src={Photo} alt="robot" width={180} height={150} />
        <figcaption className="caption caption-2">
          <h1>Amazing caption!</h1>
          <p>you can write anything you want here!</p>
        </figcaption>
      </figure>
      <hr />
      <figure className="container fe-3">
        <img src={Photo} alt="robot" width={180} height={150} />
        <figcaption className="caption caption-3">
          <h1>Amazing caption!</h1>
          <p>you can write anything you want here!</p>
        </figcaption>
      </figure>
      <hr />
      <figure className="container fe-4">
        <img src={Deer} alt="Deer" width={180} height={150} />
        <figcaption className="caption caption-4">
          <h1>Amazing caption!</h1>
          <p>you can write anything you want here!</p>
        </figcaption>
      </figure>
      <hr />
      <figure className="fe-5">
        <img src={Nature} alt="nature" width={180} height={150} />
        <figcaption className="caption-5">
          <h1>Amazing caption!</h1>
          <p>you can write anything you want here!</p>
        </figcaption>
      </figure>
      <hr />
      <div className="container fe-6">
        <img src={Girl} alt="girl" width={180} height={150} />
      </div>
      <hr />
      <figure className="fe-7">
        <img src={CD} alt="CD" width={180} height={150} />
        <figcaption className="caption-7">
          <h2>Image hover</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            vel quaerat ullam magni nemo quae.
          </p>
          <a href="#">read more</a>
        </figcaption>
      </figure>
      <hr />
      <figure className="fe-8">
        <img src={CD} alt="CD" width={180} height={150} />
        <figcaption className="caption-8">
          <h2>Image hover</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            vel quaerat ullam magni nemo quae.
          </p>
          <a href="#">read more</a>
        </figcaption>
      </figure>
      <hr />
      <figure className="fe-9">
        <img src={CD} alt="CD" width={180} height={150} />
        <figcaption className="caption-9">
          <h2>Image hover</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            vel quaerat ullam magni nemo quae.
          </p>
          <a href="#">read more</a>
        </figcaption>
      </figure>
      <hr />
      <figure className="fe-10">
        <img src={CD} alt="CD" width={180} height={150} />
        <figcaption className="caption-10">
          <h2>Image hover</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            vel quaerat ullam magni nemo quae.
          </p>
          <a href="#">read more</a>
        </figcaption>
      </figure>
      <hr />
      <figure className="fe-11">
        <img src={CD} alt="CD" width={180} height={150} />
        <figcaption className="caption-11">
          <h2>Image hover</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            vel quaerat ullam magni nemo quae.
          </p>
          <a href="#">read more</a>
        </figcaption>
      </figure>
    </div>
  );
}

export default CreativeImage;
