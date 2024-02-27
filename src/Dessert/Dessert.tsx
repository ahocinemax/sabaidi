import React, { useEffect } from 'react';
import { SushiItemProps } from '../interfaces';
import { Helmet } from 'react-helmet';

export const Dessert = () => {
    const dessertsItems: SushiItemProps[] = [
        {
          imageUrl: "coming-soon.jpg",
          title: "Tiramisu maison",
          description: "Un classique italien revisité, avec une crème onctueuse et un café corsé.",
          price: "6.90",
        },
        {
          imageUrl: "coming-soon.jpg",
          title: "Tarte au daim",
          description: "Une pâte sablée garnie d'une crème onctueuse et d'une couche de biscuits Daim.",
          price: "5.90",
        },
        {
          imageUrl: "coming-soon.jpg",
          title: "Fondant",
          description: "Un gâteau moelleux au chocolat avec un cœur coulant.",
          price: "5.50",
        },
        {
          imageUrl: "coming-soon.jpg",
          title: "Ananas frais",
          description: "Un ananas frais et juteux, idéal pour se rafraîchir.",
          price: "4.50",
        },
        {
          imageUrl: "coming-soon.jpg",
          title: "Mangue fraîche",
          description: "Une mangue fraîche et parfumée, un vrai délice.",
          price: "4.50",
        },
        {
          imageUrl: "coming-soon.jpg",
          title: "Salade de fruits maison",
          description: "Une salade de fruits frais et variés, accompagnée d'un sirop maison.",
          price: "5.90",
        },
        {
          imageUrl: "coming-soon.jpg",
          title: "Mangue sur riz coco",
          description: "Un dessert exotique et gourmand, à base de riz gluant, de lait de coco et de mangue fraîche.",
          price: "6.50",
        },
        {
          imageUrl: "coming-soon.jpg",
          title: "Mochis glacés",
          description: "Des petits gâteaux japonais moelleux et glacés, aux parfums variés.",
          price: "4.90",
        },
        {
          imageUrl: "coming-soon.jpg",
          title: "Nems choco banane",
          description: "Des nems revisités, à la banane et au chocolat, pour un dessert original.",
          price: "5.50",
        },
        {
          imageUrl: "coming-soon.jpg",
          title: "Nems choco mangue",
          description: "Des nems revisités, à la mangue et au chocolat, pour un dessert exotique.",
          price: "5.50",
        },
    ];

    useEffect(() => {
        document.title = "Desserts - Sabaidi";
    }, []);

    return (
        <div className='container-thai'>
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