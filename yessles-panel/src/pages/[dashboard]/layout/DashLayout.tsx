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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import SidebarDashMobile from "../components/SidebarDashMobile";
import SidebarDash from "../components/SidebarDash";
import { useEffect, useState } from "react";
import {
  setUserLogout,
  userChangeUpdate,
  userGetbyAdmin,
} from "@/features/user/userSlice";
import { getAllArticles } from "@/features/article/articleSlice";

export const DashLayout = () => {
  const { userData, items } = useSelector((state: any) => state.user);
  const articleItems = useSelector((state: any) => state.article.items);
  const emailUser = userData.email;
  const idUser = userData.id;
  const idEmail = userData.email;
  const idFullName = userData.full_name;
  const idRole = userData.role;

  const [editOpen, setEditOpen] = useState(false);
  const [filePhoto, setFilePhoto] = useState("");
  const [fullName, setFullName] = useState<string>(idFullName);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogoutButton = () => {
    dispatch(setUserLogout());
    navigate("/login");
    toast.success(`Logout Success, Please Login Again`);
  };

  const handleOpenChange = (isOpen: any) => {
    setEditOpen(isOpen);
    if (!isOpen) setFullName(idFullName);
    setFilePhoto("");
  };

  const onEdit = (e: React.FormEvent<HTMLInputElement>, id: number) => {
    e.preventDefault();
    // @ts-ignore
    dispatch(userChangeUpdate(fullName, id, filePhoto, idEmail, idRole));
    setEditOpen(!editOpen);
    setFullName(idFullName);
    setFilePhoto("");
  };

  const onChangeFile = (e: any) => {
    let fileSize = e.target.files[0].size;
    let fileType = e.target.files[0].type.split("/")[0];
    let file = e.target.files[0];

    fileType !== "image"
      ? toast.error("Only Upload Image")
      : fileSize > 200000
      ? toast.error("Maximum File Size 200kb")
      : setFilePhoto(file);
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

    if (articleItems.length === 0) {
      const fetchArticle = async () => {
        //@ts-ignore
        await dispatch(getAllArticles());
      };
      fetchArticle();
    }
  }, [dispatch, idRole, articleItems.length, items.lenth]);

  return (
    <>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] relative">
        {/* SideBar */}
        <SidebarDash />
        <div className="flex flex-col">
          <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            {/* Sidebar Mobile */}
            <SidebarDashMobile />
            <div className="w-full flex-1 opacity-0 invisible">
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
                <div className="flex gap-x-4 items-center cursor-pointer">
                  <h1 className="font-raleway">
                    Halo,{" "}
                    <b className="text-yl-10 font-semibold">
                      {userData?.full_name}
                    </b>
                  </h1>
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
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Settings</DropdownMenuLabel>
                {userData?.role !== "admin" && (
                  <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setEditOpen(!editOpen)}>
                      Edit Profile
                    </DropdownMenuItem>
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

      {/* Dialog for Edit Profile */}
      <Dialog open={editOpen} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Change User Profile for <b>{emailUser}</b>
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-y-3">
            <Label htmlFor="name">Full Name</Label>
            <Input
              onChange={(e: any) => {
                setFullName(e.target.value);
              }}
              id="name"
              defaultValue={idFullName}
              className="col-span-3"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Profile Picture</Label>
            <Input id="picture" type="file" onChange={onChangeFile} />
          </div>
          <DialogFooter>
            <Button type="submit" onClick={(e: any) => onEdit(e, idUser)}>
              Update User
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DashLayout;
