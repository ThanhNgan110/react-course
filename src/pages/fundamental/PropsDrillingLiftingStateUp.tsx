import React from 'react'
import TodoForm from '../../components/propsDrilling/TodoForm';
import TodoCount from '../../components/propsDrilling/TodoCount';
import TodoList from '../../components/propsDrilling/TodoList';

export interface ITodo {
  id: number,
  title: string
}

function PropsDrillingLiftingStateUp() {
  const [todos, setTodos] = React.useState<ITodo[]>([]);

  function addTodo(title: string) {
    const newTodo = {
      id: Date.now(),
      title
    }
    setTodos(prevState => [...prevState, newTodo]);
  }

  function deleteTodo(id: number) {
    setTodos(prevState => prevState.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <h1>PropsDrillingLiftingStateUp</h1>
      
      <TodoForm addTodo={addTodo} />

      <TodoCount todos={todos} />

      <div>
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </div>

    </div>
  )
}

export default PropsDrillingLiftingStateUp