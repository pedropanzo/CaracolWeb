import { Routes, Route } from 'react-router-dom'
import { AppLayout } from '@/components/layout/AppLayout'
import { PrivateRoute } from './PrivateRoute'

import Login from '@/pages/login'
import Dashboard from '@/pages/dashboard'
import Users from '@/pages/user'
import NotFound from '@/pages/notFound'
import Register from '@/pages/register'



export function AppRoutes() {
  return (
    <Routes>

      {/* Public */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Private */}
      <Route element={<PrivateRoute />}>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
        </Route>
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
