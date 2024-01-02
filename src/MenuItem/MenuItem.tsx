// MenuItem.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './MenuItem.css';
import { MenuItemProps } from '../interfaces';

const MenuItem: React.FC<MenuItemProps> = ({ imageUrl, linkTo, title, description }) => {
  return (
    <div className="MenuItem">
      <Link to={linkTo} className="MenuLink">
        <img className="MenuItemImage" src={imageUrl} alt="Submenu item" />
        <div className="TextOverlay">
          {/* <p className="heading">{title}</p>
          <p>{description}</p> */}
        </div>
      </Link>
    </div>
  );
};

export default MenuItem;
