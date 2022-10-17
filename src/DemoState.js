import { useState } from "react";

export default function DemoState() {
  const data = [1, 2, 3];
  const sum = data.reduce((total, val) => total + val);
  const [user, setUser] = useState(() => {
    return {
      name: "tri",
      age: sum,
    };
  });

  const handleClick = () => {
    setUser((prevState) => {
      return {
        ...prevState,
        age: prevState.age + 1,
      };
    });
  };

  return (
    <div className="App">
      <h1>{user.name}</h1>
      <h2>{user.age}</h2>
      <button onClick={handleClick}>Click me</button>
      <hr />
    </div>
  );
}
