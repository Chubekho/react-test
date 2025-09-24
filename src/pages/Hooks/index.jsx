import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import styles from "./Hooks.module.scss";

const ChildComponent = forwardRef((props, ref) => {
  const [counter, setCounter] = useState(0);

  useImperativeHandle(
    ref,
    () => {
      return {
        increase: () => {
          setCounter(counter + 1);
        },
      };
    },
    [counter]
  );

  const handleCounterChange = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  return (
    <div>
      {console.log("re-render")}
      <button className={styles.button} onClick={handleCounterChange}>
        Counter 1 is: {counter}
      </button>
    </div>
  );
});

function Hooks() {
  const childRef = useRef(null);

  useEffect(() => {
    console.log(childRef);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div>
        <ChildComponent ref={childRef} />
        <button
          className={styles.button}
          style={{ marginTop: "30px" }}
          onClick={() => childRef.current.increase()}
        >
          Increase
        </button>
      </div>
    </div>
  );
}

export default Hooks;
