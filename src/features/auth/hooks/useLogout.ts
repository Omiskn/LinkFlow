import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    queryClient.removeQueries({ queryKey: ["user"] });

    navigate("/login", { replace: true });
  };

  return logout;
}
