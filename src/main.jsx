// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import { Provider as ThemeProvider } from "@/contexts/ThemeContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
