import NavBar from "./components/Nav";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Desserts from "./pages/Desserts";
import MainDishes from "./pages/MainDishes";
import Smoothies from "./pages/Smoothies";
import Footer from "./components/Footer";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar></NavBar>
        <div className="mainC">
          <Routes>
            <Route path="" element={<Home />}></Route>
            <Route path="ContactUs" element={<ContactUs />}></Route>
            <Route path="MainDishes" element={<MainDishes />}></Route>
            <Route path="Desserts" element={<Desserts />}></Route>
            <Route path="Smoothies" element={<Smoothies />}></Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
