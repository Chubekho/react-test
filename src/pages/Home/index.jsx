import { useState } from "react";
import styles from "./Home.module.scss"
import Modal from "@/components/Modal";


function Home() {
    const [isOpen, setisOpen] = useState(false);
    return (
        <div className={styles.wrapper}>
            <h1>Home page</h1>
            <button className={styles.button} onClick={() => setisOpen(true)}>Open modal</button>
            <button className={styles.button} onClick={() => setisOpen(false)}>Close modal</button>

            {isOpen && (
                <Modal
                    isOpen
                    onRequestClose={() => setisOpen(false)}
                    bodyOpenClassName="modal-custom-body"
                >
                    <h2>Register</h2>
                    <form action="">
                        <input type="text" placeholder="Email"/>
                        <input type="text" placeholder="Password"/>
                        <button> Register</button>
                    </form>

                </Modal>
            )}

        </div>
    )
    
}

export default Home;