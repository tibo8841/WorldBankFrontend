import { Routes, Route, Link } from "react-router-dom";
import LoginUser from "./LoginUser";
import RegisterUser from "./RegisterUser";
import Search from "./Search";
import Home from "./Home";
import History from "./History";
import Results from "./Results";

export default function WebRoutes(props) {
  return (
    <div>
      <Routes>
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
