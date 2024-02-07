// Thai.tsx
import React, { useState } from "react";
import "./Thai.css";
import { ThaiItemProps, SidebarProps } from "../interfaces";
import "../styles/fonts.css";
import Sidebar from "../Sidebar/Sidebar";

const ThaiPopup: React.FC<ThaiItemProps & { onClose: () => void }> = ({ name, price, description, image1, image2, onClose }) => {
  return (
    <div className={"ThaiPopup"} onClick={onClose}>
      <div className="PopupContent">
        <div className="ImageContainer">
          <img className="PopupImage" src={image1} alt={name} />
        </div>
        <div className="PopupDetails">
          <h3>{name}</h3>
          <p>{description}</p>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
}

const ThaiItem: React.FC<ThaiItemProps & { onClick: () => void }> = ({ name, price, description, image1, image2, onClick }) => {
  return (
    <div className="menu-item" onClick={onClick}>
      <img className="ItemImage" src={image1} alt={name} />
      <div className="ItemDetails">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export const Thai: React.FC = () => {
  const thaiItems = [
    {
      name: "Panang Curry",
      description: "Nouilles sautées au wok avec des crevettes, du tofu, des arachides et de la lime.",
      image1: "poke1.png",
      image2: "poke2.png",
      price: "12.99€",
    },
    {
      name: "Gai Pad Krapow",
      description: "Soupe épicée aux crevettes avec des champignons, de la citronnelle et des épices.",
      image1: "poke2.png",
      image2: "poke3.png",
      price: "12.99€",
    },
    {
      name: "Massaman Curry",
      description: "Curry au bœuf avec des pommes de terre, des arachides et du lait de coco.",
      image1: "poke1.png",
      image2: "poke2.png",
      price: "12.99€",
    },
    {
      name: "Som Tum",
      description: "Salade de papaye verte épicée avec des tomates, des haricots verts et des arachides.",
      image1: "poke2.png",
      image2: "poke3.png",
      price: "12.99€",
    },
    {
      name: "Khao Pad",
      description: "Riz sauté avec des légumes, des œufs et votre choix de viande ou de tofu.",
      image1: "poke1.png",
      image2: "poke2.png",
      price: "12.99€",
    },
    {
      name: "Tom Yum",
      description: "Poulet sauté au basilic thaï avec du piment et de l'ail.",
      image1: "poke2.png",
      image2: "poke3.png",
      price: "12.99€",
    },
    {
      name: "Larb Moo",
      description: "Salade de boeuf haché épicée avec de la menthe, des oignons et des épices.",
      image1: "poke1.png",
      image2: "poke2.png",
      price: "12.99€",
    },
    {
      name: "Pad Thai",
      description: "Curry au poulet avec des feuilles de citron vert, des arachides et du lait de coco.",
      image1: "poke2.png",
      image2: "poke3.png",
      price: "12.99€",
    },
  ];

  const submenus: SidebarProps = {
    titles: ["Curry", "Soupe", "Salade", "Riz"],
    activeTitle: "Curry",
  };

  const [selectedItem, setSelectedItem] = useState<ThaiItemProps | null>(null);

  const openPopup = (item: ThaiItemProps) => {
    setSelectedItem(item);
  };

  const closePopup = () => {
    setSelectedItem(null);
  };
  
    return (
      <div className="container-thai">
        <h2>Menu Thai</h2>
        <Sidebar titles={submenus.titles} activeTitle={submenus.activeTitle}/>
        <div className="menu-items">
          {thaiItems.map((item, index) => (
            <ThaiItem key={index} {...item} onClick={() => openPopup(item)} />
          ))}
        </div>
      </div>
    );
  };
