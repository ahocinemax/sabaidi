/* Topbar.tsx */
import React from 'react';
import './Topbar.css';
import { Link } from 'react-router-dom';
// import { Tooltip } from 'react-tooltip';


export const Topbar: React.FC = () => {

    return (
        <div className={`topbar active`}>
            <Link to={'/'} className='logo' data-tooltip-id="my-tooltip" data-tooltip-content="Retour à l'accueil" data-tooltip-place="bottom">
                <img src="sabaidi.jpg" alt="Logo Sabaidi" />
            </Link>
            {/* <Tooltip id="my-tooltip" /> */}

            <div className="navigation-links">
                <Link to="/Starters">ENTRÉES</Link>
                <Link to="/Jap">JAP'</Link>
                <Link to="/Thai">THAÏ</Link>
                <Link to="/Desserts">DESSERTS</Link>
            </div>

            <div className="order-button">COMMANDER</div>
            <div className="menu-deroulant"><img src="menu-deroulant.svg" alt="deplier le menu" /></div>
        </div>
    );
};