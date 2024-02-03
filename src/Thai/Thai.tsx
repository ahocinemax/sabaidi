// Thai.tsx
import React, { useState } from "react";
import "./Thai.css";
import { ThaiItemProps } from "../interfaces";
import "../styles/fonts.css";

const ThaiPopup: React.FC<ThaiItemProps & { onClose: () => void }> = ({ name, description, image1, image2, onClose }) => {
  return (
    <div className={"ThaiPopup"} onClick={onClose}>
      <div className="PopupContent">
        <div className="ImageContainer">
          <img className="PopupImage" src={image1} alt={name} />
        </div>
        <div className="PopupDetails">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

const ThaiItem: React.FC<ThaiItemProps & { onClick: () => void }> = ({ name, image1, image2, onClick }) => {
  return (
    <div className="ThaiItem" onClick={onClick}>
      <div className="ItemContainer">
        <img className="ItemImage" src={image1} alt={name} />
        <div className="ItemDetails">
          <h3>{name}</h3>
        </div>
      </div>
      <img className="HoverImage" src={image2} alt={name} />
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
    },
    {
      name: "Gai Pad Krapow",
      description: "Soupe épicée aux crevettes avec des champignons, de la citronnelle et des épices.",
      image1: "poke2.png",
      image2: "poke3.png",
    },
    {
      name: "Massaman Curry",
      description: "Curry au bœuf avec des pommes de terre, des arachides et du lait de coco.",
      image1: "poke1.png",
      image2: "poke2.png",
    },
    {
      name: "Som Tum",
      description: "Salade de papaye verte épicée avec des tomates, des haricots verts et des arachides.",
      image1: "poke2.png",
      image2: "poke3.png",
    },
    {
      name: "Khao Pad",
      description: "Riz sauté avec des légumes, des œufs et votre choix de viande ou de tofu.",
      image1: "poke1.png",
      image2: "poke2.png",
    },
    {
      name: "Tom Yum",
      description: "Poulet sauté au basilic thaï avec du piment et de l'ail.",
      image1: "poke2.png",
      image2: "poke3.png",
    },
    {
      name: "Larb Moo",
      description: "Salade de boeuf haché épicée avec de la menthe, des oignons et des épices.",
      image1: "poke1.png",
      image2: "poke2.png",
    },
    {
      name: "Pad Thai",
      description: "Curry au poulet avec des feuilles de citron vert, des arachides et du lait de coco.",
      image1: "poke2.png",
      image2: "poke3.png",
    },
  ];

  const [selectedItem, setSelectedItem] = useState<ThaiItemProps | null>(null);

  const openPopup = (item: ThaiItemProps) => {
    setSelectedItem(item);
  };

  const closePopup = () => {
    setSelectedItem(null);
  };
  
    return (
      <div className="container-thai">
        <div className="Thai">
          {thaiItems.map((item, index) => (
            <ThaiItem key={index} {...item} onClick={() => openPopup(item)} />
          ))}
          {selectedItem && <ThaiPopup {...selectedItem} onClose={closePopup} />}
        </div>
      </div>
    );
  };
