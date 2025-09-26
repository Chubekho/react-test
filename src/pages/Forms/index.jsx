import { useState } from "react";

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
    marginLeft: 10,
    border: "none",
    borderRadius: 4,
  },
};

function Forms() {
  const [value, setValue] = useState("");
  //   console.log(`Current state: ${value}`);

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.heading}>Forms Demo</h1>
      <input
        type="text"
        placeholder="type something. . ."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button style={styles.button} onClick={() => setValue("")}>
        Clear
      </button>
    </div>
  );
}

export default Forms;
