/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { getUserLogin } from "./networking";

const flexContainer = css({
  display: "flex",
  flexDirection: "column",
});

const flexChild = css({
  flex: "1",
  textAlign: "center",
  justifyContent: "center",
  paddingTop: "1%",
  paddingBottom: "1%",
});

const button = css({
  display: "flex",
  textAlign: "center",
  justifyContent: "center",
  paddingTop: "2%",
  paddingBottom: "2%",
  paddingLeft: "7%",
  paddingRight: "7%",
  fontSize: "150%",
  color: "#e87827",
  fontWeight: "bold",
});

const inputFields = css({ flex: "1", width: "50%", height: "40%" });

const textFormat = css({
  color: "#e87499",
  fontWeight: "bold",
  paddingRight: "1%",
});

const heading = css({
  color: "#e87827",
  fontWeight: "bold",
});

const subheading = css({
  fontSize: "150%",
  fontWeight: "bold",
  justifyContent: "center",
  flex: "1",
});

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
      <h1 className="Login-header" css={heading}>
        Welcome to the World Bank Dashboard!
      </h1>
      <h3 className="Login-header2" css={subheading}>
        Please log in
      </h3>
      <form className="Login-form" css={flexContainer}>
        <div css={flexChild}>
          <label htmlFor="username" css={textFormat}>
            Username
          </label>
          <input
            type="text"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            css={inputFields}
          ></input>
        </div>
        <div css={flexChild}>
          <label htmlFor="password" css={textFormat}>
            Password
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            css={inputFields}
          ></input>
        </div>
        <input
          type="submit"
          value="Log in!"
          onClick={handleSubmit}
          css={button}
        ></input>
        <Link to="/register" css={flexChild}>
          Not signed up? Click here to create an account
        </Link>
      </form>
    </div>
  );
}
