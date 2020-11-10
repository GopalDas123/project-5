import React, { useEffect } from "react";
import "./App.css";
import Navbarr from "./Components/Navbar";
import gif from "./Components/Business Plan.gif";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="App">
      <Navbarr style={{ width: "100%" }} />
      <div data-aos="fade-right" className="cont">
        <p  className="tagLine">
          Winsure Assures
          <br />
          You The Quality
          <p className="tagLine2">
            We Have The Great Developers Around The Globe
          </p>
          <button data-aos="zoom-in" className="start">Get Started</button>
        </p>
        <img src={gif}  data-aos="zoom-in" className="gif" alt="" />
      </div>
    </div>
  );
}

export default App;
