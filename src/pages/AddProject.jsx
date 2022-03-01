
import React, { useState } from 'react';

function AddProject() {
    const [inputList, setInputList] = useState(["eee", "ttt"]);
    const handleChange = e => {
        const { task, value } = e.target;
        setInputList({
            ...inputList,
            [task]: value
        });


    }
    return (
        <div>

            <h1>
                Add Project
            </h1>
            <div>
                <label>Project Name</label>
                <input type={"text"} /> <br></br><br></br>
                <label>Start at</label>
                <input type={"Date"} />
                <label>End at</label>
                <input type={"Date"} /><br></br>
                {inputList.map((item, i) => {
                    return (
                        <div key={i}>
                            <label>Tasks</label> <input type={"text"} name="task" placeholder="task" value={item} onChange={handleChange} />
                            <input type="button" value="add" />
                            <input type="button" value="remove" />


                        </div>

                    )
                }
                )}

                <br></br>
                <button  >Add Project </button>
            </div>
            <pre>
                {JSON.stringify(inputList, null, 2)}
            </pre>
        </div>
    )
}
export default AddProject;