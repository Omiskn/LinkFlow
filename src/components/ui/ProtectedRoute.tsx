import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { useLogout } from "@/features/auth/hooks/useLogout";
import FullPageSpinner from "../FullPageSpinner";

function ProtectedRoute() {
  const navigate = useNavigate();
  const { currentUser, isLoading, error } = useCurrentUser();
  const logout = useLogout();

  useEffect(() => {
    const axiosError = error as AxiosError;

    if ((!currentUser && !isLoading) || axiosError?.response?.status === 401) {
      logout();
    }
  }, [currentUser, navigate, isLoading, error, logout]);

  if (isLoading) return <FullPageSpinner />;

  if (!currentUser) return null;

  return <Outlet />;
}

export default ProtectedRoute;
