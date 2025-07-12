import React from 'react'
import { useTodoContext } from '../../contexts/TodoContext';

function TodoForm() {
  const [title, setTitle] = React.useState('');
  const { addTodo } = useTodoContext();

  return (
    <div>
      Title: 
      <input type="text" onChange={e => setTitle(e.target.value)} /> 
      <button type="button" onClick={() => addTodo(title)}>Add Todo</button>
    </div>
  )
}

export default TodoForm