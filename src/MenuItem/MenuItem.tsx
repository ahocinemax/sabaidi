// MenuItem.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './MenuItem.css';
import { MenuItemProps } from '../interfaces';

const MenuItem: React.FC<MenuItemProps> = ({ index, imageUrl, linkTo, title, description }) => {
  
  return (
    <Link to={linkTo} className="MenuLink">
      <div className={`MenuItem ${index % 2 === 0 ? 'left' : 'right'}`}>
        <img className="MenuItemImage" src={imageUrl} alt="Submenu item" />
        <div className="MenuItemText">{description}</div>
      </div>
    </Link>
  );
};

export default MenuItem;
