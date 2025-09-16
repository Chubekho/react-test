import { useRef } from "react";
import styles from "./Hooks.module.scss"

function Hooks() {
    const inputRef = useRef(null);

    return (
        <div className={styles.wrapper}>
            <h1>Hook page</h1>
            <br />
            <div>
                <input
                    className={styles.input}
                    type="text"
                    ref={inputRef} />
                <button
                    className={styles.button}
                    onClick={() => {
                        inputRef.current.focus()
                    }}
                >
                    Focus
                </button>
            </div>
        </div>
    )
}

export default Hooks;