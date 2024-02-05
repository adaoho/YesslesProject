import NavbarComp from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <NavbarComp />
      <Outlet />
    </>
  );
};

export default MainLayout;
