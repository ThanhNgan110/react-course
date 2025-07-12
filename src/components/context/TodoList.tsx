import TodoItem from './TodoItem'
import { useTodoContext } from '../../contexts/TodoContext'

function TodoList() {
  const { todos } = useTodoContext();
  return (
    <ul>
      {todos.map(todo => (
       <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList