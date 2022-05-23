function login() {
  //add functionality to login form
  return (
    <div className="Login">
      <header className="Login-header">Please Log-in</header>
      <form className="Login-form">
        <label htmlFor="username">Username</label>
        <br />
        <input type="text" id="username">
          username
        </input>
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="text" id="password">
          password
        </input>
      </form>
    </div>
  );
}

export default login;
