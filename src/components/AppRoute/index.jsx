import { BrowserRouter, Routes, Route } from "react-router";

import Home from "@/pages/Home";
import UseState from "@/pages/UseState";
import Hooks from "@/pages/Hooks"
import HOC from "@/pages/HOC"
import Debounce from "@/pages/Debounce"
import TabsDemo from "@/pages/TabsDemo";
import Forms from "@/pages/Forms";
import Navigation from "../Navigation";

function AppRoutes() {
    return (
        <div>
            <BrowserRouter>
            <Navigation/>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="/use-state" element={<UseState/>}/>
                    <Route path="/hooks" element={<Hooks/>}/>
                    <Route path="/HOC" element={<HOC/>}/>
                    <Route path="/Debounce" element={<Debounce/>}/>
                    <Route path="/TabsDemo" element={<TabsDemo/>}/>
                    <Route path="/Forms" element={<Forms/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRoutes;