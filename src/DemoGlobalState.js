import { useStore, actions } from "./store";

function DemoGlobalState() {
  const [state, dispatch] = useStore();
  const { todoInput, todos } = state;

  return (
    <div>
      <h1>Demo Global State = useReducer() + context/useContext()</h1>
      <p>
        Redux is the best choice for global state
        <ul>
          <li>
            performance, context & useReducer will render all children when
            state changes
          </li>
          <li>
            redux can be used in Javascript project, react-context is only used
            for react project
          </li>
          <li>
            Redux can add many middleware such as logger, with context we have
            to manually implement middleware
          </li>
        </ul>
      </p>
      <input
        type="text"
        name="todo"
        value={todoInput}
        placeholder="Input the task"
        onChange={(e) => dispatch(actions.setTodoInput(e.target.value))}
      />

      <button onClick={() => dispatch(actions.addTodo(todoInput))}>Add</button>

      <ul>
        {todos?.map((task) => {
          return <li key={task}>{task}</li>;
        })}
      </ul>
    </div>
  );
}

export default DemoGlobalState;
