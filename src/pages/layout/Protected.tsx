import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../contexts/Auth";

function Protected() {
  const { user } = useAuth();

  if (user && user.isConnected) {
    return <Outlet />;
  }
  return <Navigate to="/" replace />;
}

export default Protected;
