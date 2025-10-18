import { createContext, useState } from "react";

const Context = createContext();

const Provider = ({children}) => {
    const [theme, setTheme] = useState('Dark')
    const value = {
        theme,
        toggle() {
            setTheme(theme === 'Light' ? 'Dark' : 'Light')
        }
    }

    return <Context.Provider value={value}>{children}</Context.Provider>
}

export {Context, Provider};