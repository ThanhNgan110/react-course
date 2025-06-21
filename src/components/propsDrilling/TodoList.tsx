import type { ITodo } from '../../pages/fundamental/PropsDrillingLiftingStateUp'
import TodoItem from './TodoItem'

interface TodoListProps {
  todos: ITodo[],
  deleteTodo: (id: number) => void
}

function TodoList({ todos, deleteTodo }: TodoListProps) {
  return (
    <ul>
      {todos.map(todo => (
       <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  )
}

export default TodoList