import styles from "./SidebarLayout.module.scss"

import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Navigation from "../components/Navigation";

function SidebarLayout() {
  return (
    <div>
      <Header />
      <Navigation/>
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.content}>
          <Outlet />
        </div>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default SidebarLayout;
