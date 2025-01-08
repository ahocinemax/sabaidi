// MenuItem.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './MenuItem.css';
import { MenuItemProps } from '../interfaces';

const MenuItem: React.FC<MenuItemProps> = ({ index, imageUrl, linkTo, title, description }) => {
  
  // const startersItems = [
  //   {
  //     "imageUrl": "Starters/nems-crevette.jpg",
  //     "title": "NEMS CREVETTE (X3)",
  //     "description": "Crevettes décortiquées panées.",
  //     "price": "5.90"
  //   },
  //   {
  //     "imageUrl": "Starters/tempuras.jpg",
  //     "title": "TEMPURAS (X4)",
  //     "description": "Crevettes décortiquées panées.",
  //     "price": "6.20"
  //   },
  //   {
  //     "imageUrl": "Starters/poulet-dynamite.jpg",
  //     "title": "CHICKEN DYNAMITE (X8)",
  //     "description": "Tendres morceaux de poulet, accompagnés de leur sauce dynamite.",
  //     "price": "7.90"
  //   },
  //   {
  //     "imageUrl": "Starters/wakame.jpg",
  //     "title": "WAKAME",
  //     "description": "Salade d'algues wakame.",
  //     "price": "4.90"
  //   },
  // ]

  return (
    <div className="MenuLink">
      <img className="MenuItemImage" src={imageUrl} alt="Submenu item" />
      <div className={`MenuItem`}>
      </div>
    </div>
  );
};

export default MenuItem;
