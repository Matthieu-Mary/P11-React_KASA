import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles/index.scss";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
          <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
