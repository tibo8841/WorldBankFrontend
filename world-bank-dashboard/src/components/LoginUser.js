import { useState } from "react";
import { getUserLogin } from "./networking";

export default function LoginUser(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  // Add hashing and salting of password for security
  // Add functionality to check user info against users table
  // => when user info matches database (goes to search page) and when it doesn't (throws an error and asks to try again)

  async function handleSubmit(e) {
    e.preventDefault();
    const loginCheck = await getUserLogin(username, password);
    console.log(loginCheck);
    props.userLoggedIn(loginCheck.rows[0].id);
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
        <label htmlFor="password">
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
