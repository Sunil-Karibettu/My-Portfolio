import React from "react";
import aboutImg from "./images/profile.JPG";
import "./about.css";

const About = () => {
  return (
    <main id="main">
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About</h2>
            <p>
            I'm Sunil Kumar D R, a React.js Developer with nearly 4 years of experience in building dynamic, user-friendly web applications. Skilled in React, Redux Toolkit, and modern web technologies like CSS, Bootstrap, and HTML5, I focus on delivering scalable and efficient solutions. I'm passionate about creating intuitive, responsive user interfaces and always eager to explore new technologies and challenges.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img src={aboutImg} className="img-fluid"/>
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Front-End & React.js Developer.</h3>
              <p className="fst-italic">
              Front-End & React.js Developer with nearly 4 years of experience in building dynamic, user-friendly web applications.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Birthday:</strong> <span>23 Jan 1996</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Phone:</strong> <span>+91-8904349137</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>City:</strong> <span>Bengalore</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Age:</strong>
                      <span>27</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Degree:</strong>
                      <span>Bachelor of Engineering</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Email:</strong>
                      <span>mailtosunilraj23@gmail.com</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <p>
                Officiis eligendi itaque labore et dolorum mollitia officiis
                optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                accusantium dolor incidunt officia tempore. Et eius omnis.
                Cupiditate ut dicta maxime officiis quidem quia. Sed et
                consectetur qui quia repellendus itaque neque. Aliquid amet
                quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis
                culpa magni laudantium dolores.
              </p> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
