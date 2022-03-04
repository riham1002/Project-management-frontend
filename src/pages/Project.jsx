
import React, { useEffect, useState } from 'react';
import { FaTimes } from "react-icons/fa";
function Project() {
    const [projectData, setProjectData] = useState([])
    const prijectsArr = projectData.filter((v, i, a) => a.findIndex(t => (t.id === v.id)) === i);
    // const removeItem = (name) => {
    //     setProjectData(
    //         projectData.filter((element) => {
    //             return element.project_name !== name;
    //         })
    //     );
    // };
    const deleteTableRows = (index)=>{
        const rows = [...prijectsArr];
        rows.splice(index, 1);
        setProjectData(rows);
        fetch('http://localhost:4000/project', {
            method: "post",
            body: JSON.stringify(projectData),
            headers: { 'content-type': 'application/json' },
            credentials: "include"

        })
        .then(res => res.json()).then(data => {
            if (data.delete === true) {
                alert("project deleted");
                window.location.href = "http://localhost:3000/home";
            } })
   }
 

    useEffect(() => {
        fetch('http://localhost:4000/projectsInfo')
            .then(res => res.json()).then(data => {
                setProjectData(data)
            })

    }, [])


    return (
        <div>

            {prijectsArr.map(project => {
                return (
                    <div>
                         <FaTimes
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => deleteTableRows(project.name)}
              />
                        <h3> {project.project_name}</h3>

                        <div>Start at: {project.start_at}</div>
                        <div>End at:  {project.end_at}</div>
                        <div><h4>Tasks</h4>
                            {projectData.map((pro) => {
                                if (pro.project_name === project.project_name) return <li>{pro.task_name}</li>
                            })}

                        </div>
                        <div> <button>Done</button></div>
                        
                    </div>)
            })}

        </div>
    )
}

export default Project;