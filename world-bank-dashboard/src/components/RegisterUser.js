import { useState } from "react";

export default function RegisterUser() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();

  function handleSubmit() {
    return;
  }

  return (
    <div className="Register">
      <header className="Register-Header">Register New User</header>
      <form className="Register-form">
        <label htmlFor="username">Username</label>
        <br />
        <input
          type="text"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <label htmlFor="Password-repeat">Re-enter Password</label>
        <br />
        <input
          type="password"
          id="Password-repeat"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        ></input>
        <input
          type="submit"
          id="Register_button"
          onClick={handleSubmit}
          value="Register New User"
        ></input>
      </form>
    </div>
  );
}
