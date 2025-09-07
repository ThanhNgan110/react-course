import { Link, Outlet, useNavigate } from 'react-router';

/*
/user
/user/profile
/user/account
*/

function User() {
  const navigate = useNavigate();

  function onLogout() {
    window.localStorage.clear()
    navigate('/login');
  }

  return (
    <div>
      First Name: Tony <br />
      Last Name: Nguyen <br />
      <button type="button" onClick={onLogout}>Logout</button>

      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          <li className="me-2">
            <Link
              to="/user/profile"
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/user/account"
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            >
              Account
            </Link>
          </li>
        </ul>
      </div>

      <div className='main'>
        <Outlet />
      </div>

    </div>
  )
}

export default User