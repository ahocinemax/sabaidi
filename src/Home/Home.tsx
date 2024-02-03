import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import { BestSellerItem, MenuItemProps } from '../interfaces';
import BestSellers from '../BestSellers/BestSellers';

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

const BestSellersItems: BestSellerItem[] = [
  {
    title: 'Sushi Avocat',
    description: 'Sushi au saumon et à l\'avocat.',
    imageURL: 'poke1.png',
    altText: 'Sushi',
    price: '4.50',
    likes: 0,
  },
  {
    title: 'Pad Thai',
    description: 'Nouilles sautées au wok avec crevettes.',
    imageURL: 'poke2.png',
    altText: 'Pad Thai',
    price: '14.90',
    likes: 1,
  },
  {
    title: 'Salade de fruits',
    description: 'Salade de fruits frais. Mangue ananas kiwi',
    imageURL: 'poke3.png',
    altText: 'Salade de fruits',
    price: '4.50',
    likes: 2,
  },
  {
    title: 'Sushi Avocat',
    description: 'Sushi au saumon et à l\'avocat.',
    imageURL: 'poke4.png',
    altText: 'Sushi',
    price: '4.50',
    likes: 3,
  },
  {
    title: 'Pad Thai',
    description: 'Nouilles sautées au wok avec crevettes.',
    imageURL: 'soupe.png',
    altText: 'Pad Thai',
    price: '14.90',
  },
  {
    title: 'Sushi Avocat',
    description: 'Sushi au saumon et à l\'avocat.',
    imageURL: 'thaii.png',
    altText: 'Sushi',
    price: '4.50',
  },
  {
    title: 'Pad Thai',
    description: 'Nouilles sautées au wok avec crevettes.',
    imageURL: 'startersbg.png',
    altText: 'Pad Thai',
    price: '14.90',
  },
];

export const Home: React.FC = () => {
  return (
    <div className="main-container">
      <div className="section Home">
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
