import { Routes, Route, Link } from "react-router-dom";
import LoginUser from "./LoginUser";
import RegisterUser from "./RegisterUser";
import Search from "./Search";
import Home from "./Home";
import History from "./History";
import Results from "./Results";

export default function WebRoutes() {
  return (
    <div>
      <Routes>
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
