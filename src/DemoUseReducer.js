import { useReducer, useState } from "react";

// 1. define init value
const initalValue = 0;

// 2. define action
const ADD_ACTION = "increase";
const SUBTRACT_ACTION = "decrease";

// 3. define reducer - a func (state, action) -> newState
const reducer = (state, action) => {
  switch (action) {
    case ADD_ACTION:
      return state + 1;
    case SUBTRACT_ACTION:
      return state - 1;
    default:
      throw Error("Invalid action");
  }
};

export default function DemoUseReducer() {
  // 4. use hook useReducer
  const [count, dispatch] = useReducer(reducer, initalValue);

  return (
    <div>
      <h1>Demo hook useReducer()</h1>
      <ul>
        Usages - easier to code for a component having:
        <li>complicated State (nested levels)</li>
        <li>many States</li>
      </ul>

      <button
        style={{ margin: "10px" }}
        type="button"
        onClick={() => dispatch(SUBTRACT_ACTION)}
      >
        -1
      </button>
      <span style={{ fontWeight: "bold", color: "red" }}>{count}</span>
      <button
        style={{ margin: "10px" }}
        type="button"
        onClick={() => dispatch(ADD_ACTION)}
      >
        + 1
      </button>
    </div>
  );
}
