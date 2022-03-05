import { useState } from "react";
import "./login.css";

function Signup(props){
    const [signupData, setSignupData]= useState({username:"", password:""})
  const signupHandler=(key, value)=>{
setSignupData({...signupData, [key]:value})
  }

    const submitSignup=(e)=>{
        fetch('http://localhost:4000/signup', {
          method:"post",
          body:JSON.stringify(signupData),
          headers: { 'content-type': 'application/json' },
          
      
        }).then(res=>res.json()).then(data=>{
           if(data.errorMessage){alert(data.errorMessage)}
           else  {
            window.location.href = `http://localhost:3000/`;
           }
           })
         
         }
    return(
        <div >
          <button className="backButton"><a href="/">back</a> </button>
          <div className="signupStyle">
            <h1>
               Please Sign Up
            </h1>
            <div >
                <label className="label"> </label>
                <input className="username" placeholder="username" type={"text"} required onChange={(v)=>signupHandler("username", v.target.value)}/> <br></br><br></br>
                <label className="label"></label>
                <input  className="password" placeholder="password" type={"password"} required onChange={(v)=>signupHandler("password", v.target.value)} /><br></br><br></br>
                <button className="submitButton"  onClick={submitSignup}>sign up </button>
            </div>
        </div>
        </div>
    )
}
export default Signup;