import React, { useRef, useEffect, useState } from 'react';
import './Sidebar.css';
import { SidebarProps } from '../interfaces';
import { useSidebar } from '../Context/SidebarContext';
import { useCart } from '../Context/CartContext';
import { Cart } from './Cart';

const Sidebar: React.FC<SidebarProps> = ({ titles, activeTitle, onTitleClick }) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const { setActiveTitle } = useSidebar();
  const [showArrows, setShowArrows] = useState(false);
  const { cart, setShowCart, showCart } = useCart();

  const switchSection = (title: string) => {
    if (activeTitle !== title) {
      setActiveTitle(title);
      onTitleClick(title);
    }
  };

  // Gère le défilement de la barre latérale pour afficher les flèches de défilement si nécessaire
  const displayArrows = () => {
    if (sidebarRef.current) {
      // Détermine si les flèches de défilement doivent être affichées en fonction de la largeur du contenu et de la largeur visible du conteneur
      const shouldDisplayArrows = sidebarRef.current.scrollWidth > sidebarRef.current.clientWidth;
      setShowArrows(shouldDisplayArrows); // Met à jour l'état pour afficher ou masquer les flèches de défilement
    }
  };

  useEffect(() => {
    // Ajoute un écouteur d'événements pour le redimensionnement de la fenêtre et initialise l'affichage des flèches de défilement
    window.addEventListener('resize', displayArrows);
    displayArrows(); // Appelle handleScroll pour initialiser l'affichage des flèches de défilement lors du premier rendu
    return () => window.removeEventListener('resize', displayArrows); // Nettoie l'écouteur d'événements lors du démontage du composant
  }, [titles]); // Réexécute handleScroll lorsque le contenu change

  // Gère le défilement de la barre latérale lors du clic sur les flèches de défilement
  const scrollHandler = (dir: number) => {
    if (sidebarRef.current) {
      // Calcule la distance de défilement en fonction de la largeur visible du conteneur
      const scrollDistance = sidebarRef.current.offsetWidth * 0.25;
      // Déplace la barre latérale en fonction de la direction (gauche ou droite)
      sidebarRef.current.scrollBy({
        left: scrollDistance * dir,
        behavior: 'smooth',
      });
      sidebarRef.current.scrollLeft += scrollDistance * dir;
      // Met à jour l'affichage des flèches de défilement après le défilement
      displayArrows();
    }
  };

  const handleCartButton = () => {
    setShowCart(true);
    console.log("Cart button pressed");
  }

  return (
    <div className='sidebar-container sticky-top'>
      {showArrows && (
        <button className='left-arrow' onClick={() => scrollHandler(-1)}>&lt;</button>
      )}
      <div className="sidebar" ref={sidebarRef}>
        {titles.map((title, index) => (
          <span onClick={() => switchSection(title)} className={activeTitle !== title ? "nav-link" : "nav-link active"} key={index}>
            {title}
          </span>
        ))}
      </div>
      {showArrows && (
        <button className='right-arrow' onClick={() => scrollHandler(1)}>&gt;</button>
      )}
      <div className="cart-button" onClick={handleCartButton}>
        <span className="cart">
          <img src="cart.svg" alt="cart" />
        </span>
        {cart?.length ? <div className='cart-nb-items'>{cart.length}</div> : null}
      </div>
      {showCart && <Cart />}
    </div>
  );
};

export default Sidebar;
