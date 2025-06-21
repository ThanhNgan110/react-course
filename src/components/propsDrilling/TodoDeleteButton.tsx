import type { ITodo } from '../../pages/fundamental/PropsDrillingLiftingStateUp'

interface TodoDeleteButtonProps {
  todo: ITodo,
  deleteTodo: (id: number) => void
}

function TodoDeleteButton({ todo, deleteTodo }: TodoDeleteButtonProps) {
  return (
    <button type="button" onClick={() => deleteTodo(todo.id)}>Delete</button>
  )
}

export default TodoDeleteButton