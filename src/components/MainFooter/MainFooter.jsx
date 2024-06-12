import "./MainFooter.scss";

export const MainFooter = () => {
  return (
    <div id="main-footer">
      <ul id="main-footer-links">
        <a href="#">
          <li>Nexdecks</li>
        </a>
        <a href="#">
          <li>Privacy Policy</li>
        </a>
        <a href="#">
          <li>Support Us</li>
        </a>
      </ul>
      <div id="main-footer-socials">
        <a href="#">
          <i className="fa-brands fa-discord" />
        </a>
        <a href="#">
          <i className="fa-brands fa-facebook" />
        </a>
        <a href="#">
          <i className="fa-brands fa-twitter" />
        </a>
        <a href="#">
          <i className="fa-brands fa-twitch" />
        </a>
        <a href="#">
          <i className="fa-brands fa-youtube" />
        </a>
        <a href="#">
          <i className="fa-brands fa-patreon" />
        </a>
        <a href="#">
          <i className="fa-brands fa-kickstarter" />
        </a>
      </div>
      <p id="main-footer-disclaimer">
        Magic: The Gathering is a Trademark of Wizards of the Coast, Inc. and
        Hasbro, Inc. We are unaffiliated. The literal and graphical information
        presented on this site about Magic: The Gathering, including card
        images, the mana symbols, and Oracle text, is copyright Wizards of the
        Coast, LLC, a subsidiary of Hasbro, Inc. Nexdecks or Decksray are not
        produced by, endorsed by, supported by, or affiliated with Wizards of
        the Coast.
      </p>
    </div>
  );
};
