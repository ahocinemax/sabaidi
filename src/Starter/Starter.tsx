import React from 'react';
import { SushiItemProps, SidebarProps } from '../interfaces';
import { Helmet } from 'react-helmet';
import Sidebar from '../Sidebar/Sidebar';
import { useSidebar } from '../Context/SidebarContext';
import { useCart } from '../Context/CartContext';
import entrees from '../data/entrees.json'

export const Starter = () => {
  const { activeTitle, setActiveTitle } = useSidebar();
  const { addToCart } = useCart();

  const itemsList: Record<string, SushiItemProps[]> = {
    "Starters": entrees.starters,
    "Soupes": entrees.soupes,
    "Salades": entrees.salades,
    "Accompagnements": entrees.accompagnements,
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
