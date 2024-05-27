import { createBrowserRouter, redirect } from "react-router-dom";
import LoginPage from "@/pages/[authentication]/LoginPage";
import RegisterPage from "@/pages/[authentication]/RegisterPage";
import MainPage from "@/pages/[dashboard]/pages/[main]/MainPage";
import { toast } from "sonner";
import NotFound from "@/pages/[authentication]/NotFound";
import UserPanel from "@/pages/[dashboard]/pages/[users]/UserPanel";
import DashLayout from "@/pages/[dashboard]/layout/DashLayout";

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
