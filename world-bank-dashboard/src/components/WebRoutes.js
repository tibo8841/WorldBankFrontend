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

const childContainers = css({ flex: "1" });

export default function WebRoutes() {
  return (
    <div css={backgroundAndGeneralLayout}>
      <Routes css={childContainers}>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginUser />} />
        <Route path="register" element={<RegisterUser />} />
        <Route path="history" element={<History />} />
        <Route path="search" element={<Search />} />
        <Route path="results" element={<Results />} />
      </Routes>
    </div>
  );
}
