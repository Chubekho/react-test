import { NavLink } from "react-router";
import styles from "./Navigation.module.scss"

const navItems = [
    {
        to: "/",
        title: "Home"
    },
    {
        to: "/News",
        title: "News"
    },
    {
        to: "/Dashboard",
        title: "Dashboard"
    },
    {
        to: "/use-state",
        title: "UseState"
    },
    {
        to: "/hooks",
        title: "Hooks"
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