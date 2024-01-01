import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import { MenuItemProps, TopbarProps } from '../interfaces';
import { Topbar } from '../Topbar/Topbar';

const submenu: MenuItemProps[] = [
  {
    imageUrl: 'starters.jpg',
    linkTo: '/Starters',
    title: 'STARTERS',
    description: 'Vous trouverez ici nos entrées chaudes et froides,\
    ainsi que nos soupes et salades',
  },
  {
    imageUrl: 'sushis.jpg',
    linkTo: '/Sushis',
    title: 'SUSHIS',
    description: 'Découvrez nos sushis, makis, sashimis et autres spécialités. \
    Signatures et compositions originales vous attendent',
  },
  {
    imageUrl: 'thai.jpg',
    linkTo: '/Thai',
    title: 'THAI',
    description: 'Vos plat thailandais préférés: \
    Pad Thai, Loc lac, Tigre qui pleure et bien d\'autres',
  },
  {
    imageUrl: 'dessert.jpg',
    linkTo: '/Desserts',
    title: 'DESSERTS',
    description: 'Boissons, cocktails et desserts pour agrémenter vos repas',
  },
];

export const Home: React.FC = () => {
  return (
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
  );
};
