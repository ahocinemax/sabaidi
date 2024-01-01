import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Sushi } from './Sushi/Sushi';
import { Dessert } from './Dessert/Dessert';
import { Thai } from './Thai/Thai';
import { Starter } from './Starter/Starter';
import { Home } from './Home/Home';
import { Topbar } from './Topbar/Topbar';

export const App = () =>
{
    return (
        <div className="app">
            <Topbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Sushis" element={<Sushi />} />
                <Route path="/Desserts" element={<Dessert />} />
                <Route path="/Thai" element={<Thai />} />
                <Route path="/Starters" element={<Starter />} />
            </Routes>
        </div>
    )
}
