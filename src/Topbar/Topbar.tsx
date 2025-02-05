import React, { useEffect, useState } from "react";
import "./Topbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";

export const Topbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { cart } = useCart(); 
    const navigate = useNavigate();
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogo = () => {
        setIsMenuOpen(false);
        navigate("/");
    }

    useEffect(() => {
        // Ajouter une classe au body
        document.body.classList.toggle("no-scroll", isMenuOpen);
    }, [isMenuOpen]);

    return (
        <>
            <div className={`topbar active ${isMenuOpen ? "isOpen" : ""}`}>
                <Link
                    to="/"
                    className="logo"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Retour à l'accueil"
                    data-tooltip-place="bottom"
                >
                    <img src="logo_couleur_texte.png" alt="Logo Thaiko" />
                </Link>

                <div className="navigation-links">
                    <Link to="/Starters">STARTERS</Link>
                    <Link to="/Jap">JAP'</Link>
                    <Link to="/Thai">THAÏ</Link>
                    <Link to="/Desserts">DESSERTS</Link>
                </div>

                <Link className="order-button" to="/Cart">{cart.length > 0 ? "COMMANDER" : "PANIER"}</ Link>

                {/* Bouton pour ouvrir le menu */}
                <div className="menu-deroulant" onClick={toggleMenu}>
                    <img src="menu-deroulant.svg" alt="Déplier le menu" />
                </div>
            </div>

            {/* Div du menu déroulant */}
            {isMenuOpen && (
                <div className={`menu-box ${isMenuOpen ? "menu-box-open" : ""}`}>
                    <button className="close-button" onClick={toggleMenu}>
                        ✕
                    </button>
                    <div className="logo-menu" onClick={() => handleLogo()}><img src="logo_couleur_texte.png" alt="logo restaurant japonais paris" /></div>
                    <div className="menu-links">
                        <Link to="/Starters" onClick={toggleMenu}>STARTERS</Link>
                        <Link to="/Jap" onClick={toggleMenu}>JAP'</Link>
                        <Link to="/Thai" onClick={toggleMenu}>THAÏ</Link>
                        <Link to="/Desserts" onClick={toggleMenu}>DESSERTS</Link>
                    </div>
                    <div className="cart-redirect">
                        <button className="cart-button-redirect">Panier</button>
                    </div>
                </div>
            )}
        </>
    );
};
