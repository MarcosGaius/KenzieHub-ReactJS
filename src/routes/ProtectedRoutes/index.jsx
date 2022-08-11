import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../providers/User";
import { toast } from "react-toastify";

export default function ProtectedRoutes() {
  const { userInfo, IsFetchingUser, isTokenValid } = useContext(UserContext);

  if (!isTokenValid) {
    toast.error("Realize o login para ter acesso a essa página.");
    return <Navigate to="/login" replace={true} />;
  }

  if (!IsFetchingUser && Object.keys(userInfo).length <= 0) {
    toast.error("Realize o login para ter acesso a essa página.");
    return <Navigate to="/login" replace={true} />;
  }

  return <Outlet />;
}
