import React from "react";
import "./Sushi.css";
import "../styles/fonts.css";
import { SushiItemProps, SidebarProps } from "../interfaces";
import Sidebar from "../Sidebar/Sidebar";
import { useSidebar } from "../Context/SidebarContext";
import { Helmet } from "react-helmet";
import { DynamicContainer } from "../DynamicContainer/DynamicContainer";

export const Sushi = () => {
  const { activeTitle, setActiveTitle } = useSidebar();

  const yakitoriItems: SushiItemProps[] = [
    {
      imageUrl: "coming-soon.jpg",
      title: "Boeuf fromage",
      description: "2 brochettes de boeuf et fromage.",
      price: "5.50",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "Boeuf fromage pané",
      description: "2 brochettes panées de boeuf et fromage.",
      price: "6.20",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "Poulet caramélisé",
      description: "2 brochettes de poulet haché caramélisées.",
      price: "4.50",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "Poulet mariné",
      description: "2 brochettes de poulet mariné.",
      price: "5.20",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "Saumon",
      description: "2 brochettes de saumon grillé.",
      price: "5.20",
    },
  ];

  const tartareItems: SushiItemProps[] = [
    {
      imageUrl: "Jap/tartare-ceviche-2.jpg",
      title: "Poulet mayo avocat cheese",
      description: "Tartare de poulet à la mayonnaise, avocat et fromage.",
      price: "9.90",
    },
    {
      imageUrl: "Jap/tartare-ceviche.jpg",
      title: "Saumon mango ciboulette spicy",
      description: "Tartare de saumon à la mangue, ciboulette et épices.",
      price: "10.90",
    },
    {
      imageUrl: "Jap/tartare-ceviche-2.jpg",
      title: "Saumon snacké avocat cheese",
      description: "Tartare de saumon snacké à l'avocat et fromage.",
      price: "10.90",
    },
    {
      imageUrl: "Jap/tartare-ceviche.jpg",
      title: "Thon cuit mayo avocat",
      description: "Tartare de thon cuit à la mayonnaise et avocat.",
      price: "12.90",
    },
    {
      imageUrl: "Jap/tartare-ceviche.jpg",
      title: "Saumon avocat ceviche",
      description: "Tartare de saumon et d'avocat façon ceviche, avec mangue, oignon rouge, menthe, coriandre, ciboulette, citron et 7 épices.",
      price: "12.90",
    },
  ];

  const pokeItems: SushiItemProps[] = [
    {
      imageUrl: "Jap/poke-chicken-2.jpg",
      title: "Poulet",
      description: "Poulet croustillant, avocat, carotte, concombre, cheese, oignon frit, oignon rouge, ciboulette, tomate cerise, sauce maison mayo spicy.",
      price: "12.90",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "Thaï",
      description: "Poulet thaï saté, avocat, carotte, poivrons, cacahuètes, oignon frit, oignon rouge, pousse de soja, tomate cerise, sauce maison mayo spicy.",
      price: "13.90",
    },
    {
      imageUrl: "Jap/poke-saumon-2.jpg",
      title: "Saumon",
      description: "Saumon frais, avocat, mangue, concombre, edamame, oignon rouge, oignon frit, ciboulette, tomate cerise, sauce teriyaki.",
      price: "13.90",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "Saumon tataki",
      description: "Saumon tataki, avocat, mangue, concombre, edamame, oignon rouge, oignon frit, ciboulette, tomate cerise, sauce sésame, sauce teriyaki.",
      price: "13.90",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "Pavé de saumon",
      description: "Pavé de saumon, avocat, mangue, concombre, edamame, oignon frit, oignon rouge, ciboulette, tomate cerise, sauce teriyaki.",
      price: "14.90",
    },
    {
      imageUrl: "Jap/poke-crevette.jpg",
      title: "Crevette",
      description: "Crevettes fraîches & tempura, avocat, iceberg, concombre, cheese, oignon frit, ciboulette, tomate cerise, sauce maison mayo spicy.",
      price: "14.90",
    },
  ];

  const chirachiItems: SushiItemProps[] = [
    {
      imageUrl: "coming-soon.jpg",
      title: "Poulet mayo ou thon cuit avocat",
      description: "Chirashi composé de poulet mariné à la mayonnaise ou de thon cuit, accompagné d'avocat et de riz vinaigré.",
      price: "12.90",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "Poulet croustillant avocat",
      description: "Chirashi de poulet croustillant et d'avocat, accompagné de riz vinaigré.",
      price: "13.90",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "Saumon",
      description: "Chirashi de saumon cru, accompagné de riz vinaigré.",
      price: "14.90",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "Saumon avocat",
      description: "Chirashi classique de saumon et d'avocat, accompagné de riz vinaigré.",
      price: "15.90",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "Saumon snacké avocat",
      description: "Chirashi de saumon snacké et d'avocat, accompagné de riz vinaigré.",
      price: "16.20",
    },
  ];

  const sashimiItems : SushiItemProps[] = [
    {
      imageUrl: "coming-soon.jpg",
      title: "Sashimi saumon (x5)",
      description: "Sashimi de saumon cru, 5 généreuses pièces serives avec du riz.",
      price: "6.50",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "Sashimi saumon (x15)",
      description: "Sashimi de saumon cru, 15 généreuses pièces serives avec du riz.",
      price: "16.50",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "Sashimi saumon mangue ciboulette",
      description: "Sashimi de saumon cru et de mangue, relevé à la ciboulette. Servi avec du riz.",
      price: "10.90",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "Tataki saumon (x15)",
      description: "Sashimi de saumon snacké, accompagné de riz.",
      price: "17.20",
    },
  ]

  const sushiItems: SushiItemProps[] = [
    {
      imageUrl: "Jap/sushi-tacos.jpg",
      title: "Sushi tacos saumon spicy avocat",
      description: "Coupe de riz pané garnie au saumon épicé et à l'avocat.",
      price: "8.90",
    },
    {
      imageUrl: "Jap/sushi-tacos.jpg",
      title: "Sushi tacos poulet croustillant cheese avocat",
      description: "Coupe de riz pané garnie de poulet croustillant, de fromage et d'avocat.",
      price: "8.90",
    },
    {
      imageUrl: "Jap/sushi-tacos.jpg",
      title: "Sushi tacos crabe spicy avocat cheese",
      description: "Coupe de riz pané garnie de chair de crabe épicée, d'avocat et de fromage.",
      price: "8.90",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "Sushi saumon",
      description: "Nigiri de saumon cru.",
      price: "3.90",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "Sushi saumon crispy",
      description: "Maki ou uramaki de saumon croustillant.",
      price: "3.90",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "Sushi saumon cheese",
      description: "Nigiri de saumon cru garni de fromage.",
      price: "3.90",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "Sushi saumon braisé",
      description: "Nigiri de saumon braisé.",
      price: "3.90",
    },
  ];

  const plateauxItems: SushiItemProps[] = [
    {
      imageUrl: "Jap/P1-2.jpg",
      title: "P1. Sushi time",
      description: "6 Sushi saumon\
      6 Sushi saumon snacké",
      price: "11.90",
    },
    {
      imageUrl: "Jap/P2-2.jpg",
      title: "P2. Sabaidi love",
      description: "6 Sushi saumon\
      6 California saumon avocat",
      price: "10.90",
    },
    {
      imageUrl: "Jap/P3-2.jpg",
      title: "P3. Salmon classic",
      description: "10 sushi saumon",
      price: "15.50",
    },
    {
      imageUrl: "Jap/P4-2.jpg",
      title: "P4. Salmon lover",
      description: "6 Salmon roll cheese\
      6 California saumon avocat\
      6 Maki saumon",
      price: "14.50",
    },
    {
      imageUrl: "Jap/P6-2.jpg",
      title: "P6. Crispy dream",
      description: "6 Crispy roll saumon avocat\
      6 Crispy roll thon mayo avocat\
      6 Crispy roll poulet mayo avocat",
      price: "16.50",
    },
    {
      imageUrl: "Jap/P5-2.jpg",
      title: "P5. Full mix",
      description: "6 Avocado tempura cheese\
      6 Spring saumon avocat\
      6 Crispy Roll poulet mayo avocat\
      6 Egg Roll crevette avocat",
      price: "21.90",
    },
    {
      imageUrl: "Jap/P7-2.jpg",
      title: "P7. California deam",
      description: "6 California saumon avocat\
      6 California thon mayo avocat\
      6 California poulet mayo avocat",
      price: "17.90",
    },
    {
      imageUrl: "Jap/P8-2.jpg",
      title: "P8. Fresh salmon",
      description: "6 Salmon Roll cheese\
      6 Salmon Roll avocat cheese\
      6 Salmon Roll saumon fumé cheese\
      6 Salmon Roll concombre cheese",
      price: "21.90",
    },
    {
      imageUrl: "Jap/P9-2.jpg",
      title: "P9. PP",
      description: "6 Pané roll saumon cheese spicy\
      6 Pané roll tempura cheese spicy\
      6 Pané roll poulet mayo avocat spicy",
      price: "21",
    },
  ];

  const signaturesItems: SushiItemProps[] = [
    {
      imageUrl: "Jap/roll-chicken-dynamite-2.jpg",
      title: "SR1. Dynamite chicken \"R\"",
      description: "California poulet mayo, avocat, concombre, recouvert de poulet dynamite, spicy sauce.",
      price: "10.90",
    },
    {
      imageUrl: "Jap/roll-saumon-crevette-2.jpg",
      title: "SR2. Salmon shrimp roll",
      description: "Tempura, salade, avocat, boursin, crevette, recouvert de saumon.",
      price: "11.90",
    },
    {
      imageUrl: "Jap/roll-mango-2.jpg",
      title: "SR3. Mango roll",
      description: "California saumon, cheese, salade, recouvert de mangue et avocat, spicy sauce, ciboulette.",
      price: "12.90",
    },
    {
      imageUrl: "Jap/roll-tyger-2.jpg",
      title: "SR4. Tyger roll",
      description: "Tempura, cheese, concombre, recouvert de saumon snacké avocado spicy sauce.",
      price: "12.90",
    },
    {
      imageUrl: "Jap/roll-nachos-2.jpg",
      title: "SR5. Mexican roll",
      description: "Boeuf assaisonné, avocat, poivrons, spicy sauce, saumon braisé on the top.",
      price: "13.90",
    },
    {
      imageUrl: "Jap/sumo-pane-thai-2.jpg",
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
      imageUrl: "Jap/rock'n'roll-2.jpg",
      title: "SP4. Rock'n'Roll",
      description: "Pas .",
      price: "14.90",
    },
    {
      imageUrl: "Jap/sumo-kung-2.jpg",
      title: "SP5. Sumo kung",
      description: "Crevette, avocat, cheese, tempura, surimi.",
      price: "14.90",
    },
  ];

  const itemsList: Record<string, SushiItemProps[]> = {
    // "Compose ton roll": [],
    "Signatures": signaturesItems,
    "Plateaux": plateauxItems,
    "Poké": pokeItems,
    "Yakitori": yakitoriItems,
    "Tartare": tartareItems,
    "Chirachi": chirachiItems,
    "Sashimi": sashimiItems,
    "Sushis": sushiItems,
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
      <Helmet>
        <title>Menu Jap' - Sabaidi</title>
      </Helmet>
      <h2>Menu Japonais</h2>
      <Sidebar titles={submenus.titles} activeTitle={submenus.activeTitle} onTitleClick={handleTitleClick}/>
      <div className="menu-items">
        {activeTitle === "Compose ton roll" ? 
          <DynamicContainer className="compose-ton-roll-container" />
            : 
          ( activeSubmenu?.map((item, index) => (
            <div className="menu-item" key={index}>
              <img src={item.imageUrl} alt="Sushi" />
              <div className="menu-item-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>{item.price}€</p>
              </div>
            </div>
          )))
        }
      </div>
    </div>
  );
};
