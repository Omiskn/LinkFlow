import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Spinner } from "./Spinner";
import { AxiosError } from "axios";
import { useLogout } from "@/features/auth/hooks/useLogout";

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

  if (isLoading)
    return (
      <div className="h-screen bg-(--color-grey-50) flex justify-center items-center">
        <Spinner className="size-16 text-(--color-primary-500)" />
      </div>
    );

  if (!currentUser) return null;

  return <Outlet />;
}

export default ProtectedRoute;
