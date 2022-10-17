import { useState } from "react";
import Content from "./Content";

export default function DemoMount() {
  const [show, setShow] = useState(true);
  const handleClick = () => {
    setShow((prev) => !prev);
  };
  return (
    <div>
      <button onClick={handleClick}>Hide/Show</button>
      {show && <Content />}
    </div>
  );
}
