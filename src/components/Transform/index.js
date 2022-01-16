import React from "react";
import "./index.css";

function Transform() {
  return (
    <div className="transform-container">
      <hr />
      <h4>2D Transform</h4>
      <img
        src="https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
        alt="random-chair"
        width="245"
        height="270"
        className="img-2d"
      />
      <hr />
      <h4>3D Transform</h4>
      <img
        src="https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
        alt="random-chair"
        width="245"
        height="270"
        className="img-3d"
      />
    </div>
  );
}

export default Transform;
