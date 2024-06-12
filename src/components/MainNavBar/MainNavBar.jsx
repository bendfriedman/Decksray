import "./MainNavBar.scss";
import { useEffect } from "react";

export const MainNavBar = () => {
  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      let scrollPos = window.scrollY;
      if (scrollPos === 0) {
        document.getElementById("main-nav-links").classList.remove("popped");
        document.getElementById("main-nav-arrow-up").style.opacity = "0";
        document.getElementById("main-nav-arrow-up-container").style.cursor =
          "default";
      } else {
        document.getElementById("main-nav-links").classList.add("popped");
        document.getElementById("main-nav-arrow-up").style.opacity = "1";
        document.getElementById("main-nav-arrow-up-container").style.cursor =
          "pointer";
      }
    });
  }, []);

  return (
    <nav id="main-nav-bar">
      <div id="main-nav-logo-container">
        <a href="#main-nav-bar">
          <img src="../../src/assets/Logo1.png" alt="Decksray-Logo" />
        </a>
      </div>
      <div id="main-nav-links-container">
        <ul id="main-nav-links">
          <a href="#how-it-works">
            <li>How It Works</li>
          </a>
          <a href="#in-action-section">
            <li>In Action</li>
          </a>
          <a href="#about-us-section">
            <li>About Us</li>
          </a>
          <a href="#contact-us-section">
            <li>Contact</li>
          </a>
          <a href="#main-nav-bar">
            <li id="main-nav-arrow-up-container">
              <i id="main-nav-arrow-up" className="fa-solid fa-arrow-up" />
            </li>
          </a>
        </ul>
        <i id="main-nav-hamburger-menu" className="fa-solid fa-bars" />
      </div>
    </nav>
  );
};
