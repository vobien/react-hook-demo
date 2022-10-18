import { useReducer, useRef } from "react";
import reducer, { initalState } from "./reducers";
import { addJob, removeJob } from "./actions";
import logger from "./logger";

export default function TodoReducer() {
  const [todo, dispatch] = useReducer(logger(reducer), initalState);
  const taskRef = useRef();

  const handleAddTask = (task) => {
    if (task?.length > 0) {
      dispatch(addJob(task));

      taskRef.current.value = "";
      taskRef.current.focus();
    }
  };

  return (
    <div>
      <p>Example 2: Todo list</p>

      <input
        ref={taskRef}
        type="text"
        name="job"
        placeholder="Input your task here"
      />
      <button onClick={() => handleAddTask(taskRef.current.value)}>Add</button>

      <ul style={{ padding: 0 }}>
        {todo?.jobs.map((job) => {
          return (
            <p key={job} style={{ margin: "0 auto 0 0" }}>
              {job}
              <span
                style={{ color: "red", marginLeft: "10px" }}
                onClick={() => dispatch(removeJob(job))}
              >
                x
              </span>
            </p>
          );
        })}
      </ul>
    </div>
  );
}
