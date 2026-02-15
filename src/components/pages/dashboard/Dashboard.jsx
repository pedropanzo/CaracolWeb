import { useAuth } from '../../../hooks/useAuth'
import DashboardGrid from '../../../components/dashboard/DashboardGrid'

export default function Dashboard() {
  const { user, logout } = useAuth()

  return (
    <div className="p-6 space-y-6">
      
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-sm text-gray-500">
            Bem-vindo, {user?.name}
          </p>
        </div>

        <button
          onClick={logout}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Logout
        </button>
      </div>

      {/* WIDGET GRID */}
      <DashboardGrid />

    </div>
  )
}
