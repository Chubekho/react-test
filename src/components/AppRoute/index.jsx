import { BrowserRouter, Routes, Route } from "react-router";

import Home from "../../pages/Home";
import News from "../../pages/News";
import Dashboard from "../../pages/Dashboard";
import UseState from "../../pages/UseState";
import Hooks from "../../pages/Hooks"
import Navigation from "../Navigation";

function AppRoutes() {
    return (
        <div>
            <BrowserRouter>
            <Navigation/>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="/News" element={<News/>}/>
                    <Route path="/Dashboard" element={<Dashboard/>}/>
                    <Route path="/use-state" element={<UseState/>}/>
                    <Route path="/hooks" element={<Hooks/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRoutes;