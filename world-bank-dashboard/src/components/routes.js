import { Routes, Route, Link } from "react-router-dom";
import loginUser from "./components/login";
import registerUser from "./components/register";
import mainPageHeader from "./components/mainPageHeader";

function routes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<loginUser />} />
        <Route path="register" element={<registerUser />} />
        <Route path="history" element={<History />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default routes;
