import { useState } from "react";
import MainPageHeader from "./components/MainPageHeader";
import WebRoutes from "./components/WebRoutes";

function App() {
  const [login, setLogin] = useState("");
  async function userLoggedIn(check) {
    await setLogin(check);
    console.log(login);
  }
  return (
    <div>
      {<MainPageHeader />}
      {<WebRoutes userLoggedIn={userLoggedIn} login={login} />}
    </div>
  );
}

export default App;
