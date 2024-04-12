import React from 'react';
import { SushiItemProps, SidebarProps } from '../interfaces';
import { Helmet } from 'react-helmet';
import Sidebar from '../Sidebar/Sidebar';
import { useSidebar } from '../Context/SidebarContext';
import { useCart } from '../Context/CartContext';

export const Starter = () => {
  const { activeTitle, setActiveTitle } = useSidebar();
  const { addToCart } = useCart();

  const soupeItems: SushiItemProps[] = [
    {
      imageUrl: "Starters/soupe.jpg",
      title: "Soupe miso classique",
      description: "Bouillon à base de miso et de Dashi, champignons et algues.",
      price: "3.00",
    },
    {
      imageUrl: "Starters/soupe.jpg",
      title: "Soupe miso saumon",
      description: "Bouillon à base de miso, saumon et Dashi, champignons et algues.",
      price: "3.50",
    },
    {
      imageUrl: "Starters/soupe.jpg",
      title: "Soupe poulet Tom K Kaw",
      description: "Soupe traditionnelle thaïlandaise au lait de coco légèrement épicé, légumes frais et morceaux de poulet.",
      price: "6.50",
    },
    {
      imageUrl: "Starters/soupe.jpg",
      title: "Crevette Tom Yom",
      description: "Soupe traditionnelle thaïlandaise aux crevettes à la citronnelle, au lait de coco et ses légumes frais.",
      price: "7.50",
    },
  ];

  const saladesItems: SushiItemProps[] = [
    {
      imageUrl: "coming-soon.jpg",
      title: "Salade thaï mangue",
      description: "Délicieuse salade fraîche, au mélange d’épices et de mangue.",
      price: "6.50",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "Salade thaï papaye",
      description: "Délicieuse salade fraîche, papaye et oignons frits.",
      price: "6.50",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "Salade thaï poulet ou boeuf piquant",
      description: "Salade au mélange de légumes frais, surmontée au bœuf ou poulet caramélisé et oignons frits.",
      price: "7.50",
    },
  ];

  const accompagnementsItems: SushiItemProps[] = [
    {
      imageUrl: "Starters/edamame.jpg",
      title: "Edamame",
      description: "Fèves de soja.",
      price: "3.90",
    },
    {
      imageUrl: "Starters/wakame.jpg",
      title: "Wakame",
      description: "Salade d'algues wakame.",
      price: "3.90",
    },
    {
      imageUrl: "Starters/choux.jpg",
      title: "Choux",
      description: "Salade de chou chinois, sésame et vinaigrette.",
      price: "4.90",
    },
    {
      imageUrl: "Starters/riz.jpg",
      title: "Riz",
      description: "Riz blanc ou vinaigré nature, servi avec une sauce au choix.",
      price: "3.90",
    },
  ];

  const startersItems: SushiItemProps[] = [
    {
      imageUrl: "Starters/nems-poulet.jpg",
      title: "Nems poulet",
      description: "Bouchées vapeur au poulet et aux légumes.",
      price: "4.90",
    },
    {
      imageUrl: "Starters/nems-crevette.jpg",
      title: "Nems crevette",
      description: "Crevettes décortiquées panées.",
      price: "5.90",
    },
    {
      imageUrl: "Starters/gyozas.jpg",
      title: "Gyoza",
      description: "Raviolis japonais grillés ou vapeur, au poulet ou aux légumes.",
      price: "5.20",
    },
    {
      imageUrl: "Starters/tempuras.jpg",
      title: "Tempura",
      description: "Crevettes décortiquées panées.",
      price: "6.20",
    },
    {
      imageUrl: "Starters/poulet-dynamite.jpg",
      title: "Poulet dynamite",
      description: "Tendres morceaux de poulet, accompagnés de leur sauce dynamite.",
      price: "7.50",
    },
    {
      imageUrl: "Starters/crevette-dynamite.jpg",
      title: "Crevette dynamite",
      description: "Crevettes décortiquées, accompagnées de leur sauce dynamite.",
      price: "8.90",
    },
    {
      imageUrl: "coming-soon.jpg",
      title: "Samossa (x3)",
      description: "3 triangles frits, farcis de légumes et de viande.",
      price: "4.90",
    },
  ];

  const itemsList: Record<string, SushiItemProps[]> = {
    "Starters": startersItems,
    "Soupes": soupeItems,
    "Salades": saladesItems,
    "Accompagnements": accompagnementsItems,
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
      <div className='container-thai'>
        <Helmet>
          <title>Menu Jap' - Sabaidi</title>
        </Helmet>

        <h2>Entrées</h2>
        <Sidebar titles={submenus.titles} activeTitle={submenus.activeTitle} onTitleClick={handleTitleClick}/>
        <div className='thai-items'>
          {
            activeSubmenu?.map((item, index) => (
              <div key={index} className="menu-item">
                <img className="ItemImage" src={item.imageUrl} alt={item.title} />
                <div className="ItemDetails">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p>{item.price}€</p>
                </div>
                {/* <div className="add-container" onClick={() => addToCart(item)}>
                  <img className="add-cart" src="Logo-plus.png" />
                </div> */}
              </div>
            ))
          }
        </div>
    </div>
  );
}
