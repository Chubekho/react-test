import { NavLink } from "react-router";
import styles from "./Navigation.module.scss"

const navItems = [
    {
        to: "/",
        title: "Home"
    },
    {
        to: "/use-state",
        title: "UseState"
    },
    {
        to: "/test",
        title: "Test"
    },
    {
        to: "/hooks",
        title: "Hooks"
    },
    {
        to: "/HOC",
        title: "HOC"
    },
    {
        to: "/Debounce",
        title: "Debounce"
    },
    {
        to: "/TabsDemo",
        title: "Tabs Demo"
    },
    {
        to: "/Forms",
        title: "Forms Demo"
    },
    {
        to: "/context-api",
        title: "Context API"
    },
    
]

function Navigation() {
    return (
        <nav className={styles['nav-heading']}>
            <ul className={styles['nav-list']}>
                {navItems.map((navItem, index) =>
                    <li key={index}>
                        <NavLink
                            to={navItem.to}
                            className={({ isActive }) =>
                                `${isActive ? styles.active : ""} ${styles["nav-link"]}`
                            }
                        >
                            {navItem.title}
                        </NavLink>
                    </li>)
                }
            </ul>
        </nav>
    )
}

export default Navigation;