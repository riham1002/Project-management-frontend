
import React, { useState } from 'react';
import "./login.css";
import"./login.css"



function AddProject() {
    const [inputList, setInputList] = useState([""]);
    const [projectData, setProjectData] = useState({
        project_name: "",
        start_at: "",
        end_at: "",
        tasks: inputList,
    })


    const handleChange = (e, index) => {
        const value = e.target.value;
        const list = [...inputList];
        list[index] = value
        setInputList(list);
    }
    const handleAddInput = () => {
        // setInputList([...inputList, ""])
        const list = [...inputList]
        list.push("");
        setInputList(list);

    }
    const handleRemoveInput = index => {
        const list = [...inputList]
        list.splice(index, 1)
        setInputList(list)

    }

    const projectHandler = (key, value) => {
        setProjectData({ ...projectData, [key]: value,tasks:inputList })
    }
    

    const submitProject = (e) => {
        fetch('http://localhost:4000/addproject', {
            method: "post",
            body: JSON.stringify(projectData),
            headers: { 'content-type': 'application/json' },
            credentials: "include"

        })
            .then(res => res.json()).then(data => {
                if (data.adding === true) {
                    alert("project added");
                    window.location.href = "http://localhost:3000/home";
                } else if ((data.adding === "exist")) {
                    alert("project  already exists");
                } else {
                    alert("sth went wrong, project not added");
                }
            })

    }

    return (
        <div>

<button className="backButton"><a href="/home">back</a> </button>
<div className='addProjectStyle'>
            <h1>
                Add Project
            </h1>
            <div>
            
                <label className='label'>  </label>
                <input className='input' type={"text"} placeholder="project name" required onChange={(v) => projectHandler("project_name", v.target.value)} /> <br></br><br></br>
               
                {inputList.map((item, i) => {
                    return (
                        <div key={i}>
                            <label className='label'>  </label> <input className='input' type={"text"} name="task" placeholder="task" required onChange={e => handleChange(e, i)} />
                            {inputList.length - 1 === i && <input type="button" value="add" onClick={handleAddInput} />}
                            {inputList.length !== 1 && <input type="button" value="remove" onClick={() => handleRemoveInput(i)} />}



                        </div>

                    )

                }
                )}
                <label className='label'>Start at  </label>
                <input className='input' type={"Date"} required onChange={(v) => projectHandler("start_at", v.target.value)} /><br></br>
                <label className='label'>End at  </label>
                <input  className='input' type={"Date"} required onChange={(v) => projectHandler("end_at", v.target.value)} /><br></br>

                <br></br>
                <button className='submitButton' onClick={submitProject} >Add Project </button>
                
            </div>

        </div>
        </div>
    )
}



export default AddProject;