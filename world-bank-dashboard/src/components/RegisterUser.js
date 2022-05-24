export default function RegisterUser() {
  return (
    <div className="Register">
      <header className="Register-Header">Register New User</header>
      <form className="Register-form">
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
        <label htmlFor="Password-repeat">Re-enter Password</label>
        <br />
        <input type="text" id="Password-repeat">
          re-enter password
        </input>
        <button id="Register_button">Register New User</button>
      </form>
    </div>
  );
}
