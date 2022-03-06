import "../App.css";
import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
function Project() {
  const [projectData, setProjectData] = useState([]);
  const prijectsArr = projectData.filter(
    (v, i, a) => a.findIndex((t) => t.id === v.id) === i
  );

  const deleteTableRows = (project_name) => {
    setProjectData(
      projectData.filter((obj) => {
        if (obj.project_name === project_name) return false;

        return true;
      })
    );

    fetch(`http://localhost:4000/delete/${project_name}`, {
      method: "DELETE",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.delete === true) {
          alert("project deleted");
          window.location.href = "http://localhost:3000/home";
        } else console.log("else");
      });
  };

  useEffect(() => {
    fetch("http://localhost:4000/projectsInfo")
      .then((res) => res.json())
      .then((data) => {
        setProjectData(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="projectStyle">
      {prijectsArr.map((project, index) => {
        return (
          <div class="column">
            <div class="card">
              <div>
                <FaTimes
                  style={{ color: "black", cursor: "pointer" }}
                  onClick={() => deleteTableRows(project.project_name)}
                />
                <h3> {project.project_name}</h3>

                <div>Start at: {project.start_at}</div>
                <div>End at: {project.end_at}</div>
                <div>
                  <h4 class="taskTitle">Tasks</h4>
                  {projectData.map((pro) => {
                    if (pro.project_name === project.project_name)
                      return <li>{pro.task_name}</li>;
                  })}
                </div>
                <div>
                  {" "}
                  <button className="doneButton">Done</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Project;
