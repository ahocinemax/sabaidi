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
    imageUrl: 'dessrt.png',
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
      <Helmet>
        <title>Accueil - Sabaidi</title>
      </Helmet>

      <div className="section home">
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
          <div className="scrollbar">
            <img className='down-arrow' src="down-arrow.svg" alt="down" />
          </div>
        </div>
      </div>
      <BestSellers items={BestSellersItems} />
      <About />
    </div>
  );
};
