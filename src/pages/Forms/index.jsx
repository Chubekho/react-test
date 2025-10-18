// import useFormValue from "@/hooks/useFormValue";

import { Form, TextInput } from "@/components/Forms";

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
    border: "none",
    borderRadius: 4,
  },
};

function Forms() {
  // const [formValues, handleChange] = useFormValue({
  //   email: "",
  //   password: "",
  // });

  const initValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (formValues) => {
    // e.preventDefault();

    console.log(formValues);
  };

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.heading}>Forms Demo</h1>
      <Form initValues={initValues} onSubmit={handleSubmit}>
        <TextInput type="email" placeholder="Enter email" />
        <TextInput name="password" type="password" placeholder="Enter password" />
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </Form>
    </div>

    // <div style={styles.wrapper}>
    //   <h1 style={styles.heading}>Forms Demo</h1>
    //   <form action="" onSubmit={handleSubmit}>
    //     <input
    //       type="email"
    //       placeholder="Enter email"
    //       name="email"
    //       value={formValues.email}
    //       onChange={handleChange}
    //     />
    //     <br />
    //     <input
    //       type="password"
    //       placeholder="Enter password"
    //       name="password"
    //       value={formValues.password}
    //       onChange={handleChange}
    //     />
    //     <br />
    //     <button type="submit" style={styles.button}>
    //       Submit
    //     </button>
    //   </form>
    // </div>
  );
}

export default Forms;
