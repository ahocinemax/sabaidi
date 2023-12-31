import React from 'react';
import MenuItem from '../MenuItem/MenuItem';

export const Home = () => {
  return (
    <div className='MenuContainer'>
        <MenuItem imageUrl='starters.jpg' linkTo="/Starters" title='STARTERS' description='Entrées' />
        <MenuItem imageUrl='sushis.jpg' linkTo="/Sushis" title='SUSHIS' description='Sushis'/>
        <MenuItem imageUrl='thai.jpg' linkTo="Thai" title='THAI' description='Plat thailandais'/>
        <MenuItem imageUrl='dessert.jpg' linkTo="Desserts" title='DESSERTS' description='FRUITS'/>
    </div>
  );
};
