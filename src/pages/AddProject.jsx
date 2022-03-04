
import React, { useState } from 'react';


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
<a href="/home">back</a>
            <h1>
                Add Project
            </h1>
            <div>
            
                <label>Project Name</label>
                <input type={"text"} onChange={(v) => projectHandler("project_name", v.target.value)} /> <br></br><br></br>
               
                {inputList.map((item, i) => {
                    return (
                        <div key={i}>
                            <label>Tasks</label> <input type={"text"} name="task" placeholder="task" onChange={e => handleChange(e, i)} />
                            {inputList.length - 1 === i && <input type="button" value="add" onClick={handleAddInput} />}
                            {inputList.length !== 1 && <input type="button" value="remove" onClick={() => handleRemoveInput(i)} />}



                        </div>

                    )

                }
                )}
                <label>Start at</label>
                <input type={"Date"} onChange={(v) => projectHandler("start_at", v.target.value)} />
                <label>End at</label>
                <input type={"Date"} onChange={(v) => projectHandler("end_at", v.target.value)} /><br></br>

                <br></br>
                <button onClick={submitProject} >Add Project </button>
                
            </div>

        </div>
    )
}



export default AddProject;