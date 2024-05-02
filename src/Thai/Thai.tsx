// Thai.tsx
import React, { useEffect } from "react";
import "./Thai.css";
import { SushiItemProps, SidebarProps } from "../interfaces";
import "../styles/fonts.css";
import Sidebar from "../Sidebar/Sidebar";
import { useSidebar } from "../Context/SidebarContext";
import { useCart } from "../Context/CartContext";
import { Helmet } from "react-helmet";
import { Tooltip } from "react-tooltip";

const ThaiItem: React.FC<SushiItemProps> = ({ title, price, description, imageUrl, customize }) => {
  const { addToCart } = useCart();
  const meat: string= "Personnalisez votre viande: choix en bas de page";
  const item = { title, price, description, imageUrl };

  return (
    <div className="menu-item">
      <img className="ItemImage" src={imageUrl} alt={title} />
      <div className="ItemDetails">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="meal-info">
          <p className="itemPrice">{price}€</p>
          {customize === true ?
          <><span className="info-meat" data-tooltip-id="my-tooltip" data-tooltip-content={meat} data-tooltip-place="bottom">
            <img src="infobull.png" alt="Personnalisez votre viande" />
          </span>
          <Tooltip id="my-tooltip" className="infobulle"/></> : null}
        </div>
      </div>
      <div className="add-container" onClick={() => addToCart(item)}>
        <img className="add-cart" src="Logo-plus.png" />
      </div>
    </div>
  );
};

export const Thai: React.FC = () => {
  const { activeTitle, setActiveTitle } = useSidebar();

  const rizItems: SushiItemProps[] = [
    {
      title: "KHAO PRAT",
      description: "Riz sauté au légume.",
      imageUrl: "Thai/khao-prat.jpg",
      price: "12.90",
      customize: true,
    },
    {
      title: "LOKLAK",
      description: "Riz rouge sauté à l'ail et son boeuf assaisonné façon cambodgienne.",
      imageUrl: "Thai/loc lac.jpg",
      price: "14.90",
    },
    {
      title: "POULET CURRY KATSU",
      description: "Curry japonnais, pomme de terre et carotte parsemé d'emmental rapé et son poulet croustillant.",
      imageUrl: "Thai/poulet curry katsu.jpg",
      price: "12.90",
    },
    {
      title: "CREVETTES DYNAMITE",
      description: "Crevette croustillante sauce spicy maison accompagné de son riz rouge à l'ail.",
      imageUrl: "Thai/crevette-dynamite-1.jpg",
      price: "13.90",
    },
    {
      title: "CHICKEN DYNAMITE",
      description: "Poulet croustillant sauce spicy maison accompagné de son riz rouge à l'ail.",
      imageUrl: "Thai/chicken-dynamite-1.jpg",
      price: "13.90",
    },
    {
      title: "BASILIC RICE",
      description: "Riz blanc et ses légumes sautés au basilic.",
      imageUrl: "Thai/basilic-rice-1.jpg",
      price: "14.90",
      customize: true,
    },
    {
      title: "RIZ CANTONAIS",
      description: "Riz blanc parfumé, oeuf, petits pois morceaux de jambon accompagné d'une viande au choix.",
      imageUrl: "Thai/riz-cantonais-1.jpg",
      price: "12.90",
      customize: true,
    },
    {
      title: "KENG KIEW WAN",
      description: "Riz blanc recouvert d'une sauce curry vert au lait de coco.",
      imageUrl: "Thai/keng-kiew-wan-1.jpg",
      price: "12.90",
      customize: true,
    },
    {
      title: "MASSAMAN",
      description: "Riz blanc recouvert d'une sauce lait de coco curry jaune, pomme de terre carotte.",
      imageUrl: "Thai/massaman-1.jpg",
      price: "13.90",
      customize: true,
    },
    {
      title: "TIGRE QUI PLEURE",
      description: "Viande assaisonnée coupé en lamelles avec sa sauce thaï piquante.",
      imageUrl: "Thai/tigre-qui-pleure-1.jpg",
      price: "14.90",
    },
  ];

  const nouillesItems: SushiItemProps[] = [
    {
      title: "PAD THAÏ",
      description: "Nouilles de riz sauté à la thaïlandaise.",
      imageUrl: "Thai/pad-thai-1.jpg",
      price: "12.90",
      customize: true,
    },
    {
      title: "UDON",
      description: "Nouilles de riz sautées à la japonaise et ses légumes.",
      imageUrl: "Thai/udon-1.jpg",
      price: "12.90",
      customize: true,
    },
    {
      title: "MI PRAT",
      description: "Nouilles de blé fine sautées aux légumes.",
      imageUrl: "Thai/mi-prat-1.jpg",
      price: "12.90",
      customize: true,
    },
    {
      title: "BOBUN",
      description: "Vermicelle, salade mélangé, concombre, tomate cerise, oignon rouge oignon frit, cacahuètes, nems crevettes ou poulet.",
      imageUrl: "Thai/bobun2.jpg",
      price: "11.90",
      customize: false,
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
      <div className="meat-list">
        <p><strong>Viande au choix : (option Wok disponible)</strong></p>

        <p>Poulet Mariné   -   Poulet crispy   -   Crevette   -   Crevette crispy   -   Boeuf   -   Veggie   -   Saumon crispy (supplément)</p>
      </div>
    </div>
  );
};

