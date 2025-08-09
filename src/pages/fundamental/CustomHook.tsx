import React from 'react'
import TodoComponent from '../../components/TodoComponent';
import UserComponent from '../../components/UserComponent';

function CustomHook() {
  const [tab, setTab] = React.useState('todo');

  function switchTab(tab: string) {
    setTab(tab)
  }

  return (
    <>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          <li className="me-2" onClick={() => switchTab('todo')}>
            <div className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Todos</div>
          </li>
          <li className="me-2" onClick={() => switchTab('user')}>
              <div className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" aria-current="page">User</div>
          </li>
        </ul>
      </div>

      {tab === 'todo' && <TodoComponent />}
      {tab === 'user' && <UserComponent />}
    </>
  )
}

export default CustomHook