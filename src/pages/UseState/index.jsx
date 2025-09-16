import { useState } from "react";
import styles from "./UseState.module.scss"

function UseState() {
    // const [value, setValue] = useState(() => HeavyLogic(3e9))
    const [count, setCount] = useState(0)

    return (
        <div className={styles.wrapper}>
            <div>
                <h1>Use State page</h1>
                <button
                    className={styles.button}
                    onClick={() => setCount(count + 1)}>
                    Increase
                </button>
                <h2>{count}</h2>
            </div>
        </div>
    )
}

export default UseState;