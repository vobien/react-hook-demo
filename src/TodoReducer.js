import { useReducer, useRef } from "react";

// 1. create inital state
const initalState = {
  jobs: [],
};

// 2. define action
const ADD_JOB = "add_job";
const REMOVE_JOB = "remove_job";

const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};

const removeJob = (payload) => {
  return {
    type: REMOVE_JOB,
    payload,
  };
};

// 3. define reducer
const reducer = (state, action) => {
  switch (action.type) {
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    case REMOVE_JOB:
      const newJobs = state.jobs.filter((job) => job !== action.payload);
      return {
        ...state,
        jobs: newJobs,
      };
    default:
      throw Error("Invalid action: ", action);
  }
};

export default function TodoReducer() {
  const [todo, dispatch] = useReducer(reducer, initalState);
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
