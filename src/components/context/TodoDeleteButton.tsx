import { useTodoContext } from '../../contexts/TodoContext'
import type { ITodo } from '../../pages/fundamental/PropsDrillingLiftingStateUp'

interface TodoDeleteButtonProps {
  todo: ITodo,
}

function TodoDeleteButton({ todo }: TodoDeleteButtonProps) {
  const { deleteTodo } = useTodoContext();

  return (
    <button type="button" onClick={() => deleteTodo(todo.id)}>Delete</button>
  )
}

export default TodoDeleteButton