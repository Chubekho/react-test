import useFormValue from "@/hooks/useFormValue";
import Context from "./Context";
import styles from "./Forms.module.scss";

function Form({ children, initValues, onSubmit }) {
  const [formValues, handleChange] = useFormValue(initValues);

  const handleSubmit = (e) => {
    e.prenventDefault();

    onSubmit();
  };

  const value = {
    formValues,
    handleChange
  };

  return (
    <Context.Provider value={value}>
      <form className={styles.form} onSubmit={handleSubmit}>{children}</form>
    </Context.Provider>
  );
}

export default Form;
