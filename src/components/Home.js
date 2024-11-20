import React, { useEffect } from "react";
import Typed from "typed.js";
import "./home.css";
import About from "./About";
import Skills from "./Skills";
import Resume from "./Resume";
import Interests from "./Interests";
import Header from "./Header";
import Contact from "./Contact";
// import Sidebar from "./Sidebar";

const Home = () => {
  useEffect(() => {
    var typed = new Typed("#element", {
      strings: ["Front-End|React.js developer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      {/* <Sidebar/> */}
      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="hero-container" data-aos="fade-in">
          <h1>Sunil Kumar D R</h1>
          <p>
            {" "}
            I'm <span id="element"></span>
          </p>
        </div>
      </section>
      <Header />
      <About />
      {/* <Skills /> */}
      <Resume />
      <Interests />
      <Contact />
    </>
  );
};

export default Home;
