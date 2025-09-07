import React from 'react'
import { Navigate, useLocation } from 'react-router';

function ProtectedRoute({ children }: React.PropsWithChildren) {
  const location = useLocation();
  const access_token = window.localStorage.getItem('access_token');

  React.useEffect(() => {
    window.sessionStorage.setItem('fallback', location.pathname)
  }, [location])

  if (!access_token) {
    return <Navigate to="/login" />
  }

  return children
}

export default ProtectedRoute