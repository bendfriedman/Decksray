import "./MainBanner.scss";

export const MainBanner = () => {
  return (
    <section id="main-banner">
      <div id="main-banner-text">
        <div id="main-banner-text-1">
          <h1>Scan your Trading Cards </h1>
          <div>
            <h1>with</h1>
            <img
              src="../../src/assets/White on Transparent_edited.png"
              alt=""
            />
            <h1>!</h1>
          </div>
        </div>
        <div id="main-banner-text-2">
          <h3>The Professional Trading Card Scanner For Your Home.</h3>
        </div>
        <div id="main-banner-text-btns">
          {/* <button>CTA</button> */}
          <button>
            <a href="#how-it-works">More Info</a>
          </button>
        </div>
      </div>
      <div id="main-banner-img">
        <img src="../../src/assets/Decksray_(35).png" alt="card scaner" />
      </div>
    </section>
  );
};
