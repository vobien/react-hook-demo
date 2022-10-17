import { useCallback, useState } from "react";
import "./App.css";

import DemoCheckbox from "./DemoCheckbox";
import DemoMemo from "./DemoMemo";
import DemoState from "./DemoState";
import DemoTodoList from "./DemoTodoList";
import DemoMount from "./DemoMount";
import DemoHookMemo from "./DemoHookMemo";

function emitCommentEvent(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
        detail: `You have a message for lesson ${id}`,
      })
    );
  }, 3000);
}

// emitCommentEvent(1);
// emitCommentEvent(2);
// emitCommentEvent(3);

function App() {
  const [count, setCount] = useState(0);

  // create Reference of the function outside of Component scope
  // only create new function ref when dependencies change
  // MUST use memo() & useCallback() to avoid re-rendering
  // Component unnecessarily
  const handleClickUseCallback = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <>
      <DemoState />

      <DemoCheckbox />

      <DemoTodoList />

      <DemoMount />

      <DemoMemo onClick={handleClickUseCallback} />
      <p>{count}</p>

      <DemoHookMemo />
    </>
  );
}

export default App;
