import { useAuthStore } from '@/stores/auth.store'
const { register } = useAuthStore()

export function useAuth() {
  const {
    login,
    logout,
    loading,
    error,
    token,
  } = useAuthStore()

  return {
    login,
    logout,
    loading,
    error,
    isAuthenticated: !!token,
  }
}

