import React from 'react'

// libraries
import { Routes, Route } from 'react-router-dom'

// routes
import UserRoute from './routes/UserRoute'

// templates
import UserTemplate from './templates/UserTemplate'

// pages
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'

const App = () => {
  return (
    <Routes>
      <Route element={<UserRoute />}>
        <Route element={<UserTemplate />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
