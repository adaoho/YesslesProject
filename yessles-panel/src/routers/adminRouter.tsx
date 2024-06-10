import { createBrowserRouter, redirect } from "react-router-dom";
import LoginPage from "@/pages/[authentication]/LoginPage";
import RegisterPage from "@/pages/[authentication]/RegisterPage";
import MainPage from "@/pages/[dashboard]/pages/[main]/MainPage";
import { toast } from "sonner";
import NotFound from "@/pages/[authentication]/NotFound";
import UserPanel from "@/pages/[dashboard]/pages/[users]/UserPanel";
import DashLayout from "@/pages/[dashboard]/layout/DashLayout";
import ArticlePanel from "@/pages/[dashboard]/pages/[articles]/ArticlePanel";
import ArticleForm from "@/pages/[dashboard]/pages/[articles]/ArticleForm";

const adminRouter = createBrowserRouter([
  {
    element: <NotFound />,
    path: "/*",
  },
  {
    element: <DashLayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/users",
        element: <UserPanel />,
      },
      {
        path: "/articles",
        element: <ArticlePanel />,
      },
      {
        path: "/articles/new-article",
        element: <ArticleForm />,
      },
      {
        path: "/articles/edit-article/:slug",
        element: <ArticleForm />,
      },
    ],
    loader: async () => {
      const token = localStorage.getItem("access_token");
      if (!token) {
        toast.error(`You need to Login First`);
        return redirect("/login");
      }
      return null;
    },
  },
  {
    element: <LoginPage />,
    path: "/login",
  },
  {
    element: <RegisterPage />,
    path: "/register",
  },
]);

export default adminRouter;
