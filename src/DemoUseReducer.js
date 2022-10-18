import CounterReducer from "./CounterReducer";
import TodoApp from "./Todo";

export default function DemoUseReducer() {
  return (
    <div>
      <h1>Demo hook useReducer()</h1>
      <ul>
        Usages - easier to code for a component having:
        <li>complicated State (nested levels)</li>
        <li>many States</li>
      </ul>

      <CounterReducer />

      <TodoApp />
    </div>
  );
}
