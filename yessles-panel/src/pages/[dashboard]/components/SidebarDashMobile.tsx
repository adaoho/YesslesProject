import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Home, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { RiArticleLine } from "react-icons/ri";
import { useSelector } from "react-redux";

const SidebarDashMobile = () => {
  const { userData, items } = useSelector((state: any) => state.user);
  const articleItems = useSelector((state: any) => state.article.items);
  const userRole = userData?.role;

  const getUserLength = items.filter(
    (item: any) => item.status === "ACTIVE"
  ).length;

  const getArticleLength = articleItems.filter(
    (item: any) => item.status === "ACTIVE"
  ).length;

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden ">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            <Link
              to={"/panel/dashboard"}
              className="flex items-center gap-2 font-semibold border-b pb-4"
            >
              <img src="/yessles_logo_icon.svg" alt="" className="size-7" />
              <span className="">Yessles Panel</span>
            </Link>
            <Link
              to={"/panel/dashboard"}
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <Home className="h-5 w-5" />
              Dashboard
            </Link>
            {userRole === "admin" && (
              <Link
                to={"/panel/users"}
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <HiUsers className="h-4 w-4" />
                Users
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yl-10">
                  {getUserLength}
                </Badge>
              </Link>
            )}
            <Link
              to={"/panel/articles"}
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <RiArticleLine className="h-4 w-4" />
              Articles
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yl-10">
                {getArticleLength}
              </Badge>
            </Link>
          </nav>

          <div className="mt-auto">
            <Card className="py-4 px-3">
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Alami Kendala?</CardTitle>
                <CardDescription>
                  Sampaikan kepada tim, untuk segera memperbaiki kendala anda.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0 mt-2">
                <Button
                  size="sm"
                  className="w-full flex gap-x-1 hover:bg-yl-60 transition-all"
                >
                  <AiOutlineWhatsApp className="size-4" />
                  Hubungi Kami
                </Button>
              </CardContent>
            </Card>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default SidebarDashMobile;
