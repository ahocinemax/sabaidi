import React from 'react';
import { SushiItemProps } from '../interfaces';
import { Helmet } from 'react-helmet';

export const Dessert = () => {
    const dessertsItems: SushiItemProps[] = [
        {
          imageUrl: "coming-soon.jpg",
          title: "TIRAMISU MAISON",
          description: "Un classique italien revisité, avec une crème onctueuse et un café corsé.",
          price: "6.90",
        },
        {
          imageUrl: "coming-soon.jpg",
          title: "TARTE AU DAIM",
          description: "Une pâte sablée garnie d'une crème onctueuse et d'une couche de biscuits Daim.",
          price: "5.90",
        },
        {
          imageUrl: "coming-soon.jpg",
          title: "FONDANT CHOCOLAT",
          description: "Un gâteau moelleux au chocolat avec un cœur coulant.",
          price: "5.50",
        },
        {
          imageUrl: "coming-soon.jpg",
          title: "ANANAS FRAIS",
          description: "Un ananas frais et juteux, idéal pour se rafraîchir.",
          price: "4.50",
        },
        {
          imageUrl: "coming-soon.jpg",
          title: "MANGUE FRAÎCHE",
          description: "Une mangue fraîche et parfumée, un vrai délice.",
          price: "4.50",
        },
        {
          imageUrl: "coming-soon.jpg",
          title: "SALADE DE FRUITS MAISON",
          description: "Une salade de fruits frais et variés, accompagnée d'un sirop maison.",
          price: "5.90",
        },
        {
          imageUrl: "coming-soon.jpg",
          title: "MANGUE SUR RIZ COCO",
          description: "Un dessert exotique et gourmand, à base de riz gluant, de lait de coco et de mangue fraîche.",
          price: "6.50",
        },
        {
          imageUrl: "coming-soon.jpg",
          title: "MOCHIS GLACÉS",
          description: "Des petits gâteaux japonais moelleux et glacés, aux parfums variés.",
          price: "4.90",
        },
        {
          imageUrl: "coming-soon.jpg",
          title: "NEMS CHOCO BANANE",
          description: "Des nems revisités, à la banane et au chocolat, pour un dessert original.",
          price: "5.50",
        },
        {
          imageUrl: "coming-soon.jpg",
          title: "NEMS CHOCO MANGUE",
          description: "Des nems revisités, à la mangue et au chocolat, pour un dessert exotique.",
          price: "5.50",
        },
    ];

    return (
        <div className='container-thai'>
            <Helmet>
                <title>Desserts - Sabaidi</title>
            </Helmet>

            <h2>Desserts</h2>
            <div className='thai-items'>
                {dessertsItems.map((item, index) => (
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