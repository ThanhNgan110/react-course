import { useTodoContext } from "../../contexts/TodoContext"

function TodoCount() {
  const { todos } = useTodoContext();
  return (
    <div>
      Todo Count: {todos.length}
    </div>
  )
}

export default TodoCount