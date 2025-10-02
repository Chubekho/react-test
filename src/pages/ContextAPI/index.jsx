import { Context as ThemeContext} from "@/contexts/ThemeContext";

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
  return <B />
}

function B() {
  return <C />
}

function C() {
  return (
    <div>
      <button onClick={window.toggleTheme}>Toggle theme</button>
    </div>
  )
}


function ContextAPI () {

    return (
        <div style={styles.wrapper}>
            <h1 >Context API</h1>
            <button></button>
            <A />
        </div>
    )
}

export default ContextAPI;