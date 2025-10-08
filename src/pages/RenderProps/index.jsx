import { useEffect, useState } from "react";

function Counter({ children }) {
  const [counter, setCounter] = useState(0);
  const increase = () => setCounter(counter + 1);

  return children({ counter, increase });
}

function List({ data = [], children }) {
  const handleClick = () => {
    console.log("Clicked");
  };
  return <ul>{data.map((item) => children({ item, handleClick }))}</ul>;
}

const RenderProps = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        setUsers(users);
      });
  }, []);
  return (
    <div>
      <h1>RenderProps</h1>
      <Counter>
        {({ counter, increase }) => (
          <button onClick={increase}>Increase ({counter})</button>
        )}
      </Counter>

      <List data={users}>
        {({ item, handleClick }) => <li key={item.id} onClick={handleClick}>{item.name}</li>}
      </List>
    </div>
  );
};

// Các kỹ thuật tái sử dụng logic:
// 1. HOC - Higher Order Component
// 2. Render Props - Children props
// 3. Custom hooks

export default RenderProps;
