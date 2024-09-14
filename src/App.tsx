import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Sushi } from './Sushi/Sushi';
import { Dessert } from './Dessert/Dessert';
import { Thai } from './Thai/Thai';
import { Starter } from './Starter/Starter';
import { Home } from './Home/Home';
import { Topbar } from './Topbar/Topbar';
import { SidebarProvider } from './Context/SidebarContext';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import { CartProvider } from './Context/CartContext';
import { CartComponent } from './Cart/cart-module';
import './App.css';

export const App: React.FC = () => {
    const location = useLocation();
    const [showCallButton, setShowCallButton] = useState(false);
    
    // const [showCallButton, setShowCallButton] = useState(window.location.pathname !== '/');
    // useEffect(() => {
    //     const active = location.pathname !== '/';
    //     setShowCallButton(active);
    // }, [location]);

    return (
        <div className="app">
            <Analytics />
            <SpeedInsights />
            <CartProvider>
                <SidebarProvider>
                    <Topbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Jap" element={<Sushi />} />
                        <Route path="/Desserts" element={<Dessert />} />
                        <Route path="/Thai" element={<Thai />} />
                        <Route path="/Starters" element={<Starter />} />
                        <Route path="/Cart" element={<CartComponent />} />
                    </Routes>
                </SidebarProvider>
            </CartProvider>
            {showCallButton ? (
                <a
                    href="tel:+33140360932"
                    className="contact-call"
                    style={{
                    }}
                >
                    <img
                        src="tel.svg"
                        alt="contactez appelez Sabaidi"
                        className="tel-logo"
                    />
                    <span className="call-text">Appelez-nous !</span>
                </a>
            ) : null}
        </div>
    );
};
