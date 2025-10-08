import { useCallback, useState } from "react";

function useFormValue(init = {}) {
  const [formValues, setFormValues] = useState(init);

  const handleChange = useCallback(
    (e) => {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
      });
    },
    [formValues]
  );
  return [formValues, handleChange];
}

export default useFormValue;
