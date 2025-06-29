import React from 'react'

/*
clean up function effect
- run when component unmount (run all clean up function)
- run when component next-render (not run for first render)
- run before effect
*/
// https://jsonplaceholder.typicode.com/todos?_page=1&_limit=3
interface ITodo {
  id: number,
  title: string
}

function EffectHook() {
  const [count, setCount] = React.useState(1);
  const [todos, setTodos] = React.useState<ITodo[]>([]);
  const [page, setPage] = React.useState(1)

  React.useEffect(() => {
    console.log('useEffect with no dependency');
    return () => {
      console.log('cleanup function useEffect with no dependency');
    }
  })

  React.useEffect(() => {
    console.log('useEffect with empty dependency');
    return () => {
      console.log('cleanup function useEffect with empty dependency');
    }
  }, []); // run once-time for first render

  React.useEffect(() => {
    console.log('useEffect with dependency');
    async function fetchTodos() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=3`);
      const data = await response.json();
      setTodos(data);
    }
    fetchTodos();

    return () => {
      console.log('cleanup function useEffect with dependency');
    }
  }, [page])

  React.useLayoutEffect(() => {
    console.log('useLayoutEffect with no dependency');
    return () => {
      console.log('cleanup function useLayoutEffect with no dependency');
    }
  })

  React.useLayoutEffect(() => {
    console.log('useLayoutEffect with empty dependency');
    return () => {
      console.log('cleanup function useLayoutEffect with empty dependency');
    }
  }, [])

  React.useLayoutEffect(() => {
    console.log('useLayoutEffect with dependency');
    return () => {
      console.log('cleanup function useLayoutEffect with dependency');
    }
  }, [page])

  function updateCount() {
    setCount(prevState => prevState + 1);
  }

  console.log('---------------------')
  console.log('EffHook render')
  return (
    <div>
      <h1>EffectHook</h1>
      Count: {count} <br />
      <button type="button" onClick={updateCount}>Update Count</button>
      <div><b>Todo List</b></div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            Title: {todo.title}
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => setPage(prev => prev - 1)}>Prev Page</button>
      {page}
      <button type="button" onClick={() => setPage(prev => prev + 1)}>Next Page</button>
    </div>
  )
}

export default EffectHook