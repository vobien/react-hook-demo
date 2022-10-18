import { ADD_JOB, REMOVE_JOB } from "./constants";

// 1. create inital state
export const initalState = {
  jobs: [],
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

export default reducer;
