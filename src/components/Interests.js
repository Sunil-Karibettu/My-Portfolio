import React from "react";
import Chess from "./images/chess.png";
import Badminton from "./images/badminton.png";
import Cricket from "./images/cricket.png";
import Cycle from "./images/cycling.png";
import Music from "./images/music.png";
import TT from "./images/tt.png";
import "./interests.css";

const Interests = () => {
  return (
    <main id="main">
      <section id="interests" class="interests">
        <div class="container">
          <div class="section-title">
            <h2>Interests</h2>
          </div>

          <div class="row">
            <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
              <div class="icon">
                <img src={Cricket} />
              </div>
              <h4 class="title">
                <p>Cricket</p>
              </h4>
            </div>
            <div
              class="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="icon">
                <img src={TT} />
              </div>
              <h4 class="title">
                <p>Table Tennis</p>
              </h4>
            </div>
            <div
              class="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="icon">
                <img src={Music} />
              </div>
              <h4 class="title">
                <p>Music</p>
              </h4>
            </div>
            <div
              class="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="icon">
                <img src={Cycle} />
              </div>
              <h4 class="title">
                <p>Cycling</p>
              </h4>
            </div>
            <div
              class="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div class="icon">
                <img src={Badminton} />
              </div>
              <h4 class="title">
                <p>Badminton</p>
              </h4>
            </div>
            <div
              class="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div class="icon">
                <img src={Chess} />
              </div>
              <h4 class="title">
                <p>Chess</p>
              </h4>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Interests;
