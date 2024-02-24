import React, { useState } from "react";
import "./About.css";

const About = () => {
  const [zoomLevel, setZoomLevel] = useState(15); // Initial zoom level

  const handleZoomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newZoom = parseInt(event.target.value);
    if (newZoom >= 1 && newZoom <= 21) {
      setZoomLevel(newZoom);
    }
  };

  return (
    <div className="section about-section">
      <p className="about-info">
        Retrouvez-nous sur vos plateformes préférées :
      </p>
      <div className="about-links">
      <a target="_blank" rel="noopener noreferrer" href="https://www.just-eat.fr/menu/sabaidi">
          <img src="justeat.png" alt="Just Eat" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://deliveroo.fr/fr/menu/Paris/9eme-opera/sabaidi-paris-9/">
          <img src="deliveroo.png" alt="Deliveroo" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.ubereats.com/fr/store/sabaidi-paris-9/xwxmB55cWqaAKPh7RlwnTg?diningMode=DELIVERY&sc=SEARCH_SUGGESTION">
          <img src="uber.png" alt="Uber Eats" />
        </a>      </div>
      <div className="map-container">
      <h2 className="about-title">Retrouvez-nous sur la carte</h2>
        <iframe
          className="google-maps"
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10494.532785761863!2d2.3312477713351356!3d48.88426869136762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fbcab3be17d%3A0x233ab7aa5f8e2743!2sSabaidi%20sushi%20%26%20thai%20paris!5e0!3m2!1sen!2sfr!4v1708798206376!5m2!1sen!2sfr&data-streetview=true&data-style=border:0&data-zoom=${zoomLevel}&data-allowfullscreen="" data-loading="lazy" data-referrerpolicy="no-referrer-when-downgrade`}
        />
      </div>
      {/* <div className="zoom-control">
        <label htmlFor="zoom">Zoom:</label>
        <input
          type="range"
          min="1"
          max="21"
          value={zoomLevel}
          id="zoom"
          onChange={handleZoomChange}
        />
      </div> */}
    </div>
  );
};

export default About;
