import ScrollToTop from "@/utils/ScrollTop";
import NavbarComp from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <NavbarComp />
      <ScrollToTop />
      <Outlet />
    </>
  );
};

export default MainLayout;
