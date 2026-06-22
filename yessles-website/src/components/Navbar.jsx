import { AiFillCaretDown } from "react-icons/ai";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState, useEffect, useRef } from "react";
import NavbarDropDown from "./NavbarDropDown";
import NavbarMobile from "./NavbarMobile";

const NavbarComp = ({ noScroll }) => {
  const [scrolled, setScrolled] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(70);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const measure = () => navRef.current && setNavHeight(navRef.current.offsetHeight);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const navbarClass = `w-screen px-[5%] md:px-[8%] py-[18px] md:py-[23px] flex justify-between items-center fixed z-[101] transition-all duration-300 ${
    scrolled || mobileOpen || desktopOpen
      ? "bg-white/90 shadow-lg backdrop-blur-md"
      : "bg-white/10 backdrop-blur-md shadow-lg xl:bg-transparent xl:backdrop-blur-0 xl:shadow-none"
  }`;

  const navbarButton = `h-[35px] px-5 rounded-3xl font-lexend text-[14px] transition-all hover:scale-105 flex justify-center items-center ${
    scrolled || desktopOpen
      ? "outline outline-yl-60 outline-2 bg-white/20 text-yl-60 hover:bg-yl-60 hover:text-white "
      : "outline outline-yl-60 outline-2 bg-white/10 text-yl-60 xl:outline-white xl:text-white hover:bg-yl-60 hover:text-white"
  }`;

  return (
    <>
      {/* Navbar bar — has backdrop-blur, so fixed children CANNOT escape it */}
      <div ref={navRef} className={noScroll ? "navbarDefault" : navbarClass}>
        <a href="/" aria-label="Yessles - Beranda" className="flex items-center cursor-pointer py-1 pr-2">
          <img
            src="/yessles_logo.png"
            alt="Yessles"
            width={140}
            height={32}
            className="h-7 md:h-8 w-auto select-none"
            loading="eager"
            decoding="async"
          />
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex flex-row gap-x-4 z-10">
          <a href="/tentang" className={noScroll ? "navbarButtonDefault" : navbarButton}>
            Tentang Yessles
          </a>
          <a href="/article" className={noScroll ? "navbarButtonDefault" : navbarButton}>
            Article
          </a>
          <button
            onClick={() => setDesktopOpen(!desktopOpen)}
            className="h-[35px] bg-yl-60 px-5 rounded-3xl text-white font-lexend text-[14px] flex justify-center items-center hover:bg-yl-30 transition-all gap-x-2"
          >
            Program & Paket Belajar
            <AiFillCaretDown />
          </button>
        </div>

        {/* Mobile hamburger — toggles between menu & close; panel rendered OUTSIDE this div */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
        >
          {mobileOpen ? (
            <RiCloseLine className="text-[24px] text-yl-20" />
          ) : (
            <RiMenu3Line className="text-[24px] text-yl-20" />
          )}
        </button>
      </div>

      {/* Desktop dropdown — outside backdrop-blur parent */}
      <NavbarDropDown open={desktopOpen} setOpen={setDesktopOpen} topOffset={navHeight} />

      {/* Mobile panel — drops in BELOW the navbar bar (does not replace it) */}
      <NavbarMobile open={mobileOpen} onClose={() => setMobileOpen(false)} topOffset={navHeight} />
    </>
  );
};

export default NavbarComp;
