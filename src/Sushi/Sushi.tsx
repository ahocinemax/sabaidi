import React from "react";
import "./Sushi.css";
import "../styles/fonts.css";
import { SushiItemProps, SidebarProps, ComposeItemProps } from "../interfaces";
import Sidebar from "../Sidebar/Sidebar";
import { useSidebar } from "../Context/SidebarContext";
import { useCart } from "../Context/CartContext";
import { Helmet } from "react-helmet";
import { DynamicContainer } from "../DynamicContainer/DynamicContainer";

export const Sushi = () => {
  const { activeTitle, setActiveTitle } = useSidebar();
  const { addToCart } = useCart();

  const formulesItem: SushiItemProps[] = [
    {
      imageUrl: "coming-soon.jpg",
      title: "BOEUF FROMAGE (X5)",
      description: "5 brochettes de boeuf et fromage. Servi avec du riz.",
      price: "11.90",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "POULET DÉCLINÉ (X6)",
      description: "6 brochettes de poulet (3x mariné et 3x nature). Servi avec du riz.",
      price: "14.50",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "FULL BROCHETTE (X10)",
      description: "Assortiment de 10 brochettes (2 de chaque). Servi avec du riz.",
      price: "17.90",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "FORMULE MIXTE",
      description: "6 california avocat, 4 sushi saumon, 2 brochettes de poulet, 2 brochette boeuf fromage, 6 sashimi thon.",
      price: "21.90",
    },
  ];

  const yakitoriItems: SushiItemProps[] = [
    {
      imageUrl: "Jap/boeuf fromage.jpg",
      title: "BOEUF FROMAGE",
      description: "2 brochettes de boeuf et fromage.",
      price: "5.50",
    },
    {
      imageUrl: "Jap/brochette pane.jpg",
      title: "BOEUF FROMAGE PANÉ",
      description: "2 brochettes panées de boeuf et fromage.",
      price: "6.20",
    },
    {
      imageUrl: "Jap/poulet caramel.jpg",
      title: "POULET CARAMÉLISÉ",
      description: "2 brochettes de poulet haché caramélisées.",
      price: "4.50",
    },
    {
      imageUrl: "Jap/poulet_pane.jpg",
      title: "POULET MARINÉ",
      description: "2 brochettes de poulet mariné.",
      price: "5.20",
    },
    {
      imageUrl: "Jap/brochette_saumon.jpg",
      title: "SAUMON",
      description: "2 brochettes de saumon grillé.",
      price: "5.20",
    },
  ];

  const tartareItems: SushiItemProps[] = [
    {
      imageUrl: "Jap/tartare-ceviche.jpg",
      title: "SAUMON AVOCAT CEVICHE",
      description: "Tartare de saumon et d'avocat façon ceviche, avec mangue, oignon rouge, menthe, coriandre, ciboulette, citron et 7 épices.",
      price: "12.90",
    },
    {
      imageUrl: "Jap/tartare-ceviche.jpg",
      title: "SAUMON MANGO CIBOULETTE SPICY",
      description: "Tartare de saumon à la mangue, ciboulette et épices.",
      price: "10.90",
    },
    {
      imageUrl: "Jap/tartare-ceviche-2.jpg",
      title: "SAUMON SNACKÉ AVOCAT CHEESE",
      description: "Tartare de saumon snacké à l'avocat et fromage.",
      price: "10.90",
    },
    {
      imageUrl: "Jap/tartare-ceviche-2.jpg",
      title: "POULET MAYO AVOCAT CHEESE",
      description: "Tartare de poulet à la mayonnaise, avocat et fromage.",
      price: "9.90",
    },
    {
      imageUrl: "Jap/tartare-ceviche.jpg",
      title: "THON CUIT MAYO AVOCAT",
      description: "Tartare de thon cuit à la mayonnaise et avocat.",
      price: "12.90",
    },
  ];

  const pokeItems: SushiItemProps[] = [
    {
      imageUrl: "Jap/poke-chicken-2.jpg",
      title: "POULET",
      description: "Poulet croustillant, avocat, carotte, concombre, cheese, oignon frit, oignon rouge, ciboulette, tomate cerise, sauce maison mayo spicy.",
      price: "12.90",
    },
    {
      imageUrl: "Jap/poke thai.jpg",
      title: "THAÏ",
      description: "Poulet thaï saté, avocat, carotte, poivrons, cacahuètes, oignon frit, oignon rouge, pousse de soja, tomate cerise, sauce maison mayo spicy.",
      price: "13.90",
    },
    {
      imageUrl: "Jap/poke-saumon-2.jpg",
      title: "SAUMON",
      description: "Saumon frais, avocat, mangue, concombre, edamame, oignon rouge, oignon frit, ciboulette, tomate cerise, sauce teriyaki.",
      price: "13.90",
    },
    {
      imageUrl: "Jap/poke tataki.jpg",
      title: "SAUMON TATAKI",
      description: "Saumon tataki, avocat, mangue, concombre, edamame, oignon rouge, oignon frit, ciboulette, tomate cerise, sauce sésame, sauce teriyaki.",
      price: "13.90",
    },
    {
      imageUrl: "Jap/poke saumon.jpg",
      title: "PAVÉ DE SAUMON",
      description: "Pavé de saumon, avocat, mangue, concombre, edamame, oignon frit, oignon rouge, ciboulette, tomate cerise, sauce teriyaki.",
      price: "14.90",
    },
    {
      imageUrl: "Jap/poke-crevette.jpg",
      title: "CREVETTE",
      description: "Crevettes fraîches & tempura, avocat, iceberg, concombre, cheese, oignon frit, ciboulette, tomate cerise, sauce maison mayo spicy.",
      price: "14.90",
    },
  ];

  const chirachiItems: SushiItemProps[] = [
    {
      imageUrl: "coming-soon.jpg",
      title: "SAUMON",
      description: "Chirashi de saumon cru, accompagné de riz vinaigré.",
      price: "14.90",
    },
    {
      imageUrl: "Jap/shirachi saumon avocat.jpg",
      title: "SAUMON AVOCAT",
      description: "Chirashi classique de saumon et d'avocat, accompagné de riz vinaigré.",
      price: "15.90",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "SAUMON SNACKÉ AVOCAT",
      description: "Chirashi de saumon snacké et d'avocat, accompagné de riz vinaigré.",
      price: "16.20",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "POULET MAYO OU THON CUIT AVOCAT",
      description: "Chirashi composé de poulet mariné à la mayonnaise ou de thon cuit, accompagné d'avocat et de riz vinaigré.",
      price: "12.90",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "POULET CROUSTILLANT AVOCAT",
      description: "Chirashi de poulet croustillant et d'avocat, accompagné de riz vinaigré.",
      price: "13.90",
    },
  ];

  const sashimiItems : SushiItemProps[] = [
    {
      imageUrl: "coming-soon.jpg",
      title: "SASHIMI SAUMON (X5)",
      description: "Sashimi de saumon cru, 5 généreuses pièces serives avec du riz.",
      price: "6.50",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "SASHIMI SAUMON (X15)",
      description: "Sashimi de saumon cru, 15 généreuses pièces serives avec du riz.",
      price: "16.50",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "SASHIMI SAUMON MANGUE CIBOULETTE",
      description: "Sashimi de saumon cru et de mangue, relevé à la ciboulette. Servi avec du riz.",
      price: "10.90",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "TATAKI SAUMON (X15)",
      description: "Sashimi de saumon snacké, accompagné de riz.",
      price: "17.20",
    },
  ]

  const sushiItems: SushiItemProps[] = [
    {
      imageUrl: "Jap/nigiris.jpg",
      title: "SUSHI SAUMON",
      description: "Nigiri de saumon cru.",
      price: "3.90",
    },
    {
      imageUrl: "Jap/nigiris.jpg",
      title: "SUSHI SAUMON CRISPY",
      description: "Maki ou uramaki de saumon croustillant.",
      price: "3.90",
    },
    {
      imageUrl: "Jap/nigiris.jpg",
      title: "SUSHI SAUMON CHEESE",
      description: "Nigiri de saumon cru garni de fromage.",
      price: "3.90",
    },
    {
      imageUrl: "Jap/nigiris.jpg",
      title: "SUSHI SAUMON BRAISÉ",
      description: "Nigiri de saumon braisé.",
      price: "3.90",
    },
    {
      imageUrl: "Jap/nigiris.jpg",
      title: "SUSHI CREVETTE",
      description: "Nigiri de crevette.",
      price: "4.20",
    },
  ];

  const tacosItems: SushiItemProps[] = [
    {
      imageUrl: "Jap/sushi-tacos.jpg",
      title: "SUSHI TACOS SAUMON SPICY AVOCAT",
      description: "Coupe de riz pané garnie au saumon épicé et à l'avocat.",
      price: "8.90",
    },
    {
      imageUrl: "Jap/sushi-tacos.jpg",
      title: "SUSHI TACOS POULET CROUSTILLANT CHEESE AVOCAT",
      description: "Coupe de riz pané garnie de poulet croustillant, de fromage et d'avocat.",
      price: "8.90",
    },
    {
      imageUrl: "Jap/sushi-tacos.jpg",
      title: "SUSHI TACOS CRABE SPICY AVOCAT CHEESE",
      description: "Coupe de riz pané garnie de chair de crabe épicée, d'avocat et de fromage.",
      price: "8.90",
    },
  ]

  const plateauxItems: SushiItemProps[] = [
    {
      imageUrl: "Jap/P1-2.jpg",
      title: "P1. SUSHI TIME",
      description: "6 Sushi saumon 6 Sushi saumon snacké",
      price: "11.90",
    },
    {
      imageUrl: "Jap/P2-2.jpg",
      title: "P2. HAVANA LOVE",
      description: "6 Sushi saumon\
      6 California saumon avocat",
      price: "10.90",
    },
    {
      imageUrl: "Jap/P3-2.jpg",
      title: "P3. SALMON CLASSIC",
      description: "10 sushi saumon",
      price: "13.50",
    },
    {
      imageUrl: "Jap/P4-2.jpg",
      title: "P4. SALMON LOVER",
      description: "6 Salmon roll cheese 6 California saumon avocat 6 Maki saumon",
      price: "14.50",
    },
    {
      imageUrl: "Jap/P6-2.jpg",
      title: "P6. CRISPY DREAM",
      description: "6 Crispy roll saumon avocat 6 Crispy roll thon mayo avocat 6 Crispy roll poulet mayo avocat",
      price: "16.50",
    },
    {
      imageUrl: "Jap/P5-2.jpg",
      title: "P5. FULL MIX",
      description: "6 Avocado tempura cheese\
      6 Spring saumon avocat\
      6 Crispy Roll poulet mayo avocat\
      6 Egg Roll crevette avocat",
      price: "21.90",
    },
    {
      imageUrl: "Jap/P7-2.jpg",
      title: "P7. CALIFORNIA DEAM",
      description: "6 California saumon avocat 6 California thon mayo avocat 6 California poulet mayo avocat",
      price: "17.90",
    },
    {
      imageUrl: "Jap/P8-2.jpg",
      title: "P8. FRESH SALMON",
      description: "6 Salmon Roll cheese 6 Salmon Roll avocat cheese 6 Salmon Roll saumon fumé cheese 6 Salmon Roll concombre cheese",
      price: "21.90",
    },
    {
      imageUrl: "Jap/P9-2.jpg",
      title: "P9. PP",
      description: "6 Pané roll saumon cheese spicy\
      6 Pané roll tempura cheese spicy\
      6 Pané roll poulet mayo avocat spicy",
      price: "19.90",
    },
  ];

  const signaturesItems: SushiItemProps[] = [
    {
      imageUrl: "Jap/roll-mango-2.jpg",
      title: "MANGO ROLL",
      description: "California saumon, cheese, salade, recouvert de mangue et avocat, spicy sauce, ciboulette.",
      price: "12.90",
    },
    {
      imageUrl: "Jap/roll-tyger-2.jpg",
      title: "TYGER ROLL",
      description: "Tempura, cheese, concombre, recouvert de saumon snacké avocado spicy sauce.",
      price: "12.90",
    },
    {
      imageUrl: "Jap/rock'n'roll-2.jpg",
      title: "ROCK'N'ROLL",
      description: "Saumon, thon, salade, avocat, chips, piment et ciboulette.",
      price: "14.90",
    },
    {
      imageUrl: "Jap/roll-chicken-dynamite-2.jpg",
      title: "DYNAMITE CHICKEN \"R\"",
      description: "California poulet mayo, avocat, concombre, recouvert de poulet dynamite, spicy sauce.",
      price: "10.90",
    },
    {
      imageUrl: "Jap/roll-saumon-crevette-2.jpg",
      title: "SALMON SHRIMP ROLL",
      description: "Tempura, salade, avocat, boursin, crevette, recouvert de saumon.",
      price: "11.90",
    },
    {
      imageUrl: "Jap/roll-nachos-2.jpg",
      title: "MEXICAN ROLL",
      description: "Boeuf assaisonné, avocat, poivrons, spicy sauce, saumon braisé on the top.",
      price: "13.90",
    },
    {
      imageUrl: "Jap/sumo-pane-thai-2.jpg",
      title: "SA THAÏ",
      description: "Avocat, cheese, concombre, poulet saté, recouvert de cacahuètes.",
      price: "11.90",
    },
    {
      imageUrl: "Jap/sumo-kung-2.jpg",
      title: "PANÉ KAI",
      description: "Poulet mayo, avocat, poulet pané, cheese.",
      price: "13.90",
    },
    {
      imageUrl: "Jap/sumo-kung-2.jpg",
      title: "PANÉ SAUMON",
      description: "Avocat, saumon cheese, saumon fumé.",
      price: "13.90",
    },
    {
      imageUrl: "Jap/sumo-kung-2.jpg",
      title: "SUMO KUNG",
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
    "Formules": formulesItem,
    "Tartare": tartareItems,
    "Chirachi": chirachiItems,
    "Sashimi": sashimiItems,
    "Sushis": sushiItems,
    "Tacos": tacosItems,
  };

  const composeProps: ComposeItemProps[] = [
    {
      name: "Base",
      items: [
        { name: "Maki", price: "4.90" },
        { name: "Ice roll", price: "5.90" },
        { name: "Egg roll", price: "5.90" },
        { name: "Crispy roll", price: "6.50" },
        { name: "Saumon roll", price: "7.50" },
        { name: "Dinde roll", price: "7.50" },
        { name: "Pané roll", price: "8.90" },
        { name: "California", price: "6.90" },
        { name: "Spring roll", price: "6.90" },
        { name: "Avocado roll", price: "7.90" }
      ]
    },
    {
      name: "Protéine",
      items: [
        { name: "poulet mayo" },
        { name: "thon mayo"  },
        { name: "poulet pané"  },
        { name: "saumon"  },
        { name: "saumon fumé"  },
        { name: "surimi"  },
        { name: "crevette"  },
        { name: "crevette tempura" }
      ],
    },
    {
      name: "Végétaux",
      items: [
          { name: "avocat" },
          { name: "concombre" },
          { name: "salade" },
          { name: "tomate cerise" },
          { name: "carotte" },
          { name: "poivron" },
          { name: "ciboulette" },
          { name: "coriandre" },
          { name: "ananas" },
          { name: "mangue" }
      ]
  },
  {
      name: "Fromage",
      items: [
          { name: "boursin" },
          { name: "cheese" }
      ]
  }
  ];

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
          <h1>Compose ton roll!</h1>
          {/* <p>Prix: {totalPrice}</p> */}
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
