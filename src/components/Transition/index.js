import React from "react";
import "./index.css";

function Transition() {
  return (
    <div className="transition">
      <hr />
      <button id="ease" className="btn">
        Ease
      </button>
      <hr />
      <button id="linear" className="btn">
        Linear
      </button>
      <hr />
      <button id="ease-in" className="btn">
        Ease-In
      </button>
      <hr />
      <button id="ease-out" className="btn">
        Ease-Out
      </button>
      <hr />
      <button id="ease-in-out" className="btn">
        Ease-In-out
      </button>
      <hr />
    </div>
  );
}

export default Transition;
