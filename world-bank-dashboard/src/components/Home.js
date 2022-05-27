/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

const backgroundAndGeneralLayout = css({
  backgroundColor: "#b4e4dd",
  textAlign: "center",
  height: "40%",
  width: "80%",
  display: "flex",
  flexDirection: "column",
  paddingTop: "15%",
  justifyContent: "center",
});
const heading = css({
  color: "#e87499",
  fontSize: "300%",
  fontWeight: "bold",
  padding: "1%",
  justifyContent: "center",
  flex: "1",
});
const subheading = css({
  color: "#e87827",
  fontSize: "180%",
  fontWeight: "bold",
  justifyContent: "center",
  flex: "1",
});

export default function Home() {
  return (
    <div css={backgroundAndGeneralLayout}>
      <header css={heading}>Welcome to the World Bank App</header>
      <p css={subheading}>Feel free to explore!</p>
    </div>
  );
}
