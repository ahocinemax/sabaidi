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
      name: "Plat 1",
      description: "Description du plat 1",
      image1: "thai1.jpg",
      image2: "thai1-hover.jpg",
    },
    {
      name: "Plat 2",
      description: "Description du plat 2",
      image1: "thai2.jpg",
      image2: "thai2-hover.jpg",
    },
    {
        name: "Plat 3",
        description: "Description du plat 3",
        image1: "thai1.jpg",
        image2: "thai1-hover.jpg",
    },
    {
        name: "Plat 4",
        description: "Description du plat 4",
        image1: "thai2.jpg",
        image2: "thai2-hover.jpg",
    },
    {
        name: "Plat 5",
        description: "Description du plat 5",
        image1: "thai1.jpg",
        image2: "thai1-hover.jpg",
    },
    {
        name: "Plat 6",
        description: "Description du plat 6",
        image1: "thai2.jpg",
        image2: "thai2-hover.jpg",
    },
    {
        name: "Plat 7",
        description: "Description du plat 7",
        image1: "thai1.jpg",
        image2: "thai1-hover.jpg",
    },
    {
        name: "Plat 8",
        description: "Description du plat 8",
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
