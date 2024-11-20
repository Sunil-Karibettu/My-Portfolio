import React, { useState } from "react";
import "./sidebar.css";
// import "@fortawesome/fontawesome-free/css/all.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div>
          <img
            src="https://picsum.photos/id/237/200/300"
            class="rounded-image"
            alt="Your Image"
          />
        </div>
        <div class="logo-details">
          <i class="bx bxl-c-plus-plus icon"></i>
          <div class="logo_name">Portfolio</div>
          {/* <i class="bx bx-menu" id="btn"></i> */}
          <button id="btn" onClick={toggleSidebar}>
            {/* Your button content */}
            {isSidebarOpen ? (
              <i className="bx bx-menu-alt-right"></i>
            ) : (
              <i className="bx bx-menu"></i>
            )}
          </button>
        </div>
        <ul class="nav-list">
          <li>
            <i class="bx bx-search" onClick={toggleSidebar}></i>
            <input type="text" placeholder="Search..." />
            <span class="tooltip">Search</span>
          </li>
          <li>
            <a href="#">
              <i class="bx bx-grid-alt"></i>
              <span class="links_name">Home</span>
            </a>
            <span class="tooltip">Home</span>
          </li>
          <li>
            <a href="/home">
              <i class="bx bx-user"></i>
              <span class="links_name">About</span>
            </a>
            <span class="tooltip">About</span>
          </li>
          <li>
            <a href="#">
              <i class="bx bx-chat"></i>
              <span class="links_name">Skills</span>
            </a>
            <span class="tooltip">Skills</span>
          </li>
          <li>
            <a href="#">
              <i class="bx bx-pie-chart-alt-2"></i>
              <span class="links_name">Education</span>
            </a>
            <span class="tooltip">Education</span>
          </li>
          <li>
            <a href="#">
              <i class="bx bx-folder"></i>
              <span class="links_name">Experience</span>
            </a>
            <span class="tooltip">Experience</span>
          </li>
          <li>
            <a href="#">
              <i class="bx bx-cart-alt"></i>
              <span class="links_name">Contact</span>
            </a>
            <span class="tooltip">Contact</span>
          </li>
          <li class="profile">
            <div class="profile-details">
              <img
                src="https://drive.google.com/uc?export=view&id=1ETZYgPpWbbBtpJnhi42_IR3vOwSOpR4z"
                alt="profileImg"
              />
              <div class="name_job">
                <div class="name">Stella Army</div>
                <div class="job">Web designer</div>
              </div>
            </div>
            <i class="bx bx-log-out" id="log_out"></i>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
