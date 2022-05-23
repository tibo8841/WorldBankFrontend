function loginUser() {
  //add functionality to login form
  return (
    <div className="Login">
      <header className="Login-header">Please Log-in</header>
      <form className="Login-form">
        <label for="username">Username</label>
        <br />
        <input type="text" id="username">
          username
        </input>
        <br />
        <label for="password">Password</label>
        <br />
        <input type="text" id="password">
          password
        </input>
      </form>
    </div>
  );
}

export default loginUser;
