import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import { BestSellerItem, MenuItemProps } from '../interfaces';
import BestSellers from '../BestSellers/BestSellers';

const submenu: MenuItemProps[] = [
  {
    imageUrl: 'starters.png',
    linkTo: '/Starters',
    title: 'Starters',
    description: 'Vous trouverez ici nos entrées chaudes et froides, ainsi que nos soupes et salades',
  },
  {
    imageUrl: 'sushis2.png',
    linkTo: '/Sushis',
    title: 'Sushis',
    description: 'Découvrez nos sushis, makis, sashimis et autres spécialités. Signatures et compositions originales vous attendent',
  },
  {
    imageUrl: 'thai.png',
    linkTo: '/Thai',
    title: 'Thaï',
    description: 'Vos plat thailandais préférés: Pad Thai, Loc lac, Tigre qui pleure et bien d\'autres',
  },
  {
    imageUrl: 'sodas.png',
    linkTo: '/Desserts',
    title: 'Desserts',
    description: 'Boissons, cocktails et desserts pour agrémenter vos repas',
  },
];

const BestSellersItems: BestSellerItem[] = [
  {
    title: "Poké poulet",
    description: "Tendres morceaux de poulet, accompagnés de leur sauce dynamite.",
    imageURL: "best-seller.png",
    price: "7.50",
  },
  {
    title: "Crevette dynamite",
    description: "Nouilles sautées au wok avec des crevettes, du tofu, des arachides et de la lime.",
    imageURL: "best-seller.png",
    price: "13.90",
  },
  {
    title: "Mi prat",
    description: "Soupe épicée aux crevettes avec des champignons, de la citronnelle et des épices.",
    imageURL: "best-seller.png",
    price: "12.90",
  },
  {
    imageURL: "best-seller.png",
    title: "Plateau Sabaidi love",
    description: "Sushi au saumon et à l'avocat.",
    price: "10.90",
  },
  {
    imageURL: "best-seller.png",
    title: "Saumon mango ciboulette spicy",
    description: "Sushi au saumon et à l'avocat.",
    price: "10.90",
  },
];

export const Home: React.FC = () => {
  return (
    <div className="main-container">
      <div className="section home">
        <div className='MenuContainer'>
          <div className='menu-title-container'><h1 className='menu-h1'>Découvez notre menu</h1></div>
          <div className='menu-list'>{submenu.map((item, index) => (
            <MenuItem
              key={index}
              imageUrl={item.imageUrl}
              linkTo={item.linkTo}
              title={item.title}
              description={item.description}
            />
          ))}
            <div className="scrollbar" id="style-8">
              <img src="down-arrow.svg" alt="down" />
            </div>
          </div>
        </div>
      </div>
      <BestSellers items={BestSellersItems} />
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
          </a>
        </div>
      </div>
    </div>
  );
};
