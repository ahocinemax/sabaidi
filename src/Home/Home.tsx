import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import { BestSellerItem, MenuItemProps } from '../interfaces';
import BestSellers from '../BestSellers/BestSellers';

import { Helmet } from 'react-helmet';
import { BandeauSocial } from '../BandeauSocial/BandeauSocial';

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
        <title>Accueil - Thaiko</title>
      </Helmet>

      <div className="section home">
        <div className="background"></div>
        <div className="content">
          <p className='welcome'><span className='text'>THAIKO x PARIS 9</span></p>
          <div className="deco">
            <img src="deco2.svg" className='deco-img' />
          </div>
          <div className="phrase-container">
          <h1 className='impact-phrase'>REDÉCOUVREZ LES CLASSIQUES DE <br /><span style={{ color: '#e70b96', fontFamily: 'Philosopher-Regular' }}>LA CUISINE ASIATIQUE</span></h1>

          </div>
        </div>
        <div className="scrollbar">
          <img className='down-arrow' src="down-arrow.svg" alt="down" />
        </div>
      </div>
      {/* <BandeauSocial /> */}
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
