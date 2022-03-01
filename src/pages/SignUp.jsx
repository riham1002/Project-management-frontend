import { useState } from "react";

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
        <div>
           
            <h1>
               Please Sign Up
            </h1>
            <div>
                <label>User Name</label>
                <input type={"text"}  onChange={(v)=>signupHandler("username", v.target.value)}/> <br></br><br></br>
                <label>Password</label>
                <input type={"password"} onChange={(v)=>signupHandler("password", v.target.value)} />
                <button  onClick={submitSignup}>sign up </button>
            </div>
        </div>
    )
}
export default Signup;