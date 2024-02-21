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

  return (
    <div className='sidebar-container' ref={sidebarRef}>
      <div className="sidebar">
        {titles.map((title, index) => (
          <span onClick={() => switchSection(title)} className={activeTitle !== title ? "nav-link" : "nav-link active"} key={index}>
            {title}
          </span>
        ))}
      </div>
      {/* <div className="cart-button">
        <span className="cart">
          <img src="cart.svg" alt="cart" />
        </span>
      </div> */}
    </div>
  );
};

export default Sidebar;
