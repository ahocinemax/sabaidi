import React, { useRef, useEffect } from 'react';
import './Sidebar.css';
import { SidebarProps } from '../interfaces';
import { useSidebar } from '../Context/SidebarContext';

const Sidebar: React.FC<SidebarProps> = ({ titles, activeTitle, onTitleClick }) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const { setActiveTitle } = useSidebar();

  const switchSection = (title: string) => {
    if (activeTitle !== title) {
      setActiveTitle(title);
      onTitleClick(title);
    }
  };

  const scrollHandler = (dir: number) => {
    if (sidebarRef.current) {
      // const scrollWidth = sidebarRef.current.scrollWidth;
      console.log("old position:", sidebarRef.current.scrollLeft);
      const scrollDistance = sidebarRef.current.offsetWidth * 0.25; // 25% de la largeur visible
      sidebarRef.current.scrollLeft += scrollDistance * dir;
      console.log("new position:", sidebarRef.current.scrollLeft);
    }
  };

  return (
    <div className='sidebar-container' ref={sidebarRef}>
      <button className='left-arrow' onClick={() => scrollHandler(-1)}>&lt;</button>
      <div className="sidebar">
        {titles.map((title, index) => (
          <span onClick={() => switchSection(title)} className={activeTitle !== title ? "nav-link" : "nav-link active"} key={index}>
            {title}
          </span>
        ))}
      </div>
      <button className='right-arrow' onClick={() => scrollHandler(1)}>&gt;</button>
      {/* <div className="cart-button">
        <span className="cart">
          <img src="cart.svg" alt="cart" />
        </span>
      </div> */}
    </div>
  );
};

export default Sidebar;
