import "./HowItWorks.scss";

export const HowItWorks = () => {
  return (
    <section id="how-it-works">
      <h2>how it works:</h2>
      <div id="how-it-works-container">
        <div id="how-it-works-col-1">
          <img
            className="how-it-works-icon"
            src="/assets/SCAN.png"
            alt="scan icon"
            loading="lazy"
          />
          <img
            className="how-it-works-img"
            src="/assets/Decksray (10) (1).png"
            alt="scan img"
            loading="lazy"
          />
          <p>Scan your Cards.</p>
        </div>

        <div id="how-it-works-col-2">
          <img
            className="how-it-works-icon"
            src="/assets/FILE.png"
            alt="file icon"
            loading="lazy"
          />
          <img
            className="how-it-works-img"
            src="/assets/CSV_Example2.png"
            alt="file csv img"
            loading="lazy"
          />
          <p>Create your CSV.</p>
        </div>

        <div id="how-it-works-col-3">
          <img
            className="how-it-works-icon"
            src="/assets/PLAN.png"
            alt="plan icon"
            loading="lazy"
          />
          <img
            className="how-it-works-img"
            src="/assets/manage_collection.png"
            alt="manage collection img"
            loading="lazy"
          />
          <p>Manage your collection.</p>
        </div>
      </div>
    </section>
  );
};
