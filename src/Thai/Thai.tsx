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

  const entreesItems: SushiItemProps[] = [
    {
      title: "Gyoza",
      description: "Bouchées vapeur au poulet ou aux légumes.",
      imageUrl: "Starters/gyozas.JPG",
      price: "5.20€",
    },
    {
      title: "Tempura",
      description: "Crevettes décortiquées panées.",
      imageUrl: "Starters/tempuras.JPG",
      price: "6.20€",
    },
    {
      title: "Crevette dynamite",
      description: "Crevettes décortiquées, accompagnées de leur sauce dynamite.",
      imageUrl: "Starters/crevette-dynamite.JPG",
      price: "8.90€",
    },
    {
      title: "Poulet dynamite",
      description: "Tendres morceaux de poulet, accompagnés de leur sauce dynamite.",
      imageUrl: "Starters/poulet-dynamite.JPG",
      price: "7.50€",
    },
  ];

  const rizItems: SushiItemProps[] = [
    {
      title: "Khao Prat",
      description: "Nouilles sautées au wok avec des crevettes, du tofu, des arachides et de la lime.",
      imageUrl: "Thai/khao-prat.JPG",
      price: "12.90€",
    },
    {
      title: "Loklak",
      description: "Nouilles sautées au wok avec des crevettes, du tofu, des arachides et de la lime.",
      imageUrl: "Thai/loc lac.JPG",
      price: "14.90€",
    },
    {
      title: "Poulet curry katsu",
      description: "Nouilles sautées au wok avec des crevettes, du tofu, des arachides et de la lime.",
      imageUrl: "coming-soon.jpg",
      price: "14.90€",
    },
    {
      title: "Crevettes dynamite",
      description: "Nouilles sautées au wok avec des crevettes, du tofu, des arachides et de la lime.",
      imageUrl: "Thai/crevette-dynamite-1.JPG",
      price: "13.90€",
    },
    {
      title: "Chicken dynamite",
      description: "Nouilles sautées au wok avec des crevettes, du tofu, des arachides et de la lime.",
      imageUrl: "Thai/chicken-dynamite-1.JPG",
      price: "13.90€",
    },
    {
      title: "Basilic Rice",
      description: "Nouilles sautées au wok avec des crevettes, du tofu, des arachides et de la lime.",
      imageUrl: "Thai/basilic-rice-1.JPG",
      price: "14.90€",
    },
    {
      title: "Riz cantonais",
      description: "Nouilles sautées au wok avec des crevettes, du tofu, des arachides et de la lime.",
      imageUrl: "Thai/riz-cantonais-1.JPG",
      price: "12.90€",
    },
    {
      title: "Keng kiew wan",
      description: "Nouilles sautées au wok avec des crevettes, du tofu, des arachides et de la lime.",
      imageUrl: "Thai/keng-kiew-wan-1.JPG",
      price: "12.90€",
    },
    {
      title: "Massaman",
      description: "Nouilles sautées au wok avec des crevettes, du tofu, des arachides et de la lime.",
      imageUrl: "Thai/massaman-1.JPG",
      price: "13.90€",
    },
    {
      title: "Tigre qui pleure",
      description: "Nouilles sautées au wok avec des crevettes, du tofu, des arachides et de la lime.",
      imageUrl: "Thai/tigre-qui-pleure-1.JPG",
      price: "14.90€",
    },
  ];

  const nouillesItems: SushiItemProps[] = [
    {
      title: "Pad thaï",
      description: "Soupe épicée aux crevettes avec des champignons, de la citronnelle et des épices.",
      imageUrl: "Thai/pad-thai-1.JPG",
      price: "12.90€",
    },
    {
      title: "Udon",
      description: "Soupe épicée aux crevettes avec des champignons, de la citronnelle et des épices.",
      imageUrl: "Thai/udon-1.JPG",
      price: "12.90€",
    },
    {
      title: "Mi prat",
      description: "Soupe épicée aux crevettes avec des champignons, de la citronnelle et des épices.",
      imageUrl: "Thai/mi-prat-1.JPG",
      price: "12.90€",
    },
    {
      title: "Bobun",
      description: "Soupe épicée aux crevettes avec des champignons, de la citronnelle et des épices.",
      imageUrl: "Thai/bobun2.JPG",
      price: "11.90€",
    },
  ];

  const itemsList: Record<string, SushiItemProps[]> = {
    // "Entrées": entreesItems,
    "Riz": rizItems,
    "Nouilles": nouillesItems,
  };

  const keys = Object.keys(itemsList);
  const firstKey = keys.length > 0 ? keys[0] : "";

  const activeSubmenu: SushiItemProps[] = itemsList[activeTitle] || itemsList[firstKey];

  const submenus: SidebarProps = {
    titles: Object.keys(itemsList),
    activeTitle: activeTitle,
    onTitleClick: (title: string) => setActiveTitle(title),
  };

  const handleTitleClick = (title: string) => {
    setActiveTitle(title);
  };

  return (
    <div className="container-thai">
      <h2>Menu Thai</h2>
      <Sidebar titles={submenus.titles} activeTitle={submenus.activeTitle} onTitleClick={handleTitleClick}/>
      <div className="thai-items">
        {activeSubmenu?.map((item, index) => (
          <ThaiItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

