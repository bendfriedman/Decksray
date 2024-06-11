import "./MainNavBar.scss";

export const MainNavBar = () => {
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
            <li>
              <i className="fa-solid fa-arrow-up" />
            </li>
          </a>
        </ul>
        <i id="main-nav-hamburger-menu" className="fa-solid fa-bars" />
      </div>
    </nav>
  );
};
