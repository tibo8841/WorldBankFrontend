import { Routes, Route, Link } from "react-router-dom";

export default function MainPageHeader() {
  return (
    <div>
      <div className="Header-left">
        <header>World Bank Logo</header>
        <Link to="/login">Log-In</Link>
        <Link to="/register">Register</Link>
      </div>
      <div className="Header-right">
        <Link to="/search">Search</Link>
        <Link to="/history">History</Link>
      </div>
    </div>
  );
}
