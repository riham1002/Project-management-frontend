import React from "react";
import completedProject from "./Project";
function Completed(props) {
  return (
    <div>
      <button className="backButton">
        <a href="/home">back</a>
      </button>
      <h1>Completed Projects</h1>
      <completedProject></completedProject>
    </div>
  );
}

export default Completed;
