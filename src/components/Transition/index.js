import React from "react";
import "./index.css";

function Transition() {
  return (
    <div className="transition">
      <button id="ease" className="btn">
        Ease
      </button>
      <button id="linear" className="btn">
        Linear
      </button>
      <button id="ease-in" className="btn">
        Ease-In
      </button>
      <button id="ease-out" className="btn">
        Ease-Out
      </button>
      <button id="ease-in-out" className="btn">
        Ease-In-out
      </button>
    </div>
  );
}

export default Transition;
