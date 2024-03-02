import React from 'react';
import { SushiItemProps } from '../interfaces';
import { Helmet } from 'react-helmet';

export const Starter = () => {

  const entreesItems: SushiItemProps[] = [
  {
    imageUrl: "Starters/edamame.jpg",
    title: "Edamame",
    description: "Fèves de soja.",
    price: "3.90",
  },
  {
    imageUrl: "Starters/wakame.jpg",
    title: "Wakame",
    description: "Salade d'algues wakame.",
    price: "3.90",
  },
  {
    imageUrl: "Starters/choux.jpg",
    title: "Choux",
    description: "Salade de chou chinois, sésame et vinaigrette.",
    price: "4.90",
  },
  {
      imageUrl: "Starters/riz.jpg",
      title: "Riz",
      description: "Riz blanc ou vinaigré nature.",
      price: "3.90",
  },
  {
    imageUrl: "Starters/nems-poulet.jpg",
    title: "Nems poulet",
    description: "Bouchées vapeur au poulet et aux légumes.",
    price: "4.90",
  },
  {
    imageUrl: "Starters/nems-crevette.jpg",
    title: "Nems crevette",
    description: "Crevettes décortiquées panées.",
    price: "5.90",
  },
  {
    imageUrl: "Starters/gyozas.jpg",
    title: "Gyoza",
    description: "Raviolis japonais grillés ou vapeur, au poulet ou aux légumes.",
    price: "5.20",
  },
  {
    imageUrl: "Starters/tempuras.jpg",
    title: "Tempura",
    description: "Crevettes décortiquées panées.",
    price: "6.20",
  },
  {
    imageUrl: "Starters/poulet-dynamite.jpg",
    title: "Poulet dynamite",
    description: "Tendres morceaux de poulet, accompagnés de leur sauce dynamite.",
    price: "7.50",
  },
  {
    imageUrl: "Starters/crevette-dynamite.jpg",
    title: "Crevette dynamite",
    description: "Crevettes décortiquées, accompagnées de leur sauce dynamite.",
    price: "8.90",
  },
  {
      imageUrl: "Starters/soupe.jpg",
      title: "Soupe",
      description: "Soupe miso traditionnelle japonaise, au tofu et algues.",
      price: "3.90",
  }];

  return (
      <div className='container-thai'>
        <Helmet>
          <title>Menu Jap' - Sabaidi</title>
        </Helmet>

        <h2>Entrées</h2>
        <div className='thai-items'>
            {entreesItems.map((item, index) => (
                <div key={index} className="menu-item">
                    <img className="ItemImage" src={item.imageUrl} alt={item.title} />
                    <div className="ItemDetails">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <p>{item.price}€</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}
