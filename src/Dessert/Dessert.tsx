import React from 'react';
import { SushiItemProps } from '../interfaces';
import { Helmet } from 'react-helmet';
import Sidebar from '../Sidebar/Sidebar';
import { SidebarProps } from '../interfaces';
import { useSidebar } from '../Context/SidebarContext';
import desserts from '../data/desserts.json';

export const Dessert = () => {

    const itemsList: { [key: string]: SushiItemProps[] } = {
      "Classiques": desserts.classiques,
      "Asiatiques": desserts.asiat,
      "Boissons": desserts.boissons,
      "Fruits frais": desserts.fruits,
    };
    const { activeTitle, setActiveTitle } = useSidebar();

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
                <title>Desserts - Sabaidi</title>
            </Helmet>

            <h2>Desserts</h2>
            <Sidebar titles={submenus.titles} activeTitle={submenus.activeTitle} onTitleClick={handleTitleClick}/>
            <div className='thai-items'>
                {activeSubmenu?.map((item, index) => (
                    <div key={index} className="menu-item">
                        <img className="ItemImage" src={item.imageUrl} alt={item.title} />
                        <div className="ItemDetails">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <p>{item.price}€</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}