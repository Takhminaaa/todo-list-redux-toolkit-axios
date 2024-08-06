import { useDispatch } from "react-redux";
import { deleteTodoRequest } from "../store/thunks/todoThanks";

export default function TodoItem({ title, id }) {
  const dispatch = useDispatch();

  const handleDeleteTodo = (todoId) => {
    dispatch(deleteTodoRequest(todoId));
  };
  return (
    <div>
      <span>{title}</span>
      <button onClick={() => handleDeleteTodo(id)}>delete</button>
    </div>
  );
}
