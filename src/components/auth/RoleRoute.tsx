import { Navigate, Outlet } from "react-router-dom";
import { getMockSession, type UserRole } from "../../auth/mockSession";

interface RoleRouteProps {
  allowedRoles: UserRole[];
}

export default function RoleRoute({ allowedRoles }: RoleRouteProps) {
  const session = getMockSession();

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(session.role)) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
