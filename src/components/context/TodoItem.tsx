import type { ITodo } from '../../pages/fundamental/PropsDrillingLiftingStateUp'
import TodoDeleteButton from './TodoDeleteButton'

interface TodoItemProps {
  todo: ITodo,
}

function TodoItem({ todo }: TodoItemProps) {
  return (
    <li key={todo.id}>
      Title: {todo.title}
      <TodoDeleteButton 
        todo={todo}
      />
    </li>
  )
}

export default TodoItem