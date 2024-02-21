import React, { useEffect } from "react";
import "./Sushi.css";
import "../styles/fonts.css";
import { SushiItemProps, SidebarProps } from "../interfaces";
import Sidebar from "../Sidebar/Sidebar";
import { useSidebar } from "../Context/SidebarContext";

export const Sushi = () => {
  const { activeTitle, setActiveTitle } = useSidebar();

  const startersItems: SushiItemProps[] = [
    {
      imageUrl: "Starters/gyozas.JPG",
      title: "Gyozas",
      description: "Bouchées vapeur au poulet ou aux légumes.",
      price: "5.20",
    },
    {
      imageUrl: "Starters/tempuras.JPG",
      title: "Tempuras",
      description: "Crevettes décortiquées panées.",
      price: "6.20",
    },
    {
      imageUrl: "Starters/crevette-dynamite.JPG",
      title: "Crevette dynamite",
      description: "Crevettes décortiquées, accompagnés de leur sauce dynamite.",
      price: "8.90",
    },
    {
      imageUrl: "Starters/poulet-dynamite.JPG",
      title: "Poulet dynamite",
      description: "Tendres morceaux de poulet, accompagnés de leur sauce dynamite.",
      price: "7.50",
    },
  ];

  const entreesItems: SushiItemProps[] = [
    {
      imageUrl: "Starters/gyozas.JPG",
      title: "Tartare X",
      description: "Sushi avec avocat et crevette.",
      price: "14.99",
    },
    {
      imageUrl: "Starters/gyozas.JPG",
      title: "Tartare X",
      description: "Sushi au thon épicé, une explosion de saveurs.",
      price: "15.99",
    },
    {
      imageUrl: "Starters/gyozas.JPG",
      title: "Tartare X",
      description: "Sushi au saumon et à l'avocat.",
      price: "13.99",
    },
    {
      imageUrl: "Starters/gyozas.JPG",
      title: "Tartare X",
      description: "Sushi au saumon et à l'avocat.",
      price: "13.99",
    },
    {
      imageUrl: "Starters/gyozas.JPG",
      title: "Tartare X",
      description: "Sushi au saumon et à l'avocat.",
      price: "13.99",
    },
    {
      imageUrl: "Starters/gyozas.JPG",
      title: "Tartare X",
      description: "Sushi au saumon et à l'avocat.",
      price: "13.99",
    },
    {
      imageUrl: "Starters/gyozas.JPG",
      title: "Tartare X",
      description: "Sushi au saumon et à l'avocat.",
      price: "13.99",
    },
  ];

  const yakitoriItems: SushiItemProps[] = [
    {
      imageUrl: "Starters/gyozas.JPG",
      title: "Yakitori X",
      description: "Sushi au saumon et à l'avocat.",
      price: "13.99",
    },
    {
      imageUrl: "Starters/gyozas.JPG",
      title: "Yakitori X",
      description: "Sushi au saumon et à l'avocat.",
      price: "13.99",
    },
    {
      imageUrl: "Starters/gyozas.JPG",
      title: "Yakitori X",
      description: "Sushi au saumon et à l'avocat.",
      price: "13.99",
    },
  ];

  const pokeItems: SushiItemProps[] = [
    {
      imageUrl: "Jap/poke chicken.JPG",
      title: "Poulet",
      description: "Sushi au thon épicé, une explosion de saveurs.",
      price: "15.99",
    },
    {
      imageUrl: "Jap/poke-crevette.JPG",
      title: "Crevette",
      description: "Sushi au saumon et à l'avocat.",
      price: "13.99",
    },
    {
      imageUrl: "Jap/poke saumon.JPG",
      title: "Saumon",
      description: "Sushi avec avocat et crevette.",
      price: "14.99",
    },
    {
      imageUrl: "Jap/gyozas.JPG",
      title: "Saumon tataki",
      description: "Sushi au saumon et à l'avocat.",
      price: "13.99",
    },
    {
      imageUrl: "Jap/gyozas.JPG",
      title: "Pavé de saumon",
      description: "Sushi au saumon et à l'avocat.",
      price: "13.99",
    },
    {
      imageUrl: "Jap/gyozas.JPG",
      title: "Thaï",
      description: "Sushi au saumon et à l'avocat.",
      price: "13.99",
    },
  ];

  const sushiItems: SushiItemProps[] = [
    {
      imageUrl: "Jap/gyozas.JPG",
      title: "Sushi X",
      description: "Sushi avec avocat et crevette.",
      price: "14.99",
    },
    {
      imageUrl: "Jap/gyozas.JPG",
      title: "Sushi X",
      description: "Sushi au thon épicé, une explosion de saveurs.",
      price: "15.99",
    },
    {
      imageUrl: "Jap/gyozas.JPG",
      title: "Sushi X",
      description: "Sushi au saumon et à l'avocat.",
      price: "13.99",
    },
    {
      imageUrl: "Jap/gyozas.JPG",
      title: "Sushi X",
      description: "Sushi au saumon et à l'avocat.",
      price: "13.99",
    },
    {
      imageUrl: "Jap/gyozas.JPG",
      title: "Sushi X",
      description: "Sushi au saumon et à l'avocat.",
      price: "13.99",
    },
    {
      imageUrl: "Jap/gyozas.JPG",
      title: "Sushi X",
      description: "Sushi au saumon et à l'avocat.",
      price: "13.99",
    },
    {
      imageUrl: "Jap/gyozas.JPG",
      title: "Sushi X",
      description: "Sushi au saumon et à l'avocat.",
      price: "13.99",
    },
  ];

  const chirachiItems: SushiItemProps[] = [
    {
      imageUrl: "Starters/gyozas.JPG",
      title: "Chirachi X",
      description: "Sushi au saumon et à l'avocat.",
      price: "13.99",
    },
    {
      imageUrl: "Starters/gyozas.JPG.png",
      title: "Chirachi X",
      description: "Sushi au saumon et à l'avocat.",
      price: "13.99",
    },
    {
      imageUrl: "Starters/gyozas.JPG",
      title: "Chirachi X",
      description: "Sushi au saumon et à l'avocat.",
      price: "13.99",
    },
  ];

  const plateauxItems: SushiItemProps[] = [
    {
      imageUrl: "Starters/gyozas.JPG",
      title: "Sashimi X",
      description: "Sushi au saumon et à l'avocat.",
      price: "13.99",
    },
    {
      imageUrl: "Starters/gyozas.JPG",
      title: "Sashimi X",
      description: "Sushi au saumon et à l'avocat.",
      price: "13.99",
    },
    {
      imageUrl: "Starters/gyozas.JPG",
      title: "Sashimi X",
      description: "Sushi au saumon et à l'avocat.",
      price: "13.99",
    },
  ];

  const signaturesItems: SushiItemProps[] = [
    {
      imageUrl: "Starters/gyozas.JPG",
      title: "Sashimi X",
      description: "Sushi au saumon et à l'avocat.",
      price: "13.99",
    },
    {
      imageUrl: "Starters/gyozas.JPG",
      title: "Sashimi X",
      description: "Sushi au saumon et à l'avocat.",
      price: "13.99",
    },
    {
      imageUrl: "Starters/gyozas.JPG",
      title: "Sashimi X",
      description: "Sushi au saumon et à l'avocat.",
      price: "13.99",
    },
  ];

  const itemsList: Record<string, SushiItemProps[]> = {
    "Starters": startersItems,
    "Entrees": entreesItems,
    "Yakitori": yakitoriItems,
    "Poké": pokeItems,
    "Chirachi": chirachiItems,
    "Sushis": sushiItems,
    "Plateaux": plateauxItems,
    "Signatures": signaturesItems,
  };

  const keys = Object.keys(itemsList);
  const firstKey = keys.length > 0 ? keys[0] : "";

  const activeSubmenu: SushiItemProps[] = itemsList[activeTitle] || itemsList[firstKey];
  
  const submenus: SidebarProps = {
    titles: Object.keys(itemsList),
    activeTitle: activeTitle,
    onTitleClick: (title: string) => setActiveTitle(title),
  };

  const handleSidebarClick = (title: string) => {
    setActiveTitle(title);
  };

  return (
    <div className="menu-section">
      <h2>Menu Japonais</h2>
      <Sidebar titles={submenus.titles} activeTitle={submenus.activeTitle} onTitleClick={handleSidebarClick}/>
      <div className="menu-items">
        {activeSubmenu?.map((item, index) => (
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
