// MenuItem.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './MenuItem.css';
import { MenuItemProps } from '../interfaces';

const MenuItem: React.FC<MenuItemProps> = ({ imageUrl, linkTo, title, description }) => {
  return (
    <Link to={linkTo} className="MenuLink">
      <div className="MenuItem">
        {/* <h1 className="title">{title}</h1> */}
        <img className="MenuItemImage" src={imageUrl} alt="Submenu item" />
      </div>
    </Link>
  );
};

export default MenuItem;
