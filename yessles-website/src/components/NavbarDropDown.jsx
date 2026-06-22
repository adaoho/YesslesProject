import { MdOutlineSchool } from "react-icons/md";
import { Fragment, useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import programNavbarData from "../database/program_navbar.json";
import { lockBodyScroll, unlockBodyScroll } from "../utils/scrollLock";

const { program_navbar } = programNavbarData;

const tabs = [
  { id: 1, label: "Program Belajar", icon: "school" },
  { id: 2, label: "Paket Belajar", icon: "package" },
];

const gridVariants = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
  exit: { opacity: 0, transition: { duration: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
};

const ClassCard = ({ label, onClick }) => (
  <motion.button
    variants={cardVariants}
    onClick={onClick}
    className="group flex flex-row gap-x-3 items-center w-full text-left min-h-[60px] rounded-xl border border-gray-100 px-3 py-2 hover:border-yl-60/40 hover:bg-yl-60/5 hover:shadow-[0_8px_20px_rgba(82,119,115,0.1)] transition-colors"
  >
    <div className="bg-yl-10 group-hover:bg-yl-60 flex justify-center items-center size-10 rounded-lg flex-shrink-0 transition-colors">
      <MdOutlineSchool className="size-6 text-white" />
    </div>
    <span className="flex-1 min-w-0 text-[15px] font-semibold text-yl-20 leading-tight">{label}</span>
    <BsArrowRight className="text-gray-300 group-hover:text-yl-60 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
  </motion.button>
);

const NavbarDropDown = ({ open, setOpen, topOffset = 70 }) => {
  const [selection, setSelection] = useState(1);
  const [selectionType, setSelectionType] = useState(1);

  useEffect(() => {
    if (!open) return;
    lockBodyScroll();
    return () => unlockBodyScroll();
  }, [open]);

  const goTo = (path) => {
    setOpen(false);
    window.location.href = path;
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop below the navbar — click to close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ top: topOffset }}
            className="fixed inset-x-0 bottom-0 z-[95] hidden md:block bg-black/30 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Drop-in panel — appears BELOW the navbar, does not replace it */}
          <motion.div
            key="desktop-dropdown"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            style={{ top: topOffset }}
            className="fixed inset-x-0 z-[96] hidden md:flex flex-col bg-white shadow-xl border-t border-gray-100 max-h-[82vh] overflow-y-auto overscroll-contain"
          >
            <div className="w-full flex px-[8%] flex-col pt-6 font-lexend">
              {/* Tabs */}
              <div className="flex flex-row gap-x-6 w-full border-b border-gray-200">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelection(tab.id)}
                    className={`relative flex items-center justify-center gap-x-2 cursor-pointer pb-3 text-[15px] font-medium transition-colors ${
                      selection == tab.id ? "text-yl-20" : "text-gray-400 hover:text-yl-60"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px]">{tab.icon}</span>
                    {tab.label}
                    {/* underline — pure CSS, grows from left (no framer-motion layout) */}
                    <span
                      className={`absolute -bottom-px left-0 right-0 h-[2.5px] bg-yl-60 rounded-full origin-left transition-transform duration-300 ease-out ${
                        selection == tab.id ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* Body */}
              <div className="flex flex-row w-full justify-start gap-x-10 pt-6 pb-8 h-fit">
                {/* Privat / Semi Privat selector (paket only) */}
                {selection == 2 && (
                  <div className="w-[170px] flex flex-col gap-y-2 flex-shrink-0">
                    <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wide mb-1">Tipe Belajar</p>
                    <button
                      onClick={() => setSelectionType(1)}
                      className={`px-3 py-2.5 rounded-xl text-[14px] text-left transition-all ${
                        selectionType == 1
                          ? "bg-yl-60/10 text-yl-60 font-semibold"
                          : "text-gray-500 hover:bg-gray-50 hover:text-yl-20"
                      }`}
                    >
                      Privat
                    </button>
                    <button
                      onClick={() => setSelectionType(2)}
                      className={`px-3 py-2.5 rounded-xl text-[14px] text-left transition-all ${
                        selectionType == 2
                          ? "bg-yl-60/10 text-yl-60 font-semibold"
                          : "text-gray-500 hover:bg-gray-50 hover:text-yl-20"
                      }`}
                    >
                      Semi Privat
                    </button>
                  </div>
                )}

                {/* Class grid */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selection == 1 ? "program" : `paket-${selectionType}`}
                    variants={gridVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="grid grid-cols-3 xl:grid-cols-4 w-full justify-start items-start h-fit gap-3"
                  >
                    {selection == 1
                      ? program_navbar?.map(
                          (data, index) =>
                            data.type_name === "program_belajar" && (
                              <Fragment key={index}>
                                {data?.type.map((typeData, tIndex) => (
                                  <Fragment key={tIndex}>
                                    {typeData.title === "privat" &&
                                      typeData?.class.map((classData, cIndex) => (
                                        <ClassCard
                                          key={cIndex}
                                          label={classData.label}
                                          onClick={() => goTo(`/program/${classData.slug}`)}
                                        />
                                      ))}
                                  </Fragment>
                                ))}
                              </Fragment>
                            )
                        )
                      : program_navbar?.map(
                          (data, index) =>
                            data.type_name === "paket_belajar" && (
                              <Fragment key={index}>
                                {data?.type.map((typeData, tIndex) => (
                                  <Fragment key={tIndex}>
                                    {typeData.title === "semi_privat" &&
                                      selectionType == 2 &&
                                      typeData?.class.map((classData, cIndex) => (
                                        <ClassCard
                                          key={cIndex}
                                          label={classData.label}
                                          onClick={() => goTo(`/paket/${classData.slug}`)}
                                        />
                                      ))}
                                    {typeData.title === "privat" &&
                                      selectionType == 1 &&
                                      typeData?.class.map((classData, cIndex) => (
                                        <ClassCard
                                          key={cIndex}
                                          label={classData.label}
                                          onClick={() => goTo(`/paket/${classData.slug}`)}
                                        />
                                      ))}
                                  </Fragment>
                                ))}
                              </Fragment>
                            )
                        )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Test Gaya Belajar Banner */}
            <div className="w-full bg-yl-60 h-fit flex justify-between items-center px-[8%] py-4 mt-auto">
              <div className="flex flex-col">
                <h1 className="text-white text-[16px] font-bold">Test Gaya Belajar</h1>
                <h1 className="text-gray-200 text-[14px]">
                  Gaya Belajar adalah cara mudah untuk menyerap, mengelola, menyimpan, dan menerapkan informasi.
                </h1>
              </div>
              <a href="https://bit.ly/tesgayabelajaryessles" target="_blank" rel="noopener noreferrer">
                <div className="bg-yl-10 text-white px-4 py-1 rounded-md hover:bg-yl-30 hover:text-white transition-all hover:scale-105 text-[16px]">
                  <h1>Ikuti Test Gaya Belajar</h1>
                </div>
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NavbarDropDown;
