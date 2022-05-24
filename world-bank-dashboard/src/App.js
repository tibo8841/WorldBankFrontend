import MainPageHeader from "./components/MainPageHeader";
import routes from "./components/routes";

function App() {
  return (
    <div>
      {<MainPageHeader />}
      {<routes />}
    </div>
  );
}

export default App;
