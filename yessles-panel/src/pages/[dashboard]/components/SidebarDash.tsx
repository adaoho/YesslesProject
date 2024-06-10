import { BiLinkExternal } from "react-icons/bi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { RiArticleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useSelector } from "react-redux";

const SidebarDash = () => {
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
      <div className="hidden border-r bg-muted/40 md:block top-0 sticky">
        {/* SideBar */}
        <div className="flex h-full max-h-screen flex-col gap-2 relative">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <div className="flex items-center gap-2 font-semibold">
              <img src="/yessles_logo_icon.svg" alt="" className="size-7" />
              <span className="">Yessles Panel</span>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="ml-auto h-8 w-8 text-yl-60 hover:bg-yl-10 hover:text-white transition-all"
            >
              <Link to={"https://yessles.id"} target="_blank">
                <BiLinkExternal className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-md font-medium lg:px-4">
              <Link
                to={"/"}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              {userRole === "admin" && (
                <Link
                  to={"/users"}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <HiUsers className="h-4 w-4" />
                  Users
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yl-10">
                    {getUserLength}
                  </Badge>
                </Link>
              )}
              <Link
                to={"/articles"}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <RiArticleLine className="h-4 w-4" />
                Articles
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yl-10">
                  {getArticleLength}
                </Badge>
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4 absolute bottom-0">
            <Card className="py-4">
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Alami Kendala?</CardTitle>
                <CardDescription>
                  Sampaikan kepada tim, untuk segera memperbaiki kendala anda.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
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
        </div>
      </div>
    </>
  );
};

export default SidebarDash;
