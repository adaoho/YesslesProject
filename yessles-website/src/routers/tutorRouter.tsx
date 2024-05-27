import { createBrowserRouter, redirect } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/[home]/HomePage";
import ProgBelPage from "@/pages/[home]/ProgBelPage";
import SubPageLayout from "@/layout/SubPageLayout";
import PakBelPage from "@/pages/[home]/PakBelPage";
import ArticlePage from "@/pages/[home]/ArticlePage";
import AboutPage from "@/pages/[home]/AboutPage";
import SubArticlePage from "@/pages/[home]/SubArticlePage";
import LoginPage from "@/pages/[authentication]/LoginPage";
import RegisterPage from "@/pages/[authentication]/RegisterPage";
import MainPage from "@/pages/[dashboard]/pages/[main]/MainPage";
import { toast } from "sonner";
import NotFound from "@/pages/[authentication]/NotFound";
import DashLayout from "@/pages/[dashboard]/layout/DashLayout";

const tutorRouter = createBrowserRouter([
  {
    element: <NotFound />,
    path: "/*",
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    element: <SubPageLayout />,
    children: [
      {
        path: "/program/:slug",
        element: <ProgBelPage />,
      },
      {
        path: "/paket/:slug",
        element: <PakBelPage />,
      },
      {
        path: "/tentang",
        element: <AboutPage />,
      },
      {
        path: "/article",
        element: <ArticlePage />,
      },
      {
        path: "/article/:slug",
        element: <SubArticlePage />,
      },
    ],
  },
  {
    element: <DashLayout />,
    children: [
      {
        path: "/panel/",
        element: <MainPage />,
      },
    ],
    loader: async () => {
      const token = localStorage.getItem("access_token");
      if (!token) {
        toast.error(`You need to Login First`);
        return redirect("/panel/login");
      }
      return null;
    },
  },
  {
    element: <LoginPage />,
    path: "/panel/login",
  },
  {
    element: <RegisterPage />,
    path: "/panel/register",
  },
]);

export default tutorRouter;
