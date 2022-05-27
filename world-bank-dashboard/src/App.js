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
  return (
    <div css={homePage}>
      {<MainPageHeader />}
      {<WebRoutes />}
    </div>
  );
}

export default App;
