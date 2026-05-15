import { NavLink } from "react-router-dom";
import { Home, Settings, Link, User, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const sidebarLinks = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: Home,
  },
  {
    title: "Links",
    path: "/dashboard/links",
    icon: Link,
  },
  {
    title: "Profile",
    path: "/dashboard/profile",
    icon: User,
  },
  {
    title: "Appearance",
    path: "/dashboard/appearance",
    icon: Settings,
  },
];

function SidebarNav() {
  return (
    <nav className="space-y-1.5">
      {sidebarLinks.map((link) => {
        const Icon = link.icon;

        return (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition",
                isActive
                  ? "bg-(--color-primary-500) text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )
            }
          >
            <Icon size={18} />
            {link.title}
          </NavLink>
        );
      })}
    </nav>
  );
}

export default function Sidebar() {
  return (
    <>
      <aside className="hidden min-h-screen w-64 border-r bg-background/90 p-4 lg:block">
        <h1 className="mb-6 text-xl font-semibold">LinkHub</h1>
        <SidebarNav />
      </aside>

      <div className="fixed left-4 top-3 z-20 lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon-sm" aria-label="Open menu">
              <Menu className="size-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72">
            <SheetHeader className="px-0 pt-0">
              <SheetTitle className="text-xl">LinkHub</SheetTitle>
            </SheetHeader>
            <SidebarNav />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
