import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

import '../styles/app.scss';
function App() {
  return (
      <div className="container-main">
        <Header />
        <Outlet />
        <Footer />
      </div>
  );
}

export default App;
