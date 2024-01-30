import React, { useRef, useEffect } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {};

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={sidebarRef} className="sidebar">
      <Link to="/" className="nav-link"><p>A LA CARTE</p></Link>
      <Link to="/" className="nav-link"><p>PLAT</p></Link>
      <Link to="/" className="nav-link"><p>DESSERT</p></Link>
    </div>
  );
}

export default Sidebar;
