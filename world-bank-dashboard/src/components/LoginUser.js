import { useState } from "react";

export default function LoginUser() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  // Add hashing and salting of password for security
  // Add functionality to check user info against users table
  // => when user info matches database (goes to search page) and when it doesn't (throws an error and asks to try again)

  function handleSubmit() {
    return;
  }

  return (
    <div className="Login">
      <h1 className="Login-header">Welcome to the World Bank Dashboard!</h1>
      <h3 className="Login-header2">Please log in</h3>
      <form className="Login-form">
        <label htmlFor="username">
          Username
          <input
            type="text"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </label>
        <label for="password">
          Password
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
        <input type="submit" value="Login" onClick={handleSubmit}></input>
        <button id="Register_button">
          Not signed up? Click here to create an account
        </button>
      </form>
    </div>
  );
}
