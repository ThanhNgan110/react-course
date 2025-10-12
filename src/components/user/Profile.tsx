import React from 'react'
import { useSelector } from 'react-redux';

function Profile() {
  const isLoading = useSelector((state: any) => state.app.isLoading);
  console.log("Profile state: ", isLoading)

  return (
    <div>Profile</div>
  )
}

export default Profile