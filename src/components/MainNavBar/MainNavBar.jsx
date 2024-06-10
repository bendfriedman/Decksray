import "./MainNavBar.scss";

export const MainNavBar = () => {
  return (
    <div id="main-nav-bar">
      <div id="main-nav-logo-container">
        <img src="../../src/assets/Logo1.png" alt="Decksray-Logo" />
      </div>
      <div id="main-nav-links-container">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
        <div id="main-nav-cta-container">
          <button>CTA</button>
        </div>
      </div>
    </div>
  );
};
