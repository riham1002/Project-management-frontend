import React from "react";
import Project from "./Project";
import "../App.css";

function Home(props) {
  return (
    <div className="homeContainer">
      <nav className="buttons">
        {/* <a id="home" className="homeButton" href="/">Home</a> */}

        <a id="logout" className="logoutButton" href="/">
          logout
        </a>
        <a id="allprojects" className="allprojectsButton" href="/home">
          all projects
        </a>

        <a id="completed" className="completedButton" href="/completed">
          completed
        </a>
        <a id="uncompleted" className="uncompleted" href="/home">
          uncompleted
        </a>
      </nav>
      <h1>Project Management</h1>
      <div className="imgStyling">
        <a href="/addProject">
          {" "}
          <img
            className="addImg"
            src="https://cdn3.iconfinder.com/data/icons/rcons-file-action/512/add_file-512.png"
          ></img>
        </a>
      </div>

      <Project></Project>
    </div>
  );
}
export default Home;
