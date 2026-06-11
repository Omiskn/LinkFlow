import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-4 md:p-6 bg-(--color-grey-50)">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
// import { AppSidebar } from "@/components/ui/App-Sidebar";

// { children }: { children: React.ReactNode }
// export default function AppLayout() {
//   return (
//     <SidebarProvider>
//       <AppSidebar />
//       {/* <div className="flex flex-col flex-1">
//         <Header /> */}
//       <main className="flex-1 p-4 md:p-6 bg-(--color-grey-50)">
//         <SidebarTrigger />
//         <Outlet />
//       </main>
//       {/* </div> */}
//     </SidebarProvider>
//   );
// }
