import React, { useRef, useEffect } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { SidebarProps } from '../interfaces';

const Sidebar: React.FC<SidebarProps> = (items) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {};

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='sidebar-container' ref={sidebarRef}>
      <div className="sidebar">
        {items.titles.map((title) => (
          <Link to="/" className="nav-link"><p>{title}</p></Link>
        ))}
      </div>
      <div className="cart-button">
        <span className="cart">
          <img src="cart.svg" alt="cart" />
        </span>
      </div>
    </div>
  );
}

export default Sidebar;
