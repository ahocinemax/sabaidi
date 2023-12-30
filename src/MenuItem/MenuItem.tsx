// MenuItem.tsx

import React from 'react';
import { Link } from 'react-router-dom';

interface MenuItemProps {
  imageUrl: string;
  linkTo: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ imageUrl, linkTo }) => {
  return (
    // <Link to={ linkTo }>
    <div className="relative overflow-hidden group w-full h-64">
      <img
        src={ imageUrl }
        alt="Submenu item"
        className="object-cover w-full h-full transition-transform transform group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black opacity-50 transition-opacity group-hover:opacity-75"></div>
    </div>
    // </Link>
  );
};

export default MenuItem;
