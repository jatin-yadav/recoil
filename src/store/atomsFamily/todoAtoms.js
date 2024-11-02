import { atomFamily } from "recoil";
import { TODOS } from "../../todoList.js";

export const todoAtomFamily = atomFamily({
  key: "todoatoms",
  default: (id) => {
    const todo = TODOS.find((todo) => todo.id === id);
    return todo || { id, title: "Not Found", desc: "", status: false }; // Fallback if todo not found
  },
});
