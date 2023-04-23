import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles/index.scss";
import { Outlet, HashRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <HashRouter basename="/">
          <Outlet />
        </HashRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;