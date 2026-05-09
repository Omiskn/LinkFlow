import { NavLink } from "react-router-dom";
import { Home, Settings, Link } from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  {
    title: "Dashboard",
    path: "/",
    icon: Home,
  },
  {
    title: "Links",
    path: "/links",
    icon: Link,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen border-r bg-background p-4">
      <h1 className="text-xl font-bold mb-6">LinkHub</h1>

      <nav className="space-y-1.5">
        {sidebarLinks.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-3 py-3 rounded-md text-sm transition",
                  isActive ? "bg-primary text-white" : "hover:bg-muted"
                )
              }
            >
              <Icon size={18} />
              {link.title}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
