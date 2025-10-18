import { BrowserRouter as Router, Routes, Route } from "react-router";

import Home from "@/pages/Home";
import UseState from "@/pages/UseState";
import Hooks from "@/pages/Hooks";
import HOC from "@/pages/HOC";
import Debounce from "@/pages/Debounce";
import TabsDemo from "@/pages/TabsDemo";
import Forms from "@/pages/Forms";
import ContextAPI from "@/pages/ContextAPI";
import DefaultLayout from "@/layouts/DefaultLayout";
import SidebarLayout from "@/layouts/SidebarLayout";
import Test from "@/pages/Test";
import RenderProps from "@/pages/RenderProps";
import CustomHook from "@/pages/CustomHook";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayout />}>
          {/* Default Layout */}

          <Route index element={<Home />} />
        </Route>

        <Route element={<SidebarLayout />}>
          <Route path="/use-state" element={<UseState />} />
          {/* Sidebar Layout */}
        </Route>

        {/* No Layouts */}
        <Route path="test" element={<Test />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/HOC" element={<HOC />} />
        <Route path="/render-props" element={<RenderProps />} />
        <Route path="/Debounce" element={<Debounce />} />
        <Route path="/TabsDemo" element={<TabsDemo />} />
        <Route path="/Forms" element={<Forms />} />
        <Route path="/context-api" element={<ContextAPI />} />
        <Route path="/custom-hook" element={<CustomHook />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
