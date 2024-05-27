import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/[home]/HomePage";
import ProgBelPage from "@/pages/[home]/ProgBelPage";
import SubPageLayout from "@/layout/SubPageLayout";
import PakBelPage from "@/pages/[home]/PakBelPage";
import ArticlePage from "@/pages/[home]/ArticlePage";
import AboutPage from "@/pages/[home]/AboutPage";
import SubArticlePage from "@/pages/[home]/SubArticlePage";
import NotFound from "@/pages/[authentication]/NotFound";

const publicRouter = createBrowserRouter([
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
]);

export default publicRouter;
