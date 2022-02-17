function Login(props){
    return(
        <div>

           <h1>Please log in</h1>
    <form>
      <input
        type="text"
        className="username"
        id="username"
        placeholder="username"
        required
      />
      <input
        type="password"
        className="password"
        id="password"
        placeholder="password"
        required
      />
      <input type="submit" value="login" id="login" required />

      <output></output>
    </form>
    <a id="signUp" className="signUp" href="/signUp">signUp</a>
        </div>
    )
}
export default Login;