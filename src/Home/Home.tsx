import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import { BestSellerItem, MenuItemProps } from '../interfaces';
import BestSellers from '../BestSellers/BestSellers';
import About from '../About/About';
import { Helmet } from 'react-helmet';

const submenu: MenuItemProps[] = [
  {
    imageUrl: 'starter.png',
    linkTo: '/Starters',
    title: 'Entrées',
    description: 'Vous trouverez ici nos entrées chaudes et froides, ainsi que nos soupes et salades',
  },
  {
    imageUrl: 'jap.png',
    linkTo: '/Jap',
    title: 'Jap\'',
    description: 'Découvrez nos sushis, makis, sashimis et autres spécialités. Signatures et compositions originales vous attendent',
  },
  {
    imageUrl: 'thai.png',
    linkTo: '/Thai',
    title: 'Thaï',
    description: 'Vos plat thailandais préférés: Pad Thai, Loc lac, Tigre qui pleure et bien d\'autres',
  },
  {
    imageUrl: 'dessert.png',
    linkTo: '/Desserts',
    title: 'Desserts',
    description: 'Boissons, cocktails et desserts pour agrémenter vos repas',
  },
];

const BestSellersItems: BestSellerItem[] = [
  {
    title: "Poké poulet",
    description: "Tendres morceaux de poulet, accompagnés de leur sauce dynamite.",
    imageURL: "test.png",
    price: "7.50",
  },
  {
    title: "Crevette dynamite",
    description: "Nouilles sautées au wok avec des crevettes, du tofu, des arachides et de la lime.",
    imageURL: "test.png",
    price: "13.90",
  },
  {
    title: "Mi prat",
    description: "Soupe épicée aux crevettes avec des champignons, de la citronnelle et des épices.",
    imageURL: "test.png",
    price: "12.90",
  },
  {
    imageURL: "test.png",
    title: "Plateau Sabaidi love",
    description: "Sushi au saumon et à l'avocat.",
    price: "10.90",
  },
  {
    imageURL: "test.png",
    title: "Saumon mango ciboulette spicy",
    description: "Sushi au saumon et à l'avocat.",
    price: "10.90",
  },
];

export const Home: React.FC = () => {

  return (
    <div className="main-container">
      <Helmet>
        <title>Accueil - Sabaidi</title>
      </Helmet>

      <div className="section home">
        <p className='welcome'><span className='text'>SABAIDI PARIS 9 - Jap & Thaï</span></p>
        <div className="deco">
          <img src="deco.svg" className='deco-img' />
        </div>
        {/* <div className="phrase-container">
          <h1 className='impact-phrase'>Voyagez vers l'Asie à chaque bouchée<br/>Tout ça depuis Barbès</h1>
        </div> */}
        <BestSellers items={BestSellersItems} />

        <div className='MenuContainer'>
          <div className='menu-list'>{submenu.map((item, index) => (
            <MenuItem
              key={index}
              imageUrl={item.imageUrl}
              linkTo={item.linkTo}
              title={item.title}
              description={item.description}
            />
          ))}
          </div>
          <div className="sub-menu">
            <div className="delivery-section">
              <p className='delivery'>⚠️ La livraison sera bientôt DISPONIBLE ! 💯🛵<br/>D'ici là, retrouvez-nous sur place ou chez nos partenaires :</p>
              <div className="partners">
                <span className="partner">
                  <a
                    href='https://deliveroo.fr/fr/menu/paris/9eme-opera/sabaidi-paris-9'
                  >
                    <img src="deliveroo.png" alt="deliveroo" />
                  </a>
                </span>
                <span className="partner">
                  <a
                    href='https://www.ubereats.com/store/sabaidi-paris-9/xwxmB55cWqaAKPh7RlwnTg?diningMode=DELIVERY'
                  >
                    <img src="ubereats.png" alt="ubereats" />
                  </a>
                </span>
                <span className="partner last">
                  <a
                    href='https://www.just-eat.fr/menu/sab-thai'
                  >
                    <img src="justeat.png" alt="justeat" />
                  </a>
                </span>
              </div>
            </div>
            <div className="menu-pdf">
              Voir notre carte <a target='blank' href='ASIAN PLACE ❤️.pdf' className='menu-link-pdf'> au format PDF</a>
            </div>

          </div>
          {/* <div className="scrollbar">
            <img className='down-arrow' src="down-arrow.svg" alt="down" />
            </div> */}
        </div>
        <div className="contact-us">
          <a className='contact-button' href="tel:+33140360932">Appelez-nous !</a>
        </div>
      </div>
      {/* <About /> */}
    </div>
  );
};
