/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Routes, Route, Link } from "react-router-dom";

const backgroundAndGeneralLayout = css({
  backgroundColor: "#b4e4dd",
  display: "flex",
  paddingBottom: "2%",
  paddingLeft: "1%",
  paddingRight: "1%",
  width: "100%",
  height: "10%",
  paddingTop: "2%",
});

const logo = css({ height: "75%", justifyContent: "center" });

const flexChild1 = css({
  flex: "1",
  paddingRight: "10%",
});

const flexChild2 = css({
  justifyContent: "space-around",
  flex: "1",
  paddingLeft: "10%",
  paddingTop: "1%",
  flexGrow: "4",
});

const colour1 = css({ color: "#e87827" });
const colour2 = css({ color: "#e87499" });

const colourHoverOrFocus = css({
  "&:hover": colour1,
  "&:focus": colour2,
  flex: "1",
  paddingLeft: "15%",
  fontWeight: "bold",
  color: "#102e51",
  fontSize: "120%",
});

export default function MainPageHeader() {
  return (
    <div css={backgroundAndGeneralLayout}>
      <div css={flexChild1} className="Header-left">
        <img
          css={logo}
          title="World Bank logo"
          alt="World Bank logo"
          src="https://www.worldbank.org/content/dam/wbr/logo/logo-wb-header-en.svg"
        />
      </div>
      <div css={flexChild2}>
        <Link to="/login" css={colourHoverOrFocus}>
          Log in
        </Link>
        <Link to="/register" css={colourHoverOrFocus}>
          Register
        </Link>
      </div>
      <div css={flexChild2} className="Header-right">
        <Link to="/search" css={colourHoverOrFocus}>
          Search
        </Link>
        <Link to="/history" css={colourHoverOrFocus}>
          History
        </Link>
      </div>
    </div>
  );
}
