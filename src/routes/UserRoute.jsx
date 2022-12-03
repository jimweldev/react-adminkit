import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const UserRoute = ({ auth }) => {
  if (auth) {
    return <Outlet />
  } else {
    return <Navigate to="/" replace={true} />
  }
}

export default UserRoute

UserRoute.defaultProps = {
  auth: true,
}
