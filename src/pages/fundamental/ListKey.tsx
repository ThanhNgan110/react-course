import React from 'react'

interface ITodo {
  title: string,
  id: number
}

function ListKey() {
  const [todos, setTodos] = React.useState<ITodo[]>([
    { id: 1, title: 'react'}
  ]);
  // const renderTodos = todos.map(todo => (
  //   <div key={todo.id}>Title: {todo.title}</div>
  // ))

  return (
    <div>
      <h1>ListKey</h1>
      {Array.isArray(todos) && todos.map(todo => (
        <div key={todo.id}>Title: {todo.title}</div>
      ))}
      <br />
      {/* {renderTodos} */}
    </div>
  )
}

export default ListKey