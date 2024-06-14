import "./AboutUs.scss";

export const AboutUs = () => {
  return (
    <section id="about-us">
      <h2>AboutUs</h2>
      <div id="about-us-profile-container">
        <div className="about-us-profile-card">
          <div className="name-box">
            <h4>Ben Friedman</h4>
            <div className="mana-cost">
              <img src="/assets/mana-symbols/2.png" alt="2 mana symbol" />
              <img src="/assets/mana-symbols/B.png" alt="black mana symbol" />
              <img src="/assets/mana-symbols/B.png" alt="black mana symbol" />
            </div>
          </div>
          <div className="art-box">
            <img src="/assets/ppl/Ben.jpg" alt="ben friedman" />
          </div>
          <div className="type-box">
            <h5>Creature - Human Developer</h5>
            <div className="set-symbol">
              <img src="/assets/favicon/Watermark Small.png" alt="" />
            </div>
          </div>
          <div className="text-box">
            <div className="text-box-inner">
              <p>
                I'm a passionate Magic: The Gathering player and collector,
                always ready for a good EDH game. After years of experience in
                finance, I've recently chosen a new career path. As a web
                developer I bring my love for coding to life. Whether it's
                casting spells or writing code, I'm always up for a new
                challenge!
              </p>
            </div>
          </div>
        </div>
        <div className="about-us-profile-card">
          <div className="name-box">
            <h4>David Hebestreit</h4>
            <div className="mana-cost">
              <img src="/assets/mana-symbols/R.png" alt="red mana symbol" />
              <img src="/assets/mana-symbols/R.png" alt="red mana symbol" />
              <img src="/assets/mana-symbols/R.png" alt="red mana symbol" />
              <img src="/assets/mana-symbols/R.png" alt="red mana symbol" />
              <img src="/assets/mana-symbols/R.png" alt="red mana symbol" />
            </div>
          </div>
          <div className="art-box">
            <img src="/assets/ppl/David.jpg" alt="david hebestreit" />
          </div>
          <div className="type-box">
            <h5>Creature - Human Tinkerer</h5>
            <div className="set-symbol">
              <img src="/assets/favicon/Watermark Small.png" alt="" />
            </div>
          </div>
          <div className="text-box">
            <div className="text-box-inner">
              <p>
                As a die-hard (red!) Magic: The Gathering fan I love diving into
                the world of cards. With years of experience in metalworking and
                construction, I can handle a hammer and wrench. Nowadays, I'm
                having a blast as a mechatronics engineer, using my love for
                tech to create some cool stuff!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
