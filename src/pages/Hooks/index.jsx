import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import styles from "./Hooks.module.scss";
import Modal from "@/components/Modal";

const ChildComponent = forwardRef((props, ref) => {
  const [counter, setCounter] = useState(0);

  const handleCounterChange = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  useImperativeHandle(
    ref,
    () => {
      return {
        increase() {
          // setCounter(counter + 1);
          handleCounterChange();
        },
      };
    },
    [handleCounterChange]
  );

  return (
    <button className={styles.button} onClick={handleCounterChange}>
      Counter is: {counter}
    </button>
  );
});

function Hooks() {
  const childRef = useRef(null);
  const modalRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      {/* Child Component */}
      <ChildComponent ref={childRef} />

      {/* Modal 1 Component */}
      <Modal ref={modalRef} onRequestClose={() => modalRef.current.close()}>
        <h3>Modal 1 content</h3>
        <button
          className={styles.button}
          style={{
            marginTop: 10,
          }}
          onClick={() => modalRef.current.close()}
        >
          Close modal
        </button>
      </Modal>

      {/* Modal 2 Component */}
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
      >
        <h3>Modal 2 content</h3>
        <button
          className={styles.button}
          style={{
            marginTop: 10,
          }}
          onClick={() => setIsOpen(false)}
        >
          Close modal 2
        </button>
      </Modal>l

      <button
        className={styles.button}
        style={{
          marginTop: 10,
        }}
        onClick={() => childRef.current.increase()}
      >
        Increase
      </button>

      <button
        className={styles.button}
        style={{
          marginTop: 10,
        }}
        onClick={() => modalRef.current.open()}
      >
        Open Modal 1
      </button>

      <button
        className={styles.button}
        style={{
          marginTop: 10,
        }}
        onClick={() => setIsOpen(true)}
      >
        Open Modal 2
      </button>
    </div>
  );
}

export default Hooks;
