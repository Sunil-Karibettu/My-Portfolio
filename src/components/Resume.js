import React from "react";
import "./resume.css";

const Resume = () => {
  const skills = [
    "React.js",
    "JavaScript(ES6)",
    "Redux Toolkit",
    "CSS3",
    "HTML5",
    "Node.js",
    "MongoDB",
    "Express.js",
  ];

  const languages = ["Kannada", "English", "Telugu", "Hindi"];

  return (
    <main id="main">
      <section id="resume" class="resume">
        <div class="container">
          <div class="section-title">
            <h2>Resume</h2>
            <p>
            I'm Sunil Kumar D R, a React.js Developer with nearly 4 years of experience in building dynamic, user-friendly web applications. Skilled in React, Redux Toolkit, and modern web technologies like CSS, Bootstrap, and HTML5, I focus on delivering scalable and efficient solutions. I'm passionate about creating intuitive, responsive user interfaces and always eager to explore new technologies and challenges.
            </p>
          </div>

          <div class="row">
            <div class="col-lg-6" data-aos="fade-up">
              <h3 class="resume-title">Sumary</h3>
              <div class="resume-item pb-0">
                <h4>Sunil Kumar D R</h4>
                <p>
                  <em>
                    Front-End & React.js Developer with nearly 4 years of
                    experience in designing and building web-based tools,
                    proficient in frameworks like ReactJS, Redux Toolkit, and
                    skilled in CSS, Bootstrap, and HTML5.
                  </em>
                </p>
                <ul>
                  <li>+91-8904349137</li>
                  <li>mailtosunilraj23@gmail.com</li>
                </ul>
              </div>

              <h3 class="resume-title">Education</h3>
              <div class="resume-item">
                <h4>Bachelor of Engineering in Computer Science</h4>
                <h5>2016 – 2019</h5>
                <p>
                  <em>Nitte Meenakshi Institute Of Technology </em>
                </p>
              </div>
              <h3 class="resume-title">Skills</h3>
              <div class="resume-item">
                <p>
                  <em>
                    {skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </em>
                </p>
              </div>
              <h3 class="resume-title">Languages</h3>
              <div class="resume-item">
                <p>
                  <em>
                    {languages.map((lang, index) => (
                      <li key={index}>{lang}</li>
                    ))}
                  </em>
                </p>
              </div>
              <div class="resume-item">
                <h4>Personal Project</h4>
                <h5>Secure Authentication System</h5>
                <ul>
                  <li>
                    Developed a secure authentication system with complete
                    sign-up, login, password reset, and forgot password
                    functionalities.
                  </li>
                  <li>
                    Implemented additional features including a calculator,
                    search filter, and drag-and-drop interface, enhancing the
                    overall user experience.
                  </li>
                  <li>
                    Technologies: React.js, Redux Toolkit, Yup, React Bootstrap,
                    Node.js, APIs, MongoDB, CS
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 class="resume-title">Professional Experience</h3>
              <div class="resume-item">
                <h4>Software Engineer</h4>
                <h5>Karibettu Private Limited | November 2022 - Present</h5>
                <ul>
                  <li>
                    Created new responsive website catering to various devices
                    (Desktop, Laptop, Tablets, and Mobile) from scratch using
                    ReactJS, Redux Toolkit, HTML, CSS, SASS, Bootstrap and
                    JavaScript
                  </li>
                  <li>
                    Worked on dynamic forms using Formik and Yup for validation.
                  </li>
                  <li>
                    Enhanced UI designs using React Bootstrap, custom
                    components, fontawsome icons and Feather icons.
                  </li>
                  <li>Managed application state using Redux toolkit.</li>
                  <li>
                    Implemented Single Page Application functionality with
                    react-router
                  </li>
                  <li>
                    Improved customer access by adding {5} new features
                    including data filters and pricing models to the website.
                  </li>
                  <li>
                    Collaborated with backend teams for API integration to fetch
                    and manage datas using Axios and Redux toolkit.
                  </li>
                </ul>
              </div>
              <div class="resume-item">
                <h4>Front End Web Developer Intern</h4>
                <h5>
                  Karibettu Private Limited | January 2022 - November 2022
                </h5>
                <ul>
                  <li>
                    Gained hands-on experience within a {11} months React
                    project, contributing to responsive web applications as a
                    trainee.
                  </li>
                  <li>
                    Optimized web performance using {5} React libraries and
                    tools, enhancing user interface design.
                  </li>
                </ul>
              </div>
              <div class="resume-item">
                <h4>ASP.NET Developer </h4>
                <h5>
                  Karibettu Private Limited | February 2021 - December 2021
                </h5>
                <ul>
                  <li>
                    Assisted in the development and maintenance of web
                    applications using ASP.NET. ∙ Gained hands-on experience in
                    coding, debugging, and troubleshooting application issues.
                  </li>
                  <li>
                    Collaborated with senior developers on {2} projects,
                    improving technical skills and understanding of project
                    requirements.
                  </li>
                  <li>
                    Migrated a legacy ASP.NET MVC application to ASP.NET Core to
                    leverage modern framework features, improve performance, and
                    enhance maintainability.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Resume;
