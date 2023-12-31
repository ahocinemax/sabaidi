import React from 'react';
import MenuItem from '../MenuItem/MenuItem';

export const Home = () => {
  return (
    <div>
      <div className="w-1/4">
        <MenuItem imageUrl='image1.jpg' linkTo="/Starters" />
      </div>
      <div className="w-1/4">
        <MenuItem imageUrl='image2.jpg' linkTo="/Sushis" />
      </div>
      <div className="w-1/4">
        <MenuItem imageUrl='image3.jpg' linkTo="Thai" />
      </div>
      <div className="w-1/4">
        <MenuItem imageUrl='image4.jpg' linkTo="Desserts" />
      </div>
    </div>
  );
};
