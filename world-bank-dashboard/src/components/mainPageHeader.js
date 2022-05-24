import { Routes, Route, Link } from "react-router-dom";

function mainPageHeader() {
  return (
    <div>
      <div className="Header-left">
        <header>World Bank Logo</header>
        <Link to="/login" />
        <Link to="/register" />
      </div>
      <div className="Header-right">
        <Link to="/search" />
        <Link to="/history" />
      </div>
    </div>
  );
}

export default mainPageHeader;
