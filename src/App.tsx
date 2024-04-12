import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Sushi } from './Sushi/Sushi';
import { Dessert } from './Dessert/Dessert';
import { Thai } from './Thai/Thai';
import { Starter } from './Starter/Starter';
import { Home } from './Home/Home';
import { Topbar } from './Topbar/Topbar';
import { SidebarProvider } from './Context/SidebarContext';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import { CartProvider, useCart } from './Context/CartContext';

export const App = () =>
{
    return (
        <div className="app">
            <Analytics/>
            <SpeedInsights/>
            <CartProvider>
                <SidebarProvider>
                    <Topbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Jap" element={<Sushi />} />
                        <Route path="/Desserts" element={<Dessert />} />
                        <Route path="/Thai" element={<Thai />} />
                        <Route path="/Starters" element={<Starter />} />
                    </Routes>
                </SidebarProvider>
            </CartProvider>
        </div>
    )
}
