import React from "react";

interface ITodo {
  id: number,
  title: string
}

interface TodoContextProps {
  todos: ITodo[],
  addTodo: (title: string) => void,
  deleteTodo: (id: number) => void
}

export const TodoContext = React.createContext<TodoContextProps>({
  todos: [],
  addTodo: () => {},
  deleteTodo: () => {}
});

const initialState = {
  todos: []
}

function reducer(state = initialState, action: { type: string, payload: any }): any {
  switch(action.type) {
    case 'ADD_TODO': {
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    }
    case 'DELETE_TODO': {
      return {
        ...state,
        todos: state.todos.filter((todo: any) => todo.id !== action.payload)
      }
    }
    default:
      return state
  }
}

const actionAddTodo = (todo: ITodo) => {
  return {
    type: 'ADD_TODO',
    payload: todo
  }
}

const actionDeleteTodo = (todoId: number) => {
  return {
    type: 'DELETE_TODO',
    payload: todoId
  }
}

export const TodoProvider = ({ children }: React.PropsWithChildren) => {
  const [{ todos }, dispatch] = React.useReducer(reducer, initialState);

  function addTodo(title: string) {
    const newTodo = {
      id: Date.now(),
      title
    }
    dispatch(actionAddTodo(newTodo))
  }

  function deleteTodo(id: number) {
    dispatch(actionDeleteTodo(id))
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export const useTodoContext = () => React.useContext(TodoContext);