import { useRecoilValue } from "recoil";
import { todoAtomFamily } from "./store/atomsFamily/todoAtoms";

const Todos = () => {
  return (
    <div>
      <Todo id={1} />
    </div>
  );
};

export default Todos;

const Todo = (id) => {
  console.log(id);
  const currentTodo = useRecoilValue(todoAtomFamily(id));
  console.log(currentTodo);

  return (
    <div>
      <h2>{currentTodo.title}</h2>
    </div>
  );
};
