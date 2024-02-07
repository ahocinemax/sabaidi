import React from "react";
import "./Sushi.css";
import "../styles/fonts.css";
import { SushiItemProps, SidebarProps } from "../interfaces";
import Sidebar from "../Sidebar/Sidebar";

export const Sushi = () => {
  const sushiItems: SushiItemProps[] = [
    {
      imageUrl: "sushi2.jpg",
      title: "Sushi Avocat Crevette",
      description: "Sushi avec avocat et crevette.",
      price: 14.99,
    },
    {
      imageUrl: "sushi3.jpg",
      title: "Sushi Thon Épicé",
      description: "Sushi au thon épicé, une explosion de saveurs.",
      price: 15.99,
    },
    {
      imageUrl: "sushi1.jpg",
      title: "Sushi Saumon Avocat",
      description: "Sushi au saumon et à l'avocat.",
      price: 13.99,
    },
    {
      imageUrl: "sushi3.jpg",
      title: "Sushi Saumon Avocat",
      description: "Sushi au saumon et à l'avocat.",
      price: 13.99,
    },
    {
      imageUrl: "sushi2.jpg",
      title: "Sushi Saumon Avocat",
      description: "Sushi au saumon et à l'avocat.",
      price: 13.99,
    },
    {
      imageUrl: "sushi1.jpg",
      title: "Sushi Saumon Avocat",
      description: "Sushi au saumon et à l'avocat.",
      price: 13.99,
    },
    {
      imageUrl: "sushi3.jpg",
      title: "Sushi Saumon Avocat",
      description: "Sushi au saumon et à l'avocat.",
      price: 13.99,
    },
    {
      imageUrl: "sushi2.jpg",
      title: "Sushi Saumon Avocat",
      description: "Sushi au saumon et à l'avocat.",
      price: 13.99,
    },
    {
      imageUrl: "sushi1.jpg",
      title: "Sushi Saumon Avocat",
      description: "Sushi au saumon et à l'avocat.",
      price: 13.99,
    },
    {
      imageUrl: "sushi2.jpg",
      title: "Sushi Saumon Avocat",
      description: "Sushi au saumon et à l'avocat.",
      price: 13.99,
    },
  ];

  const submenus: SidebarProps = {
    titles: ["Sushi", "Maki", "Sashimi", "Nigiri"],
    activeTitle: "Sushi",
  };
  
  return (
    <div className="menu-section">
      <h2>Menu Sushi</h2>
      <Sidebar titles={submenus.titles} activeTitle={submenus.activeTitle}/>
      <div className="menu-items">
        {sushiItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <img src={item.imageUrl} alt="Sushi" />
            <div className="menu-item-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>{item.price}€</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
