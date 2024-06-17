import "./HowItWorks.scss";

export const HowItWorks = () => {
  return (
    <section id="how-it-works">
      <h2>How it Works</h2>
      <div id="how-it-works-container">
        <div id="how-it-works-col-1">
          <img
            className="how-it-works-icon"
            src="/assets/info-icons/SCAN.png"
            alt="scan icon"
            loading="lazy"
          />
          <img
            className="how-it-works-img"
            src="/assets/Decksray (10) (1).png"
            alt="scan img"
            loading="lazy"
          />
          <h3>High-Quality Scanning:</h3>
          <p>
            Ensures precise and detailed scans, preserving unique card
            characteristics
          </p>
        </div>

        <div id="how-it-works-col-2">
          <img
            className="how-it-works-icon"
            src="/assets/info-icons/FILE.png"
            alt="file icon"
            loading="lazy"
          />
          <img
            className="how-it-works-img"
            src="/assets/CSV_Example2.png"
            alt="file csv img"
            loading="lazy"
          />
          <h3>Effortless Cataloguing:</h3>
          <p>
            Generates a CSV file with scanned card data, streamlining
            organization.
          </p>
        </div>

        <div id="how-it-works-col-3">
          <img
            className="how-it-works-icon"
            src="/assets/info-icons/PLAN.png"
            alt="plan icon"
            loading="lazy"
          />
          <img
            className="how-it-works-img"
            src="/assets/manage_collection.png"
            alt="manage collection img"
            loading="lazy"
          />
          <h3>Manage your collection.</h3>
          <p>
            Upload you CSV to any popular TCG platform to add to your collection
            and start building decks.
          </p>
        </div>
      </div>
    </section>
  );
};
