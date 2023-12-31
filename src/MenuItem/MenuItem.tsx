// MenuItem.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './MenuItem.css';

interface MenuItemProps {
  imageUrl: string;
  linkTo: string;
  title: string;
  description: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ imageUrl, linkTo, title, description }) => {
  return (
    <div className="MenuItem">
      <Link to={linkTo}>
        <div className="MenuText">
          <img className="MenuItemImage" src={imageUrl} alt="Submenu item" />
          <p className="heading">{title}</p>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default MenuItem;
