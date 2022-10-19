import { ADD_TODO, SET_TODO_INPUT } from "./constants";

const initalState = {
  todos: [],
  todoInput: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      throw Error("Invalid action ", action);
  }
};

export { initalState };
export default reducer;
