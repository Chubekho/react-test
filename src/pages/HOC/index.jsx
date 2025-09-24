import styles from "./HOC.module.scss"

import { useState } from "react";

// eslint-disable-next-line no-unused-vars
function withCounter(Component) {
  const WrappedComponent = () => {
    const [counter, setCounter] = useState(0);
    return (
      <Component
        counter={counter}
        increase={() => setCounter(counter + 1)}
        decrease={() => setCounter(counter - 1)}
      ></Component>
    );
  };
  return WrappedComponent;
}

const MyComponent1 = withCounter(({ counter, increase }) => {
  return (
    <div>
      <button onClick={increase} className={styles.button}>Increase ({counter})</button>
    </div>
  );
});

const MyComponent2 = withCounter(({ counter, decrease }) => {
  return (
    <div>
      <button onClick={decrease} className={styles.button} style={{marginTop: "30px"}}>Decrease ({counter})</button>
    </div>
  );
});

const HOC = () => {
  return (
    <div className={styles.wrapper}>
      <h1>HOC - Higher Order Component</h1>
      <MyComponent1 />
      <MyComponent2 />
    </div>
  );
};

export default HOC;
