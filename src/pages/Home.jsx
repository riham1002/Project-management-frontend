import Project from "./Project";

function Home(props) {
    return (
        <div>
            <nav className="buttons">
                {/* <a id="home" className="homeButton" href="/">Home</a> */}

                <a id="logout" className="logoutButton" href="/">logout</a>
            </nav>
            <h1>
                Project Management
            </h1>
            <nav className="statusButtons">
                <a id="allprojects" className="allprojectsButton" href="/home">all projects</a>

                <a id="waiting" className="waitingButton" href="/home">waiting</a>
                <a id="inprogress" className="inprogressButton" href="/">in progress</a>
                <a id="completed" className="completedButton" href="/">completed</a>
            </nav>
<a  href="/addProject">Add Project</a>
            <Project></Project>
        </div>
    )
}
export default Home;