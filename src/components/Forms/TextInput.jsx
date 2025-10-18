import styles from "./Forms.module.scss";

function TextInput({ label, ...passProps }) {
  return (
    <label className={styles.textInputWrapper}>
      <span className={styles.label}>{label}</span>
      <input {...passProps} className={styles.textInput} />
    </label>
  );
}

export default TextInput;
