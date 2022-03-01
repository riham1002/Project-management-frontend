import { useState } from "react";

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

           <h1>Please log in</h1>
      <input
        type="text"
        className="username"
        id="username"
        placeholder="username"
        required
        onChange={(v)=>loginHandler("username", v.target.value)}
      />
      <input
        type="password"
        className="password"
        id="password"
        placeholder="password"
        required
        onChange={(v)=>loginHandler("password", v.target.value)}
      />
      <input type="submit" value="login" id="login" required onClick={submitLogin}/>

      <output></output>

    <a id="signUp" className="signUp" href="/signUp">Sign up</a>
        </div>
    )
}
export default Login;