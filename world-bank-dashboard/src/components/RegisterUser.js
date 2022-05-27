/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { React, useState } from "react";
const url = "http://localhost:3000";

const flexContainer = css({ display: "flex" });
const flexChild = css({ display: "flex" });

export default function RegisterUser() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();

  async function handleRegistration() {
    await fetch(`${url}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: `${username}`,
        password: `${password}`,
        passwordConfirmation: `${passwordConfirmation}`,
      }),
    });
  }

  return (
    <div className="Register" css={flexContainer}>
      <header className="Register-Header">Register New User</header>
      <form className="Register-form" onSubmit={handleRegistration}>
        <label htmlFor="username" css={flexChild}>
          Username
        </label>
        <input
          type="text"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <label htmlFor="password" css={flexChild}>
          Password
        </label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <label htmlFor="Password-repeat" css={flexChild}>
          Re-enter Password
        </label>
        <input
          type="password"
          id="Password-repeat"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        ></input>
        <input
          type="submit"
          id="Register_button"
          value="Register New User"
          css={flexChild}
        ></input>
      </form>
    </div>
  );
}
