import type { ITodo } from '../../pages/fundamental/PropsDrillingLiftingStateUp'

interface TodoCountProps {
  todos: ITodo[]
}

function TodoCount({ todos }: TodoCountProps) {
  console.log("TodoCount render")
  return (
    <div>
      Todo Count: {todos.length}
    </div>
  )
}

export default TodoCount