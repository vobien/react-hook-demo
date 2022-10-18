import { ADD_JOB, REMOVE_JOB } from "./constants";

export const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};

export const removeJob = (payload) => {
  return {
    type: REMOVE_JOB,
    payload,
  };
};
