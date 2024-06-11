import "./HowItWorks.scss";

export const HowItWorks = () => {
  return (
    <section id="how-it-works">
      <h2>how it works:</h2>
      <div id="how-it-works-container">
        <div id="how-it-works-col-1">
          <img
            className="how-it-works-icon"
            src="../../src/assets/SCAN.png"
            alt="scan icon"
          />
          <img
            className="how-it-works-img"
            src="../../src/assets/Decksray (10) (1).png"
            alt="scan img"
          />
          <p>Scan your Cards.</p>
        </div>

        <div id="how-it-works-col-2">
          <img
            className="how-it-works-icon"
            src="../../src/assets/FILE.png"
            alt="file icon"
          />
          <img
            className="how-it-works-img"
            src="../../src/assets/CSV_Example2.png"
            alt="file csv img"
          />
          <p>Create your CSV.</p>
        </div>

        <div id="how-it-works-col-3">
          <img
            className="how-it-works-icon"
            src="../../src/assets/PLAN.png"
            alt="plan icon"
          />
          <img
            className="how-it-works-img"
            src="../../src/assets/manage_collection.png"
            alt="manage collection img"
          />
          <p>Manage your collection.</p>
        </div>
      </div>
    </section>
  );
};
