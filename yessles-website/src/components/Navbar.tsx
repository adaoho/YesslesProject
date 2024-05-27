import { AiFillCaretDown } from "react-icons/ai";
import { useState, useEffect } from "react";
import NavbarDropDown from "./NavbarDropDown";
import { useNavigate } from "react-router-dom";

const NavbarComp = ({ noScroll }: any) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = `w-screen px-[8%] py-[23px] flex justify-between items-center fixed z-10 ${
    scrolled
      ? "bg-white/80 px-[8%] py-[23px] flex justify-between items-center fixed z-10 top-0 shadow-lg backdrop-blur-md duration-500 opacity-100"
      : "bg-white/10 backdrop-blur-md shadow-lg xl:bg-transparent xl:backdrop-blur-0 xl:shadow-none"
  }`;

  const navbarButton = `h-[35px] bg-white/20 px-5 rounded-3xl text-white font-lexend text-[14px] hover:outline-0 transition-all hover:scale-105 ${
    scrolled
      ? "h-[35px] outline outline-yl-60 outline-2 bg-white/20 px-5 rounded-3xl text-yl-60 font-lexend text-[14px] hover:bg-yl-60 transition-all hover:text-white"
      : "hover:bg-yl-60 xl:outline-white xl:outline-2 xl:outline outline outline-yl-60 outline-2 bg-white/10 text-yl-60 xl:text-white hover:text-white"
  }`;

  const navBarButtonDropDown =
    "h-[35px] outline outline-yl-60 outline-2 bg-white/20 px-5 rounded-3xl text-yl-60 font-lexend text-[14px] hover:bg-yl-60 transition-all hover:text-white";

  return (
    <>
      <div className={noScroll ? `navbarDefault` : navbarClass}>
        <div className="flex cursor-pointer" onClick={() => navigate("/")}>
          <img src="/yessles_logo.svg" alt="" />
        </div>
        <div className="hidden md:flex flex-row gap-x-4 z-10">
          <button
            onClick={() => navigate("/tentang")}
            className={noScroll ? `navbarButtonDefault` : navbarButton}
          >
            Tentang Yessles
          </button>
          <button
            onClick={() => navigate("/article")}
            className={noScroll ? `navbarButtonDefault` : navbarButton}
          >
            Article
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="h-[35px] bg-yl-60 px-5 rounded-3xl text-white font-lexend text-[14px] flex justify-center items-center hover:bg-yl-30 transition-all gap-x-2"
          >
            Program & Paket Belajar
            <AiFillCaretDown />
          </button>
        </div>
      </div>

      <NavbarDropDown
        navBarButtonDropDown={navBarButtonDropDown}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};

export default NavbarComp;
