/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { React, useState } from "react";
const url = "http://localhost:3000";

const flexContainer = css({
  display: "flex",
  textAlign: "center",
  justifyContent: "space-between",
  flexDirection: "column",
  paddingTop: "1%",
  paddingBottom: "1%",
  height: "50%",
  width: "80%",
});

const flexChild = css({
  flex: "1",
  paddingTop: "2%",
  paddingBottom: "2%",
  paddingLeft: "5%",
  paddingRight: "5%",
});

const flexChild2 = css({
  flex: "1",
  paddingTop: "1%",
  paddingBottom: "1%",
});

const heading = css({
  color: "#102e51",
  fontWeight: "bold",
  fontSize: "150%",
});

const textFormat = css({
  color: "#e87499",
  fontWeight: "bold",
  paddingRight: "1%",
});

const inputFields = css({ flex: "1", width: "30%", height: "40%" });

const button = css({
  flex: "1",
  paddingTop: "2%",
  paddingBottom: "2%",
  paddingLeft: "5%",
  paddingRight: "5%",
  fontSize: "120%",
  color: "#e87827",
  fontWeight: "bold",
});

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
      <header className="Register-Header" css={heading}>
        Register New User
      </header>
      <div css={flexChild}>
        <form className="Register-form" onSubmit={handleRegistration}>
          <div css={flexChild2}>
            <label htmlFor="username" css={textFormat}>
              Username
            </label>
            <input
              css={inputFields}
              type="text"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
          <div css={flexChild2}>
            <label htmlFor="password" css={textFormat}>
              Password
            </label>
            <input
              css={inputFields}
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div css={flexChild2}>
            <label htmlFor="Password-repeat" css={textFormat}>
              Re-enter Password
            </label>
            <input
              css={inputFields}
              type="password"
              id="Password-repeat"
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            ></input>
          </div>
        </form>
        <input
          type="submit"
          id="Register_button"
          value="Register!"
          css={button}
        ></input>
      </div>
    </div>
  );
}
