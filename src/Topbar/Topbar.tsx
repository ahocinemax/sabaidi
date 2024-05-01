/* Topbar.tsx */
import React, { useState } from 'react';
import './Topbar.css';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';


export const Topbar: React.FC = () => {
    const [isActive, setIsActive] = useState(window.location.pathname !== '/');
    // je n'arrive pas à actualiser la variable <path> à chaque changement de page
    // const path = window.location.pathname;
    // console.log(path);
    // console.log(isActive);
    // useEffect(() => {
    //     if (path === '/' && isActive === true) {
    //         setIsActive(false);
    //         console.log("should hide");
    //     } else if (path !== '/' && isActive === false) {
    //         setIsActive(true);
    //         console.log("should show");
    //     }
    // }, [path]);
    // La solution ci-dessous consomme trop de ressources
    setInterval(() => {
        if (window.location.pathname === '/' && isActive === true) {
            setIsActive(false);
            // console.log("should hide");
        } else if (window.location.pathname !== '/' && isActive === false) {
            setIsActive(true);
            // console.log("should show");
        }
    }, 800);

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