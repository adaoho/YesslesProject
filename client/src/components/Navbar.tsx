"use client";

import React, { useState, useEffect } from "react";

const NavbarComp = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = `w-screen px-[8%] py-[23px] flex justify-between items-center fixed z-10 ${
    scrolled
      ? "bg-white/80 px-[8%] py-[23px] flex justify-between items-center fixed z-10 top-0 shadow-lg backdrop-blur-md duration-500 opacity-100"
      : ""
  }`;

  const navbarButton = `h-[35px] outline outline-white outline-2 bg-white/20 px-5 rounded-3xl text-white font-lexend text-[14px] hover:bg-yl-60 hover:outline-0 transition-all hover:scale-105 ${
    scrolled
      ? "h-[35px] outline outline-yl-60 outline-2 bg-white/20 px-5 rounded-3xl text-yl-60 font-lexend text-[14px] hover:bg-yl-60 transition-all hover:text-white"
      : ""
  }`;

  return (
    <>
      <div className={navbarClass}>
        <div className="flex">
          <img src="/yessles_logo.svg" alt="" />
        </div>
        <div className="flex flex-row gap-x-4 z-10">
          <button className={navbarButton}>Tentang Yessles</button>
          <button className={navbarButton}>Article</button>
          <button className="h-[35px] bg-yl-60 px-5 rounded-3xl text-white font-lexend text-[14px] flex justify-center items-center">
            Program Belajar
            <span className="material-symbols-outlined">arrow_drop_down</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default NavbarComp;
