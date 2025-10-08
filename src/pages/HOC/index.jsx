import { useState } from "react";

// import Modal from "@/components/Modal";
import styles from "./HOC.module.scss";

// Quy tac dat ten HOC: bat dau voi with...
// eslint-disable-next-line no-unused-vars
function withCounter(Component) {
  const WrappedContent = () => {
    const [counter, setCounter] = useState(0);
    return (
      <Component counter={counter} increase={() => setCounter(counter + 1)} />
    );
  };

  return WrappedContent;
}

const MyComponent1 = withCounter(({ counter, increase }) => {
  return <button onClick={increase}>Increase ({counter})</button>;
});
const MyComponent2 = withCounter(({ counter, increase }) => {
  return <button onClick={increase}>Increase ({counter})</button>;
});

const HOC = () => {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.wrapper}>
      <h1>HOC - Higher Order Component</h1>
      <MyComponent1 />
      <MyComponent2 />

      {/* <button onClick={() => setIsOpen(true)}>Open modal</button>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        Modal content
      </Modal> */}
    </div>
  );
};

// Các kỹ thuật tái sử dụng logic:
// 1. HOC - Higher Order Component
// 2. Render Props - Children props
// 3. Custom hooks

export default HOC;
