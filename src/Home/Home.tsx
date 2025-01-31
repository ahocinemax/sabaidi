import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import { BestSellerItem, MenuItemProps } from '../interfaces';
import BestSellers from '../BestSellers/BestSellers';
import About from '../About/About';

import { Helmet } from 'react-helmet';
import { BandeauSocial } from '../BandeauSocial/BandeauSocial';

const submenu: MenuItemProps[] = [
  {
    index: 0,
    imageUrl: 'starter.png',
    linkTo: '/Starters',
    title: 'Starters',
    description: 'Vous trouverez ici nos entrées chaudes et froides, ainsi que nos soupes et salades',
    size: "large-box",
    className: ""
  },
  {
    index: 0,
    imageUrl: 'Poké.png',
    linkTo: '/Jap?category=Poké',
    title: 'Poké',
    description: 'Composez votre poké bowl à partir de nos bases, protéines, légumes et sauces',
    size: "small-box",
    className: ""
  },
  {
    index: 0,
    imageUrl: 'jap.png',
    linkTo: '/Jap?category=Signatures',
    title: 'Jap\'',
    description: 'Découvrez nos sushis, makis, sashimis et autres spécialités. Signatures et compositions originales vous attendent',
    size: "small-box",
    className: ""
  },
  {
    index: 0,
    imageUrl: 'Plateaux.png',
    linkTo: '/Jap?category=Plateaux',
    title: 'Plateaux',
    description: '',
    size: "small-box",
    className: ""
  },
  {
    index: 0,
    imageUrl: 'thai.png',
    linkTo: '/Thai',
    title: 'Thaï',
    description: 'Vos plat thailandais préférés: Pad Thai, Loc lac, Tigre qui pleure et bien d\'autres',
    size: "small-box",
    className: ""
  },
  {
    index: 0,
    imageUrl: 'Riz Thai.png',
    linkTo: '/Thai?category=Riz',
    title: 'Thaï',
    description: 'Vos plat thailandais préférés: Pad Thai, Loc lac, Tigre qui pleure et bien d\'autres',
    size: "small-box",
    className: ""
  },
  {
    index: 0,
    imageUrl: 'Nouilles.png',
    linkTo: '/Thai?category=Nouilles',
    title: 'Nouilles thai',
    description: 'Vous trouverez ici nos entrées chaudes et froides, ainsi que nos soupes et salades',
    size: "large-box",
    className: ""
  },
  {
    index: 0,
    imageUrl: 'dessert.png',
    linkTo: '/Desserts',
    title: 'Desserts',
    description: 'Boissons, cocktails et desserts pour agrémenter vos repas',
    size: "small-box",
    className: ""
  },
  {
    index: 0,
    imageUrl: 'Boissons.png',
    linkTo: '/Desserts?category=Boissons',
    title: 'Boissons\'',
    description: 'Découvrez nos sushis, makis, sashimis et autres spécialités. Signatures et compositions originales vous attendent',
    size: "small-box",
    className: ""
  }
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

  const handleScroll = () => {
    window.scrollTo({ top: window.innerHeight + 20, behavior: 'smooth' });
  };

  return (
    <div className="main-container">
      <Helmet>
        <title>Thaiko Paris 9 - Jap & Thai restaurant</title>
      </Helmet>

      <div className="section home">
        {/* <div className="background"></div> */}
        <div className="content">
          <p className='welcome'><span className='text'>THAIKO x PARIS 9</span></p>
          <div className="deco">
            <img src="deco2.svg" className='deco-img' />
          </div>
          <div className="phrase-container">
          <h1 className='impact-phrase'>
            VOTRE RESTAURANT DEVIENT LE <br />
            <span style={{ color: '#e70b96', fontFamily: 'Philosopher-Regular' }}>THAÏKO PARIS 9
              {/* <br />
              <img className="flag-svg" src='https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f1ef-1f1f5.svg' />
              <img className="flag-svg" src='https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f1f9-1f1ed.svg' /> */}
            </span>
          </h1>

          </div>
        </div>
        <div className="scrollbar">
          <img onClick={() => handleScroll()} className='down-arrow' src="down-arrow.svg" alt="down" />
        </div>
      </div>
      {/* <BandeauSocial /> */}
      <div className="section menu">
        <div className="MenuTitle">
          <h2>Explorer notre menu</h2>
        </div>
        <div className='parent'>
          {submenu.map((item, index) => (
            <MenuItem
              key={index}
              index={index}
              imageUrl={item.imageUrl}
              linkTo={item.linkTo}
              title={item.title}
              description={item.description}
              size={index === 0 ? "large-box" : "small-box"}
              className={`div${index + 1}`}
            />
          ))}
        </div>
      </div>
      {/* <BestSellers items={BestSellersItems} /> */}
      {/* <About /> */}
    </div>
  );
};
