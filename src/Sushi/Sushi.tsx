import React, { useEffect } from "react";
import "./Sushi.css";
import "../styles/fonts.css";
import { SushiItemProps, SidebarProps } from "../interfaces";
import Sidebar from "../Sidebar/Sidebar";
import { useSidebar } from "../Context/SidebarContext";

export const Sushi = () => {
  const { activeTitle, setActiveTitle } = useSidebar();

  const yakitoriItems: SushiItemProps[] = [
    {
      imageUrl: "coming-soon.jpg",
      title: "Yakitori X",
      description: "Sushi au saumon et à l'avocat.",
      price: "13.99",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "Yakitori X",
      description: "Sushi au saumon et à l'avocat.",
      price: "13.99",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "Yakitori X",
      description: "Sushi au saumon et à l'avocat.",
      price: "13.99",
    },
  ];

  const pokeItems: SushiItemProps[] = [
    {
      imageUrl: "Jap/poke-chicken-2.JPG",
      title: "Poulet",
      description: "Sushi au thon épicé et à l'avocat.",
      price: "12.90",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "Thaï",
      description: "Sushi au saumon et à l'avocat.",
      price: "13.90",
    },
    {
      imageUrl: "Jap/poke-saumon-2.JPG",
      title: "Saumon",
      description: "Sushi avec avocat et crevette.",
      price: "13.90",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "Saumon tataki",
      description: "Sushi au saumon et à l'avocat.",
      price: "13.90",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "Pavé de saumon",
      description: "Sushi au saumon et à l'avocat.",
      price: "14.90",
    },
    {
      imageUrl: "Jap/poke-crevette.JPG",
      title: "Crevette",
      description: "Sushi au saumon et à l'avocat.",
      price: "14.90",
    },
  ];

  const chirachiItems: SushiItemProps[] = [
    {
      imageUrl: "coming-soon.jpg",
      title: "Poulet mayo ou thon cuit avocat",
      description: "Sushi au saumon et à l'avocat.",
      price: "12.90",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "Poulet croustillant avocat",
      description: "Sushi au saumon et à l'avocat.",
      price: "13.90",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "Saumon",
      description: "Sushi au saumon et à l'avocat.",
      price: "14.90",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "Saumon avocat",
      description: "Sushi au saumon et à l'avocat.",
      price: "15.90",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "Saumon snacké avocat",
      description: "Sushi au saumon et à l'avocat.",
      price: "16.20",
    },
  ];

  const tartareItems: SushiItemProps[] = [
    {
      imageUrl: "Jap/tartare-ceviche-2.JPG",
      title: "Poulet mayo avocat cheese",
      description: "Sushi au saumon et à l'avocat.",
      price: "9.90",
    },
    {
      imageUrl: "Jap/tartare-ceviche.JPG",
      title: "Saumon mango ciboulette spicy",
      description: "Sushi au saumon et à l'avocat.",
      price: "10.90",
    },
    {
      imageUrl: "Jap/tartare-ceviche-2.JPG",
      title: "Saumon snacké avocat cheese",
      description: "Sushi au saumon et à l'avocat.",
      price: "10.90",
    },
    {
      imageUrl: "Jap/tartare-ceviche.JPG",
      title: "Thon cuit mayo avocat",
      description: "mangue, oignon rouge, menthe, coriandre, ciboulette, citron, 7 épices.",
      price: "12.90",
    },
    {
      imageUrl: "Jap/tartare-ceviche.JPG",
      title: "Thon cuit mayo avocat",
      description: "mangue, oignon rouge, menthe, coriandre, ciboulette, citron, 7 épices.",
      price: "12.90",
    },
  ];

  const sashimiItems : SushiItemProps[] = [
    {
      imageUrl: "coming-soon.jpg",
      title: "Saumon mango ciboulette spicy",
      description: "Sushi au saumon et à l'avocat.",
      price: "10.90",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "Saumon snacké avocat cheese",
      description: "Sushi au saumon et à l'avocat.",
      price: "10.90",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "Poulet mayo avocat cheese",
      description: "Sushi au saumon et à l'avocat.",
      price: "9.90",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "Thon cuit mayo avocat",
      description: "mangue, oignon rouge, menthe, coriandre, ciboulette, citron, 7 épices.",
      price: "12.90",
    },
  ]

  const sushiItems: SushiItemProps[] = [
    {
      imageUrl: "coming-soon.jpg",
      title: "Sushi X",
      description: "Sushi avec avocat et crevette.",
      price: "14.99",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "Sushi X",
      description: "Sushi au thon épicé, une explosion de saveurs.",
      price: "15.99",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "Sushi X",
      description: "Sushi au saumon et à l'avocat.",
      price: "13.99",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "Sushi X",
      description: "Sushi au saumon et à l'avocat.",
      price: "13.99",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "Sushi X",
      description: "Sushi au saumon et à l'avocat.",
      price: "13.99",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "Sushi X",
      description: "Sushi au saumon et à l'avocat.",
      price: "13.99",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "Sushi X",
      description: "Sushi au saumon et à l'avocat.",
      price: "13.99",
    },
  ];

  const plateauxItems: SushiItemProps[] = [
    {
      imageUrl: "Jap/P1-2.JPG",
      title: "P1. Sushi time",
      description: "6 Sushi saumon\
      6 Sushi saumon snacké",
      price: "11.90",
    },
    {
      imageUrl: "Jap/P2-2.JPG",
      title: "P2. Sabaidi love",
      description: "6 Sushi saumon\
      6 California saumon avocat",
      price: "10.90",
    },
    {
      imageUrl: "Jap/P3-2.JPG",
      title: "P3. Salmon classic",
      description: "10 sushi saumon",
      price: "15.50",
    },
    {
      imageUrl: "Jap/P4-2.JPG",
      title: "P4. Salmon lover",
      description: "6 Salmon roll cheese\
      6 California saumon avocat\
      6 Maki saumon",
      price: "14.50",
    },
    {
      imageUrl: "Jap/P6-2.JPG",
      title: "P6. Crispy dream",
      description: "6 Crispy roll saumon avocat\
      6 Crispy roll thon mayo avocat\
      6 Crispy roll poulet mayo avocat",
      price: "16.50",
    },
    {
      imageUrl: "Jap/P5-2.JPG",
      title: "P5. Full mix",
      description: "6 Avocado tempura cheese\
      6 Spring saumon avocat\
      6 Crispy Roll poulet mayo avocat\
      6 Egg Roll crevette avocat",
      price: "17.90",
    },
    {
      imageUrl: "Jap/P7-2.JPG",
      title: "P7. California deam",
      description: "6 California saumon avocat\
      6 California thon mayo avocat\
      6 California poulet mayo avocat",
      price: "17.90",
    },
    {
      imageUrl: "Jap/P8-2.JPG",
      title: "P8. Fresh salmon",
      description: "6 Salmon Roll cheese\
      6 Salmon Roll avocat cheese\
      6 Salmon Roll saumon fumé cheese\
      6 Salmon Roll concombre cheese",
      price: "21.90",
    },
    {
      imageUrl: "Jap/P9-2.JPG",
      title: "P9. PP",
      description: "6 Pané roll saumon cheese spicy\
      6 Pané roll tempura cheese spicy\
      6 Pané roll poulet mayo avocat spicy",
      price: "21",
    },
  ];

  const signaturesItems: SushiItemProps[] = [
    {
      imageUrl: "Jap/roll-chicken-dynamite-2.JPG",
      title: "SR1. Dynamite chicken \"R\"",
      description: "California poulet mayo, avocat, concombre, recouvert de poulet dynamite, spicy sauce.",
      price: "10.90",
    },
    {
      imageUrl: "Jap/roll-saumon-crevette-2.JPG",
      title: "SR2. Salmon shrimp roll",
      description: "Tempura, salade, avocat, boursin, crevette, recouvert de saumon.",
      price: "11.90",
    },
    {
      imageUrl: "Jap/roll-mango-2.JPG",
      title: "SR3. Mango roll",
      description: "California saumon, cheese, salade, recouvert de mangue et avocat, spicy sauce, ciboulette.",
      price: "12.90",
    },
    {
      imageUrl: "Jap/roll-tyger-2.JPG",
      title: "SR4. Tyger roll",
      description: "Tempura, cheese, concombre, recouvert de saumon snacké avocado spicy sauce.",
      price: "12.90",
    },
    {
      imageUrl: "Jap/roll-nachos-2.JPG",
      title: "SR5. Nachos roll",
      description: "Boeuf assaisonné, avocat, poivrons, spicy sauce, saumon braisé on the top.",
      price: "13.90",
    },
    {
      imageUrl: "Jap/sumo-pane-thai-2.JPG",
      title: "SP1. Sumo thaï",
      description: "Avocat, cheese, concombre, poulet saté, recouvert de cacahuètes.",
      price: "11.90",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "SP2. Sumo Kai",
      description: "Poulet mayo, avocat, poulet pané, cheese.",
      price: "13.90",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "SP3. Sumo saumon",
      description: "Avocat, saumon cheese, saumon fumé.",
      price: "13.90",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "SP4. Sumo Saint-Jacques",
      description: "Surimi, avocat, cheese, crevettes, Saint Jacques braisés on the top.",
      price: "14.90",
    },
    {
      imageUrl: "Jap/sumo-kung-2.JPG",
      title: "SP5. Sumo kung",
      description: "Crevette, avocat, cheese, tempura, surimi.",
      price: "14.90",
    },
  ];

  const itemsList: Record<string, SushiItemProps[]> = {
    "Tartare": tartareItems,
    "Yakitori": yakitoriItems,
    "Poké": pokeItems,
    "Chirachi": chirachiItems,
    "Sashimi": sashimiItems,
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

  const handleTitleClick = (title: string) => {
    setActiveTitle(title);
  };
          
  return (
    <div className="menu-section">
      <h2>Menu Japonais</h2>
      <Sidebar titles={submenus.titles} activeTitle={submenus.activeTitle} onTitleClick={handleTitleClick}/>
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
