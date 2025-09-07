import React from 'react'
import { useNavigate, useSearchParams } from 'react-router';

function Account() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const _page = searchParams.get('page');
  const _limit = searchParams.get('limit') || 2;
  const [page, setPage] = React.useState(Number(_page || 1));
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    async function fetchUsers() {
      try {
        navigate(`/user/account?page=${page}&limit=2`, { replace: true });
        const res = await fetch(`https://tony-auth-express-vdee.vercel.app/api/user?page=${page}&limit=${_limit}`);
        const data = await res.json();
        setUsers(data.data)
      } catch (e) {}
    }
    fetchUsers();
  }, [page, _limit])

  function onPrevPage() {
    setPage(prev => prev - 1)
  }

  function onNextPage() {
    setPage(prev => prev + 1)
  }

  return (
    <div>
      <table border={1} >
        <tr>
          <td>
            First Name
          </td>
          <td>
            Last Name
          </td>
          <td>
            Email
          </td>
           <td>
            Action
          </td>
        </tr>
          {users.map((user: any) => (
            <tr>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => navigate(`/user/account/${user._id}`)}>View Detail</button>
              </td>
            </tr>
          ))}
      </table>

      <button onClick={onPrevPage}>Prev Page</button>
      <span>{page}</span>
      <button onClick={onNextPage}>Next Page</button>
    </div>
  )
}

export default Account