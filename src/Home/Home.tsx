import React from 'react';
import './Home.css';
import MenuItem from '../MenuItem/MenuItem';

function Home() {
  return (
    <div className="flex">
      <div className="w-1/2">
        <MenuItem imageUrl="images/image1.jpg" linkTo="" />
      </div>
      <div className="w-1/2">
        <MenuItem imageUrl="images/image2.jpg" linkTo="" />
      </div>
      <div className="w-1/2">
        <MenuItem imageUrl="images/image3.jpg" linkTo="" />
      </div>
      <div className="w-1/2">
        <MenuItem imageUrl="images/image4.jpg" linkTo="" />
      </div>
    </div>
  );
}

export default Home;
