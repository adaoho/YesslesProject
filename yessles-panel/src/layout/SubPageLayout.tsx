import ScrollToTop from "@/utils/ScrollTop";
import NavbarComp from "../components/Navbar";
import { Outlet } from "react-router-dom";

const SubPageLayout = () => {
  return (
    <>
      <NavbarComp noScroll={true} />
      <ScrollToTop />
      <Outlet />
    </>
  );
};

export default SubPageLayout;
