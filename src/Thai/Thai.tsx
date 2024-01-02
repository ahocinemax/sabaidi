// Thai.tsx
import React from "react";
import "./Thai.css";
import { ThaiItemProps } from "../interfaces";

const ThaiItem: React.FC<ThaiItemProps> = ({ name, description, image1, image2 }) => {
    return (
      <div className="ThaiItem">
        <div className="ImageContainer">
          <img className="ItemImage" src={image1} alt={name} />
          <div className="HoverText">{description}</div>
        </div>
        <img className="HoverImage" src={image2} alt={name} />
        <div className="ItemDetails">
          <h3>{name}</h3>
        </div>
      </div>
    );
  };

export const Thai: React.FC = () => {
    const thaiItems = [
        {
          name: "Pad Thai",
          description: "Nouilles sautées au wok avec des crevettes, du tofu, des arachides et de la lime.",
          image1: "thai1.jpg",
          image2: "thai1-hover.jpg",
        },
        {
          name: "Tom Yum",
          description: "Soupe épicée aux crevettes avec des champignons, de la citronnelle et des épices.",
          image1: "thai2.jpg",
          image2: "thai2-hover.jpg",
        },
        {
          name: "Massaman Curry",
          description: "Curry au bœuf avec des pommes de terre, des arachides et du lait de coco.",
          image1: "thai1.jpg",
          image2: "thai1-hover.jpg",
        },
        {
          name: "Som Tum",
          description: "Salade de papaye verte épicée avec des tomates, des haricots verts et des arachides.",
          image1: "thai2.jpg",
          image2: "thai2-hover.jpg",
        },
        {
          name: "Khao Pad",
          description: "Riz sauté avec des légumes, des œufs et votre choix de viande ou de tofu.",
          image1: "thai1.jpg",
          image2: "thai1-hover.jpg",
        },
        {
          name: "Gai Pad Krapow",
          description: "Poulet sauté au basilic thaï avec du piment et de l'ail.",
          image1: "thai2.jpg",
          image2: "thai2-hover.jpg",
        },
        {
          name: "Larb Moo",
          description: "Salade de porc haché épicée avec de la menthe, des oignons et des épices.",
          image1: "thai1.jpg",
          image2: "thai1-hover.jpg",
        },
        {
          name: "Panang Curry",
          description: "Curry au poulet avec des feuilles de citron vert, des arachides et du lait de coco.",
          image1: "thai2.jpg",
          image2: "thai2-hover.jpg",
        },
      ];
      

  return (
    <div className="Thai">
      {thaiItems.map((item, index) => (
        <ThaiItem key={index} {...item} />
      ))}
    </div>
  );
};
