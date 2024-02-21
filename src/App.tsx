import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Sushi } from './Sushi/Sushi';
import { Dessert } from './Dessert/Dessert';
import { Thai } from './Thai/Thai';
import { Starter } from './Starter/Starter';
import { Home } from './Home/Home';
import { Topbar } from './Topbar/Topbar';
import { SidebarProvider, useSidebar } from './Context/SidebarContext';

export const App = () =>
{    
    // const [darkMode, setDarkMode] = React.useState(false);
//     const [shouldRenderSidebar, setShouldRenderSidebar] = React.useState(false);
//     const location = useLocation();
//     React.useEffect(() => {
//         if (location.pathname === "/") {
//             setShouldRenderSidebar(false);
//         } else {
//             setShouldRenderSidebar(true);
//         }
//     }, [location]);
    
    return (
        <div className="app">
            <SidebarProvider>
                <Topbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Sushis" element={<Sushi />} />
                    <Route path="/Desserts" element={<Dessert />} />
                    <Route path="/Thai" element={<Thai />} />
                    <Route path="/Starters" element={<Starter />} />
                </Routes>
            </SidebarProvider>
        </div>
    )
}
