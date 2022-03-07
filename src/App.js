// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import AddProject from "./pages/AddProject";
import Completed from "./pages/Completed";

function App() {
  // const [completedProject, setCompletedProject] = useState([]);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/m" element={<SignUp />} />
          <Route path="/addProject" element={<AddProject />} />
          <Route path="/completed" element={<Completed />} />

          {/* <Route path="/project" element={<Project />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
