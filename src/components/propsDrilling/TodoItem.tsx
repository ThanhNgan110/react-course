import type { ITodo } from '../../pages/fundamental/PropsDrillingLiftingStateUp'
import TodoDeleteButton from './TodoDeleteButton'

interface TodoItemProps {
  todo: ITodo,
  deleteTodo: (id: number) => void
}

function TodoItem({ todo, deleteTodo }: TodoItemProps) {
  return (
    <li key={todo.id}>
      Title: {todo.title}
      <TodoDeleteButton 
        todo={todo}
        deleteTodo={deleteTodo}
      />
    </li>
  )
}

export default TodoItem