import React from "react";
import "./About.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const VideoCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <div className="video-promo">
      <Slider {...settings}>
        <div>
          <video controls width="100%">
            <source src="Video-prom1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <video controls width="100%">
            <source src="Video-prom2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Slider>
    </div>
  );
};

const About = () => {
  const styler = { backgroundColor: "white" };
  const styler2 = { backgroundColor: "red" };
  const styler3 = { backgroundColor: "yellow" };
  const styler4 = { backgroundColor: "purple" };

  return (
    <div className="section about-section">
      <div className="top-section" style={styler}>
        <div className="text-about" style={styler2}>
          <div className="info-container">
            <div className="resto-img">
            <p><strong>Téléphone :</strong> 0140360932</p>
            <p><strong>Adresse :</strong> 9 Blvd Marguerite de Rochechouart, 75009 Paris</p>
            <p><strong>Horaires d'ouverture :</strong> 11:30 – 15:30 / 19:00 – 1:00</p>
            </div>
          </div>
          <div className="delivery-links">
            <div className="delivery-partners">
              <h2 className="about-info">
                Dégustez vos plats préférés depuis chez vous :
              </h2>
              <div className="about-links">
                <a target="_blank" rel="noopener noreferrer" href="https://www.just-eat.fr/menu/sabaidi">
                  <img src="justeat.png" alt="Just Eat" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://deliveroo.fr/fr/menu/Paris/9eme-opera/sabaidi-paris-9/">
                  <img src="deliveroo.png" alt="Deliveroo" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.ubereats.com/fr/store/sabaidi-paris-9/xwxmB55cWqaAKPh7RlwnTg?diningMode=DELIVERY&sc=SEARCH_SUGGESTION">
                  <img src="uber.png" alt="Uber Eats" />
                </a>
              </div>
            </div>
            <div className="home-delivery">
              <h2>Ou bien passez par nos propres livreurs, et économisez !</h2>
              <p>Nous livrons partout dans les 9, 10 et 18ème arrondissements</p>
              <p>Montant minimum de <strong>30€</strong></p>
            </div>
          </div>
          <div className="map-container">
            <img src="location.png" alt="A deux pas de chez vous" className="about-title" />
            <div className="map-item">
              <iframe
                className="google-maps"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10494.532785761863!2d2.3312477713351356!3d48.88426869136762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fbcab3be17d%3A0x233ab7aa5f8e2743!2sSabaidi%20sushi%20%26%20thai%20paris!5e0!3m2!1sen!2sfr!4v1708798206376!5m2!1sen!2sfr&data-streetview=true&data-style=border:0&data-allowfullscreen="" data-loading="lazy" data-referrerpolicy="no-referrer-when-downgrade`}
              />
            </div>
          </div>
        </div>
        <div className="video-promo" style={styler3}>
          <VideoCarousel />
        </div>
      </div>
      <div className="google-reviews" style={styler4}>
        <p>avis google</p>
      </div>
    </div>
  );
};

export default About;
