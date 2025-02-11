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
import { CartContainer } from './Cart/CartContainer';
import {BackgroundSlideshow} from './backgroundSlider';
import './App.css';

export const App: React.FC = () => {
    const location = useLocation();
    // Floute le fond sur toutes les pages, sauf la homepage
    useEffect(() => {
        if (location.pathname === "/") {
            document.body.classList.add("home");
        } else {
            document.body.classList.remove("home");
        }
    }, [location.pathname]);

    return (
        <div className="app">
            <BackgroundSlideshow path={location.pathname}/>
            {/* <div className="background"></div> */}
            <div className="full-content">
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
                            <Route path="/Cart" element={<CartContainer />} />
                        </Routes>
                    </SidebarProvider>
                </CartProvider>
            </div>
        </div>
    );
};
