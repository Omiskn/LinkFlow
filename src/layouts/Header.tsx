import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useLocation } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { useLogout } from "@/features/auth/hooks/useLogout";

export default function Header() {
  const { pathname } = useLocation();
  const logout = useLogout();

  const titleMap: Record<string, string> = {
    "/dashboard": "Dashboard",
    "/dashboard/links": "Links Management",
    "/dashboard/profile": "Profile Settings",
    "/dashboard/appearance": "Appearance Settings",
  };

  const pageTitle = titleMap[pathname] ?? "Dashboard";

  return (
    <header className="flex h-16 items-center justify-between border-b px-4 pl-14 lg:px-6 lg:pl-6 bg-(--color-grey-100)">
      <h2 className="text-base font-semibold lg:text-lg">{pageTitle}</h2>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="default">Account</Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Appearance</DropdownMenuItem>
          <DropdownMenuItem variant="destructive" onClick={logout}>
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
