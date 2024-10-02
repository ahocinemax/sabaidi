import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import { BestSellerItem, MenuItemProps } from '../interfaces';
import BestSellers from '../BestSellers/BestSellers';
import About from '../About/About';
import { Helmet } from 'react-helmet';

const submenu: MenuItemProps[] = [
  {
    index: 0,
    imageUrl: 'starter.png',
    linkTo: '/Starters',
    title: 'Entrées',
    description: 'Vous trouverez ici nos entrées chaudes et froides, ainsi que nos soupes et salades',
  },
  {
    index: 0,
    imageUrl: 'jap.png',
    linkTo: '/Jap',
    title: 'Jap\'',
    description: 'Découvrez nos sushis, makis, sashimis et autres spécialités. Signatures et compositions originales vous attendent',
  },
  {
    index: 0,
    imageUrl: 'thai.png',
    linkTo: '/Thai',
    title: 'Thaï',
    description: 'Vos plat thailandais préférés: Pad Thai, Loc lac, Tigre qui pleure et bien d\'autres',
  },
  {
    index: 0,
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
    isNew: true,
  },
  {
    title: "Crevette dynamite",
    description: "Nouilles sautées au wok avec des crevettes, du tofu, des arachides et de la lime.",
    imageURL: "test.png",
    price: "13.90",
    isNew: true,
  },
  {
    title: "Mi prat",
    description: "Soupe épicée aux crevettes avec des champignons, de la citronnelle et des épices.",
    imageURL: "test.png",
    price: "12.90",
    isNew: true,
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
        <div className="background-container"></div>
        <p className='welcome'><span className='text'>SABAIDI PARIS 9</span></p>
        <div className="deco">
          <img src="deco2.svg" className='deco-img' />
        </div>
        <div className="phrase-container">
        <h1 className='impact-phrase'>REDÉCOUVREZ LES CLASSIQUES DE <br /><span style={{ color: '#e70b96', fontFamily: 'Philosopher-Regular' }}>LA CUISINE ASIATIQUE</span></h1>

        </div>
        <div className='MenuContainer'>
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
        </div>
        {/* <div className="contact-us">
          <a className='contact-button' href="tel:+33140360932">Appelez-nous !</a>
        </div> */}
          <div className="scrollbar">
            <img className='down-arrow' src="down-arrow.svg" alt="down" />
          </div>
      </div>
      <div className='menu-list'>
        {submenu.map((item, index) => (
          <MenuItem
            key={index}
            index={index}
            imageUrl={item.imageUrl}
            linkTo={item.linkTo}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <BestSellers items={BestSellersItems} />
      {/* <About /> */}
    </div>
  );
};
