import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

import Footer from "./components/Footer/Footer";

import Topmenu from "./components/Navbar/Topmenu";
import GetInTouch from "./components/Contact_Us/GetInTouch";
import About from "./pages/About_Us/About";

import Focus from "./pages/Focus/Focus";
import Service from "./pages/Service/Service";
import Gallery from "./pages/Gallery/Gallery";
import Background from "./pages/About_Us/Background";
import Interest from "./components/Contact_Us/interest";

const App = () => {
  return (
    <>
      <div className="app">
        {/*
        <div className="heading_text_container">
          <div className="scrolling-text">
            <strong>
              {" "}
              December bonaza! offers are valid from October 1st to 31st
              December, 2024{" "}
            </strong>
          </div>
        </div>
     */}

        <Topmenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Contact"
            element={
              <>
                <Interest />
                <GetInTouch />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Background />
                <About />
              </>
            }
          />
          <Route path="/gallery" element={<Gallery />} />
          <Route
            path="/service"
            element={
              <>
                <Focus />
                <Service />
              </>
            }
          />
        </Routes>

        <Footer />
      </div>
    </>
  );
};

export default App;
