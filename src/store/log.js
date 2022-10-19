function log(reducer) {
  return (state, action) => {
    console.group(action.type);
    console.log("Prev state: ", state);
    console.log("Action: ", action);
    const newState = reducer(state, action);
    console.log("New state: ", newState);
    console.groupEnd();

    return newState;
  };
}

export default log;
