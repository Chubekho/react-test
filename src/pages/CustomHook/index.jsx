import { useCounter } from "@/hooks";

const CustomHook = () => {
  const [counter, increase] = useCounter(2);
  return <button onClick={increase}>Click me to increase ({counter})</button>;
};

export default CustomHook;
