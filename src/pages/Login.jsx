import { useState } from "react";
import "./login.css";

function Login(props){
  const [loginData, setLoginData]= useState({username:"", password:""})
  const loginHandler=(key, value)=>{
setLoginData({...loginData, [key]:value})
  }
const submitLogin=(e)=>{
  fetch('http://localhost:4000/login', {
    method:"post",
    body:JSON.stringify(loginData),
    headers: { 'content-type': 'application/json' },
    credentials:"include"

  })
  .then(res=>res.json()).then(data=>{
   if(data.success)
   {
    
      window.location.href = `http://localhost:3000/home`;
    }else{
      alert("username or password is incorrect")
    }
  })

}
  
    return(
        <div>

           <h1>Welcome to The Project Management System</h1>
           <div className="loginstyle">
           <h2> Please Login</h2>
     <label className="label" ></label> <input
        type="text"
        className="username"
        id="username"
        placeholder="username"
        required
        onChange={(v)=>loginHandler("username", v.target.value)}
      /><br></br><br></br>
      <label className="label"></label> <input
        type="password"
        className="password"
        id="password"
        placeholder="password"
        required
        onChange={(v)=>loginHandler("password", v.target.value)}
      /><br></br><br></br>
      <input className="submitButton" type="submit" value="login" id="login" required onClick={submitLogin}/>

      <output></output>
      <br></br>

    <a id="signUp" className="signUp" href="/signUp">Sign up</a>
        </div>
        </div>
    )
}
export default Login;