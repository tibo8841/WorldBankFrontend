/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { Routes, Route, Link } from "react-router-dom";
import LoginUser from "./LoginUser";
import RegisterUser from "./RegisterUser";
import Search from "./Search";
import Home from "./Home";
import History from "./History";
import Results from "./Results";

const backgroundAndGeneralLayout = css({
  backgroundColor: "#b4e4dd",
  textAlign: "center",
  height: "100%",
  display: "flex",
  justifyContent: "center",
});

const childContainers = css({ flex: "1", height: "100%" });

export default function WebRoutes(props) {
  return (
    <div css={backgroundAndGeneralLayout}>
      <Routes css={childContainers}>
        <Route path="/" element={<Home />} />
        <Route
          path="login"
          element={<LoginUser userLoggedIn={props.userLoggedIn} />}
        />
        <Route path="register" element={<RegisterUser />} />
        <Route path="history" element={<History login={props.login} />} />
        <Route path="search" element={<Search login={props.login} />} />
        <Route path="results" element={<Results />} />
      </Routes>
    </div>
  );
}
