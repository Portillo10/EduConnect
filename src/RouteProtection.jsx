import { Navigate, Outlet } from "react-router-dom";
import {useAuthStore} from './store/Auth.ts'

export const ProtectedRoute = () => {

  const {loading, isAuthenticated} = useAuthStore()

  if (loading) return <p>Cargando...</p>;
  if (!loading && !isAuthenticated ) return <Navigate to={"/login"} replace />
  return <Outlet />
}