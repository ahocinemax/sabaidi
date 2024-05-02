/* Topbar.tsx */
import React, { useState, useEffect } from 'react';
import './Topbar.css';
import { Link, useLocation } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';


export const Topbar: React.FC = () => {
    const location = useLocation();
    const [isActive, setIsActive] = useState(window.location.pathname !== '/');
    useEffect(() => {
        const active = location.pathname !== '/';
        setIsActive(active);
    }, [location]);

    return (
        <div className={`topbar active`}>
            <div className="navigation-links">
                {isActive && (
                    <div className="left">
                    <Link to="/Starters">ENTRÉES</Link>
                    <Link to="/Jap">JAP'</Link>
                    </div>
                )}
                <Link to={'/'} className='logo' data-tooltip-id="my-tooltip" data-tooltip-content="Retour à l'accueil" data-tooltip-place="bottom">
                    <img src="sabaidi.jpg" alt="Logo Sabaidi" />
                </Link>
                <Tooltip id="my-tooltip" />
                {isActive && (
                    <div className="right">
                    <Link to="/Thai">THAÏ</Link>
                    <Link to="/Desserts">DESSERTS</Link>
                    </div>
                )}
            </div>
        </div>
    );
};