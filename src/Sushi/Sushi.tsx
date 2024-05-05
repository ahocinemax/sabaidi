import React from "react";
import "./Sushi.css";
import "../styles/fonts.css";
import { SushiItemProps, SidebarProps, ComposeItemProps } from "../interfaces";
import Sidebar from "../Sidebar/Sidebar";
import { useSidebar } from "../Context/SidebarContext";
import { useCart } from "../Context/CartContext";
import { Helmet } from "react-helmet";
import { DynamicContainer } from "../DynamicContainer/DynamicContainer";
import MenuItem from "../data/jap.json";
import composeRoll from "../data/composeRoll.json"

export const Sushi = () => {
  const { activeTitle, setActiveTitle } = useSidebar();
  const { addToCart } = useCart();

  const itemsList: Record<string, SushiItemProps[]> = {
    "Signatures": MenuItem.signatures,
    "Plateaux": MenuItem.plateaux,
    // "Compose ton roll": [],
    "Poké": MenuItem.poke,
    "Yakitori": MenuItem.yakitori,
    "Formules": MenuItem.formules,
    "Tartare": MenuItem.tartare,
    "Chirachi": MenuItem.chirachi,
    "Sashimi": MenuItem.sashimi,
    "Sushis": MenuItem.sushi,
    "Tacos": MenuItem.tacos,
  };

  const composeProps: ComposeItemProps[] = composeRoll;

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
    <div className="menu-section">
      <Helmet>
        <title>Menu Jap' - Sabaidi</title>
      </Helmet>
      <h2>Menu Japonais</h2>
      <Sidebar titles={submenus.titles} activeTitle={submenus.activeTitle} onTitleClick={handleTitleClick}/>
      <div className="menu-items">
        { activeTitle === "Compose ton roll" && <div className="compose-details">
          <h1>Compose ton roll ! </h1>
        </div>}

        {activeTitle === "Compose ton roll" ?
          <DynamicContainer className="compose-ton-roll-container" props={composeProps}/>
            : 
          ( activeSubmenu?.map((item, index) => (
            <div className="menu-item" key={index}>
              <img className="item-image" src={item.imageUrl} alt="Sushi" />
              <div className="menu-item-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>{item.price}€</p>
              </div>
              {/* <div className="add-container" onClick={() => addToCart(item)}>
                <img className="add-cart" src="Logo-plus.png" />
              </div> */}
            </div>
          )))
        }
      </div>
    </div>
  );
};
