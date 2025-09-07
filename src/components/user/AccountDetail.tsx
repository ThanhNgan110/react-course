import React from 'react'
import { useParams } from 'react-router'

function AccountDetail() {
  const { accountId } = useParams();
  const [user, setUser] = React.useState<any>(null);

  React.useEffect(() => {
    if (!accountId) return;

    async function fetchUser() {
      try {
        const res = await fetch(`https://tony-auth-express-vdee.vercel.app/api/user/${accountId}`);
        const data = await res.json();
        setUser(data.data)
      } catch (e) {}
    }
    fetchUser();
  }, [accountId])

  console.log('user: ', user)

  return (
    <div>
      <h5>AccountDetail</h5>
      First Name: {user?.first_name} <br />
      Last Name: {user?.last_name} <br />
      Email: {user?.email} <br />
    </div>
  )
}

export default AccountDetail