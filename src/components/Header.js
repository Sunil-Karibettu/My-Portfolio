import React from "react";
import HeaderImg from "./images/profile.JPG";
import "./header.css";

const Header = () => {
  return (
    <main id="main">
      <header id="header">
        <div class="d-flex flex-column">
          <div class="profile">
            <img src={HeaderImg} alt="" class="img-fluid rounded-circle" />
            <h1 class="text-light">
              <a href="/">Sunil Raj</a>
            </h1>
            <div class="social-links mt-3 text-center">
              <a
                href="https://twitter.com/supersunil11038"
                target="_blank"
                class="twitter"
              >
                <i class="bi bi-twitter-x"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100005365929826&mibextid=ZbWKwL"
                target="_blank"
                class="facebook"
              >
                <i class="bi bi-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/mr_sunil_raj_dr?igsh=MWlmNXkzMGQzajdnZA=="
                target="_blank"
                class="instagram"
              >
                <i class="bi bi-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/sunil-kumar-d-r-a30221171"
                target="_blank"
                class="linkedin"
              >
                <i class="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <nav id="navbar" class="nav-menu navbar">
            <ul>
              <li>
                <a href="#hero" class="nav-link scrollto active">
                  <i class="bx bx-home"></i> <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" class="nav-link scrollto">
                  <i class="bx bx-user"></i> <span>About</span>
                </a>
              </li>
              <li>
                <a href="#resume" class="nav-link scrollto">
                  <i class="bx bx-file-blank"></i> <span>Resume</span>
                </a>
              </li>
              <li>
                <a href="#interests" class="nav-link scrollto">
                  <i class="bx bx-server"></i> <span>Interests</span>
                </a>
              </li>
              <li>
                <a href="#contact" class="nav-link scrollto">
                  <i class="bx bx-envelope"></i> <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </main>
  );
};

export default Header;
