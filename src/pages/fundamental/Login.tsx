import React from 'react'
import { useNavigate } from 'react-router';

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = React.useState({
    email: '',
    password: ''
  })

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const bodyData = {
        "data": {
          "email": form.email,
          "password": form.password,
        }
      }
      const res = await fetch('https://tony-auth-express-vdee.vercel.app/api/user/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData)
      });
      const data: any = await res.json();
      const { access_token, refresh_token } = data?.data || {};
      window.localStorage.setItem('access_token', access_token);
      window.localStorage.setItem('refresh_token', refresh_token);
      const fallbackUrl = window.sessionStorage.getItem('fallback');

      if (fallbackUrl) {
        navigate(fallbackUrl); 
      } else {
        navigate('/user'); 
      }
    } catch (err) {
      console.log('err: ', err)
    }
  }

  return (
    <div>
      <form onSubmit={submit}>
        Email: 
        <input 
          type='text' 
          onChange={e => {
            setForm(prevState => ({ ...prevState, email: e.target.value }))
          }} 
        /> 
        <br />
        Password:
        <input 
          type='password' 
          onChange={e => {
            setForm(prevState => ({ ...prevState, password: e.target.value }))
          }} 
        /> 

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login