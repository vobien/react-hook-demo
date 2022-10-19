import { useReducer } from "react";
import Context from "./Context";
import log from "./log";
import reducer, { initalState } from "./reducer";

function Provider({ children }) {
  const [state, dispatch] = useReducer(log(reducer), initalState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}

export default Provider;
