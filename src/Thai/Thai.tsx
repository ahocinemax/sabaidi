// Thai.tsx
import React, { useEffect } from "react";
import "./Thai.css";
import { SushiItemProps, SidebarProps } from "../interfaces";
import "../styles/fonts.css";
import Sidebar from "../Sidebar/Sidebar";
import { useSidebar } from "../Context/SidebarContext";
import { Helmet } from "react-helmet";

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

  const rizItems: SushiItemProps[] = [
    {
      title: "Khao Prat",
      description: "Nouilles sautées au wok avec des crevettes, du tofu, des arachides et de la lime.",
      imageUrl: "Thai/khao-prat.jpg",
      price: "12.90€",
    },
    {
      title: "Loklak",
      description: "Nouilles sautées au wok avec des crevettes, du tofu, des arachides et de la lime.",
      imageUrl: "Thai/loc lac.jpg",
      price: "14.90€",
    },
    {
      title: "Poulet curry katsu",
      description: "Nouilles sautées au wok avec des crevettes, du tofu, des arachides et de la lime.",
      imageUrl: "poulet curry katsu.jpg",
      price: "14.90€",
    },
    {
      title: "Crevettes dynamite",
      description: "Nouilles sautées au wok avec des crevettes, du tofu, des arachides et de la lime.",
      imageUrl: "Thai/crevette-dynamite-1.jpg",
      price: "13.90€",
    },
    {
      title: "Chicken dynamite",
      description: "Nouilles sautées au wok avec des crevettes, du tofu, des arachides et de la lime.",
      imageUrl: "Thai/chicken-dynamite-1.jpg",
      price: "13.90€",
    },
    {
      title: "Basilic Rice",
      description: "Nouilles sautées au wok avec des crevettes, du tofu, des arachides et de la lime.",
      imageUrl: "Thai/basilic-rice-1.jpg",
      price: "14.90€",
    },
    {
      title: "Riz cantonais",
      description: "Nouilles sautées au wok avec des crevettes, du tofu, des arachides et de la lime.",
      imageUrl: "Thai/riz-cantonais-1.jpg",
      price: "12.90€",
    },
    {
      title: "Keng kiew wan",
      description: "Nouilles sautées au wok avec des crevettes, du tofu, des arachides et de la lime.",
      imageUrl: "Thai/keng-kiew-wan-1.jpg",
      price: "12.90€",
    },
    {
      title: "Massaman",
      description: "Nouilles sautées au wok avec des crevettes, du tofu, des arachides et de la lime.",
      imageUrl: "Thai/massaman-1.jpg",
      price: "13.90€",
    },
    {
      title: "Tigre qui pleure",
      description: "Nouilles sautées au wok avec des crevettes, du tofu, des arachides et de la lime.",
      imageUrl: "Thai/tigre-qui-pleure-1.jpg",
      price: "14.90€",
    },
  ];

  const nouillesItems: SushiItemProps[] = [
    {
      title: "Pad thaï",
      description: "Soupe épicée aux crevettes avec des champignons, de la citronnelle et des épices.",
      imageUrl: "Thai/pad-thai-1.jpg",
      price: "12.90€",
    },
    {
      title: "Udon",
      description: "Soupe épicée aux crevettes avec des champignons, de la citronnelle et des épices.",
      imageUrl: "Thai/udon-1.jpg",
      price: "12.90€",
    },
    {
      title: "Mi prat",
      description: "Soupe épicée aux crevettes avec des champignons, de la citronnelle et des épices.",
      imageUrl: "Thai/mi-prat-1.jpg",
      price: "12.90€",
    },
    {
      title: "Bobun",
      description: "Soupe épicée aux crevettes avec des champignons, de la citronnelle et des épices.",
      imageUrl: "Thai/bobun2.jpg",
      price: "11.90€",
    },
  ];

  const itemsList: Record<string, SushiItemProps[]> = {
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
      <Helmet>
        <title>Menu Thaï - Sabaidi</title>
      </Helmet>
      <h2>Menu Thaïlandais</h2>
      <Sidebar titles={submenus.titles} activeTitle={submenus.activeTitle} onTitleClick={handleTitleClick}/>
      <div className="thai-items">
        {activeSubmenu?.map((item, index) => (
          <ThaiItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

