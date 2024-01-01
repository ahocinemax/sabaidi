/* Topbar.tsx */
import React, { useEffect, useState } from 'react';
import './Topbar.css';
import { TopbarProps } from '../interfaces';
import { Link } from 'react-router-dom';


export const Topbar: React.FC = () => {
    const [isActive, setIsActive] = React.useState(window.location.pathname === '/' ? false : true);

    // je n'arrive pas à actualiser la variable <path> à chaque changement de page
    setInterval(() => {
        setIsActive(window.location.pathname === '/' ? false : true);
    }, 100);

return (
    <div className={`topbar ${isActive ? 'active' : ''}`}>
        <Link to={'/'} className='logo'>
            <img src="sabaidi.jpg" alt="Logo Sabaidi" />
        </Link>
        {window.location.pathname !== '/' && (
        <div className="navigation-links">
            <Link to="/Starters">Starters</Link>
            <Link to="/Sushis">Sushis</Link>
            <Link to="/Thai">Thai</Link>
            <Link to="/Desserts">Desserts</Link>
        </div>
        )}
    </div>
);
};