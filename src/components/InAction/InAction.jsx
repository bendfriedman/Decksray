import "./InAction.scss";

export const InAction = () => {
  return (
    <section id="in-action">
      <div id="in-action-title">
        <h2>In Action</h2>
        <h5>(Prototype 07)</h5>
      </div>
      <div id="in-action-gallery">
        <img
          src="/assets/Decksray_scanner_2.jpg"
          alt="decksray card scanner machine"
          loading="lazy"
        />
        {/* <img
          src="/assets/Decksray_scanner_1.jpg"
          alt="decksray card scanner machine"
          loading="lazy"
        /> */}

        <iframe
          src="https://www.youtube.com/embed/0bOb-8b5ohQ?si=n_-NDD2_PTPXQdlf&controls=1&rel=0"
          title="YouTube video player - Decksray in action"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media;fullscreen; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          loading="lazy"
        />

        <img
          src="/assets/Decksray_scanner_3.jpg"
          alt="decksray card scanner machine"
          loading="lazy"
        />
      </div>
    </section>
  );
};
