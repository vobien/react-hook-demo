import { useStore, actions } from "./store";

function DemoGlobalState() {
  const [state, dispatch] = useStore();
  const { todoInput, todos } = state;

  return (
    <div>
      <h1>Demo Global State = useReducer() + context/useContext()</h1>

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
