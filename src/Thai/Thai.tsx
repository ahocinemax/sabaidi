// Thai.tsx
import React, { useContext, useState } from "react";
import "./Thai.css";
import { SushiItemProps, SidebarProps } from "../interfaces";
import "../styles/fonts.css";
import Sidebar from "../Sidebar/Sidebar";
import { useSidebar } from "../Context/SidebarContext";

const ThaiItem: React.FC<SushiItemProps> = ({ title, price, description, imageUrl }) => {
  return (
    <div className="menu-item">
      <img className="ItemImage" src={imageUrl} alt={title} />
      <div className="ItemDetails">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export const Thai: React.FC = () => {
  const { activeTitle, setActiveTitle } = useSidebar();

  const curryItems: SushiItemProps[] = [
    {
      title: "Panang Curry",
      description: "Nouilles sautées au wok avec des crevettes, du tofu, des arachides et de la lime.",
      imageUrl: "poke1.png",
      price: "12.99€",
    },
    {
      title: "Panang Curry",
      description: "Nouilles sautées au wok avec des crevettes, du tofu, des arachides et de la lime.",
      imageUrl: "poke1.png",
      price: "12.99€",
    },
    {
      title: "Panang Curry",
      description: "Nouilles sautées au wok avec des crevettes, du tofu, des arachides et de la lime.",
      imageUrl: "poke1.png",
      price: "12.99€",
    },
    {
      title: "Panang Curry",
      description: "Nouilles sautées au wok avec des crevettes, du tofu, des arachides et de la lime.",
      imageUrl: "poke1.png",
      price: "12.99€",
    },
    {
      title: "Panang Curry",
      description: "Nouilles sautées au wok avec des crevettes, du tofu, des arachides et de la lime.",
      imageUrl: "poke1.png",
      price: "12.99€",
    },
    {
      title: "Panang Curry",
      description: "Nouilles sautées au wok avec des crevettes, du tofu, des arachides et de la lime.",
      imageUrl: "poke1.png",
      price: "12.99€",
    },
    {
      title: "Panang Curry",
      description: "Nouilles sautées au wok avec des crevettes, du tofu, des arachides et de la lime.",
      imageUrl: "poke1.png",
      price: "12.99€",
    },
    {
      title: "Panang Curry",
      description: "Nouilles sautées au wok avec des crevettes, du tofu, des arachides et de la lime.",
      imageUrl: "poke1.png",
      price: "12.99€",
    },
    {
      title: "Panang Curry",
      description: "Nouilles sautées au wok avec des crevettes, du tofu, des arachides et de la lime.",
      imageUrl: "poke1.png",
      price: "12.99€",
    },
    {
      title: "Panang Curry",
      description: "Nouilles sautées au wok avec des crevettes, du tofu, des arachides et de la lime.",
      imageUrl: "poke1.png",
      price: "12.99€",
    },
  ];

  const soupeItems: SushiItemProps[] = [
    {
      title: "Gai Pad Krapow",
      description: "Soupe épicée aux crevettes avec des champignons, de la citronnelle et des épices.",
      imageUrl: "poke2.png",
      price: "12.99€",
    },
    {
      title: "Gai Pad Krapow",
      description: "Soupe épicée aux crevettes avec des champignons, de la citronnelle et des épices.",
      imageUrl: "poke2.png",
      price: "12.99€",
    },
    {
      title: "Gai Pad Krapow",
      description: "Soupe épicée aux crevettes avec des champignons, de la citronnelle et des épices.",
      imageUrl: "poke2.png",
      price: "12.99€",
    },
    {
      title: "Gai Pad Krapow",
      description: "Soupe épicée aux crevettes avec des champignons, de la citronnelle et des épices.",
      imageUrl: "poke2.png",
      price: "12.99€",
    },
  ];

  const itemsList: Record<string, SushiItemProps[]> = {
    "Curry": curryItems,
    "Soupe": soupeItems,
  };

  // const activeSubmenu: SushiItemProps[] = itemsList[activeTitle] | [];

  const handleTitleClick = (title: string) => {
    setActiveTitle(title);
  };

  const submenus: SidebarProps = {
    titles: Object.keys(itemsList),
    activeTitle: activeTitle,
    onTitleClick: handleTitleClick,
  };

  return (
    <div className="container-thai">
      <h2>Menu Thai</h2>
      <Sidebar titles={submenus.titles} activeTitle={submenus.activeTitle} onTitleClick={submenus.onTitleClick}/>
      <div className="thai-items">
        {itemsList[activeTitle]?.map((item, index) => (
          <ThaiItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

