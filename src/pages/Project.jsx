
import React, { useEffect, useState } from 'react';
function Project() {
    const [projectData, setProjectData] = useState([])
    const prijectsArr = projectData.filter((v, i, a) => a.findIndex(t => (t.id === v.id)) === i);

    useEffect(() => {
        fetch('http://localhost:4000/projectsInfo')
            .then(res => res.json()).then(data => {
                setProjectData(data)
            })

    }, [])

    console.log(projectData)
    return (
        <div>
            {/* {projectData.map((project) => {
                return <li key={project.project_name}>
                    <h3> {project.project_name}</h3>

                    <div> {project.start_at}</div>
                    <div> {project.end_at}</div>
                    <div> {project.task_name}</div>

                </li>
            })} */}
            {prijectsArr.map(project => {
                return <li key={project.project_name}>
                    <h3> {project.project_name}</h3>

                    <div>Start at: {project.start_at}</div>
                    <div>End at:  {project.end_at}</div>
                    <div><h4>Tasks</h4>
                        {projectData.map((pro) => {
                            if (pro.project_name === project.project_name) return <li>{pro.task_name}</li>
                        })}

                    </div>
                    <div> <button>Done</button></div>
                </li>
            })}

        </div>
    )
}

export default Project;