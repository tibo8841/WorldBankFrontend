import { useState } from "react";
import MainPageHeader from "./components/MainPageHeader";
import WebRoutes from "./components/WebRoutes";
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

const homePage = css({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

function App() {
  const [login, setLogin] = useState("");
  async function userLoggedIn(check) {
    await setLogin(check);
    console.log(login);
  }
  return (
    <div css={homePage}>
      {<MainPageHeader />}
      {<WebRoutes userLoggedIn={userLoggedIn} login={login} />}
    </div>
  );
}

export default App;
