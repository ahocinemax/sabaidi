import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import { MenuItemProps } from '../interfaces';

const submenu: MenuItemProps[] = [
  {
    imageUrl: 'starters.png',
    linkTo: '/Starters',
    title: 'STARTERS',
    description: 'Vous trouverez ici nos entrées chaudes et froides, ainsi que nos soupes et salades',
  },
  {
    imageUrl: 'sushis2.png',
    linkTo: '/Sushis',
    title: 'SUSHIS',
    description: 'Découvrez nos sushis, makis, sashimis et autres spécialités. Signatures et compositions originales vous attendent',
  },
  {
    imageUrl: 'thai.png',
    linkTo: '/Thai',
    title: 'THAI',
    description: 'Vos plat thailandais préférés: Pad Thai, Loc lac, Tigre qui pleure et bien d\'autres',
  },
  {
    imageUrl: 'sodas.png',
    linkTo: '/Desserts',
    title: 'DESSERTS',
    description: 'Boissons, cocktails et desserts pour agrémenter vos repas',
  },
];

export const Home: React.FC = () => {
  return (
    <div className="main-container">
      <div className="Home">
        <div className='MenuContainer'>
          {submenu.map((item, index) => (
            <MenuItem
              key={index}
              imageUrl={item.imageUrl}
              linkTo={item.linkTo}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
      <div className="about-section">
        <p className="about-info">
          Retrouvez-nous sur vos plateformes préférées :
        </p>
        <div className="about-links">
          <a href="https://www.just-eat.fr/menu/sabaidi">
            <img src="justeat.png" alt="Just Eat" />
          </a>
          <a href="https://deliveroo.fr/fr/menu/Paris/9eme-opera/sabaidi-paris-9/">
            <img src="deliveroo.png" alt="Deliveroo" />
          </a>
          <a href="https://www.ubereats.com/fr/store/sabaidi-paris-9/xwxmB55cWqaAKPh7RlwnTg?diningMode=DELIVERY&sc=SEARCH_SUGGESTION">
            <img src="uber.png" alt="Uber Eats" />
          </a>
        </div>
      </div>
      <div className="best-sellers">
        <h2>Best Sellers</h2>
        <div className="best-sellers-items">
          <div className="best-sellers-item">
            <img src="sushi1.jpg" alt="Sushi" />
            <div className="text-box">
              <h3>Sushi Saumon Avocat</h3>
              <p>Sushi au saumon et à l'avocat.</p>
            </div>
          </div>
          <div className="best-sellers-item">
            <img src="thai3.png" alt="Thai" />
            <div className="text-box">
              <h3>Pad Thai</h3>
              <p>Nouilles sautées au wok avec crevettes, tofu, arachides et de la lime.</p>
            </div>
          </div>
          <div className="best-sellers-item">
            <img src="dessert.jpg" alt="Dessert" />
            <div className="text-box">
              <h3>Salade de fruits</h3>
              <p>Salade de fruits frais.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
