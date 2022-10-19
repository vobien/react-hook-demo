import { useCallback, useContext, useState } from "react";
import "./App.css";

import DemoCheckbox from "./DemoCheckbox";
import DemoMemo from "./DemoMemo";
import DemoState from "./DemoState";
import DemoTodoList from "./DemoTodoList";
import DemoMount from "./DemoMount";
import DemoHookMemo from "./DemoHookMemo";
import DemoUseReducer from "./DemoUseReducer";
import ContentTheme from "./ContentTheme";
import { ThemeContext } from "./ThemeContext";
import DemoGlobalState from "./DemoGlobalState";
import { StoreProvider } from "./store";
import DemoImperativeHandle from "./DemoImperativeHandle";

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
  const themeContext = useContext(ThemeContext);

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

      <DemoUseReducer />

      <button onClick={themeContext.handleToggleTheme}>Toggle Theme</button>
      <ContentTheme />

      <StoreProvider>
        <DemoGlobalState />
      </StoreProvider>

      <DemoImperativeHandle />
    </>
  );
}

export default App;
