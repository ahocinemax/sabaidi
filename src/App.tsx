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
    const [darkMode, setDarkMode] = React.useState(false);

    const toggleDarkMode = () => { 
        console.log("is", darkMode ? "dark" : "light");
        setDarkMode(!darkMode); }
    return (
        <div className="app">
            <div className='toggle-switch'>
            <label>
                <input type='checkbox' checked={darkMode} onChange={toggleDarkMode} />
                <span className = 'slider'></span>
            </label>
        </div>
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
