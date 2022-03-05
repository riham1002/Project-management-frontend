import Project from "./Project";
// import "//home.css";
import "../App.css";
// import { FaPlus } from "react-icons/fa";

function Home(props) {
    return (
        <div>
            <nav className="buttons">
                {/* <a id="home" className="homeButton" href="/">Home</a> */}

                <a id="logout" className="logoutButton" href="/">logout</a>
                <a id="allprojects" className="allprojectsButton" href="/home">all projects</a>

                <a id="completed" className="completedButton" href="/home">completed</a>
                <a id="uncompleted" className="uncompleted" href="/home">uncompleted</a>
            </nav>
            <h1>
                Project Management
            </h1>
            
            <a  href="/addProject"> <img className="addImg" src="https://cdn3.iconfinder.com/data/icons/rcons-file-action/512/add_file-512.png"></img></a>
           {/* <a  href="/addProject"><FaPlus 
                style={{ color: "black", cursor: "pointer", fontSize:"large" }}
                
              /></a> */}
{/* <a  href="/addProject">Add Project</a> */}
            <Project></Project>
        </div>
    )
}
export default Home;