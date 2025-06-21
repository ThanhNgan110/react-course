import React from 'react'

interface TodoForm {
  addTodo: (title: string) => void
}

function TodoForm({ addTodo }: TodoForm) {
  const [title, setTitle] = React.useState('');

  return (
    <div>
      Title: 
      <input type="text" onChange={e => setTitle(e.target.value)} /> 
      <button type="button" onClick={() => addTodo(title)}>Add Todo</button>
    </div>
  )
}

export default TodoForm