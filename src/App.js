
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
}from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/SignUp' element={<SignUp />}/>

    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
