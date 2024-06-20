import "./MainFooter.scss";

export const MainFooter = () => {
  return (
    <div id="main-footer">
      <ul id="main-footer-links">
        <a
          href="https://www.privacypolicytemplate.net/live.php?token=FmJgx99xC5IkSfj6NwODp25yXEk9q1P5"
          target="_blank"
        >
          <li>Privacy Policy</li>
        </a>
        {/* <a href="#contact-us">
          <li>Support Us</li>
        </a> */}
        {/* <a href="#contact-us">
          <li>Imprint</li>
        </a> */}
        <a href="#contact-us">
          <li>Contact</li>
        </a>
      </ul>
      <div id="main-footer-socials">
        <a href="https://youtube.com/@Decksray" target="_blank">
          <i className="fa-brands fa-youtube" />
        </a>
        <a href="https://x.com/decksray" target="_blank">
          <i className="fa-brands fa-twitter" />
        </a>

        {/* coming soon!!!*/}

        {/* <a href="#contact-us">
          <i className="fa-brands fa-kickstarter" />
        </a> */}

        {/* coming in the near future */}

        {/* <a href="#contact-us">
          <i className="fa-brands fa-patreon" />
        </a>
        <a href="#contact-us">
          <i className="fa-brands fa-instagram" />
        </a>
        <a href="#contact-us">
          <i className="fa-brands fa-facebook" />
        </a>
        <a href="#contact-us">
          <i className="fa-brands fa-discord" />
        </a>
        <a href="#contact-us">
          <i className="fa-brands fa-tiktok" />
        </a>
        <a href="#contact-us">
          <i className="fa-brands fa-twitch" />
        </a> */}
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
