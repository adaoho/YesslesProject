import { Outlet, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import SidebarDashMobile from "../components/SidebarDashMobile";
import SidebarDash from "../components/SidebarDash";
import { useEffect } from "react";
import { setUserLogout, userGetbyAdmin } from "@/features/user/userSlice";

export const DashLayout = () => {
  const { userData, items } = useSelector((state: any) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogoutButton = () => {
    dispatch(setUserLogout());
    navigate("/panel/login");
    toast.success(`Logout Success, Please Login Again`);
  };

  useEffect(() => {
    if (userData.role === "admin") {
      if (items.length === 0) {
        const fetchData = async () => {
          // @ts-ignore
          await dispatch(userGetbyAdmin());
        };
        fetchData();
      }
    }
  }, [dispatch]);

  return (
    <>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] relative">
        {/* SideBar */}
        <SidebarDash />
        <div className="flex flex-col">
          <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            {/* Sidebar Mobile */}
            <SidebarDashMobile />
            <div className="w-full flex-1">
              <form>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Cari Artikel..."
                    className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                  />
                </div>
              </form>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full overflow-hidden"
                >
                  <img
                    src={userData?.profile_picture}
                    className="w-full h-full object-cover"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>{userData?.full_name}</DropdownMenuLabel>
                {userData?.role !== "admin" && (
                  <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuSeparator />
                  </>
                )}
                <DropdownMenuItem onClick={onLogoutButton}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </header>
          {/* Other Page from Sidebar */}
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-3">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default DashLayout;
