import { createBrowserRouter } from "react-router-dom";
import LoginPage from "@/pages/[authentication]/LoginPage";
import RegisterPage from "@/pages/[authentication]/RegisterPage";

const publicRouter = createBrowserRouter([
  {
    element: <LoginPage />,
    path: "/*",
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

export default publicRouter;
