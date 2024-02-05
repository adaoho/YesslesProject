import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/[home]";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
