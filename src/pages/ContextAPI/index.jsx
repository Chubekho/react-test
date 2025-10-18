import { Context as ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

const styles = {
  wrapper: { margin: 20 },
  heading: {
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 20,
  },
  button: {
    background: "#ccc",
    padding: "2px 10px",
    border: "none",
    borderRadius: 4,
  },
};

function A() {
  return <B />;
}

function B() {
  return <C />;
}

function C() {
  const { theme, toggle } = useContext(ThemeContext);
  console.log(theme);
  
  return (
    <div>
      <h3>Curent theme: {theme}</h3>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

function ContextAPI() {
  return (
    <div style={styles.wrapper}>
      <h1>Context API Demo</h1>
      <A />
    </div>
  );
}

export default ContextAPI;
