import React from 'react'
import { Navigate } from 'react-router';

function AuthRoute({ children }: React.PropsWithChildren) {
  const access_token = window.localStorage.getItem('access_token');

  if (access_token) {
    return <Navigate to="/user" />
  }

  return children;
}

export default AuthRoute