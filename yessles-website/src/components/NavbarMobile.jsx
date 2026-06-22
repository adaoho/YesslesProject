import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdOutlineSchool } from "react-icons/md";
import programNavbarData from "../database/program_navbar.json";
import { lockBodyScroll, unlockBodyScroll } from "../utils/scrollLock";

const { program_navbar } = programNavbarData;

const tabs = [
  { id: 1, label: "Program Belajar", icon: "school" },
  { id: 2, label: "Paket Belajar", icon: "package" },
];

const paketTypes = [
  { id: 1, label: "Privat" },
  { id: 2, label: "Semi Privat" },
];

const gridVariants = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: 0.04 } },
  exit: { opacity: 0, transition: { duration: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } },
};

const ClassCard = ({ label, onClick }) => (
  <motion.button
    variants={cardVariants}
    onClick={onClick}
    className="group flex items-center gap-x-2.5 px-3 py-3 rounded-xl border border-gray-100 bg-white hover:border-yl-60/40 hover:bg-yl-60/5 transition-colors text-left w-full"
  >
    <div className="bg-yl-10 group-hover:bg-yl-60 flex-shrink-0 flex justify-center items-center w-8 h-8 rounded-lg transition-colors">
      <MdOutlineSchool className="text-white text-[17px]" />
    </div>
    <span className="flex-1 min-w-0 text-[12px] font-semibold text-yl-20 font-lexend leading-tight">{label}</span>
  </motion.button>
);

export default function NavbarMobile({ open, onClose, topOffset = 72 }) {
  const [tab, setTab] = useState(1); // 1 = Program, 2 = Paket
  const [paketType, setPaketType] = useState(1); // 1 = Privat, 2 = Semi Privat

  // Lock background scroll while the drawer is open; restore on close.
  useEffect(() => {
    if (!open) return;
    lockBodyScroll();
    return () => unlockBodyScroll();
  }, [open]);

  const navigate = (path) => {
    window.location.href = path;
    onClose();
  };

  const programEntry = program_navbar.find((d) => d.type_name === "program_belajar");
  const paketEntry = program_navbar.find((d) => d.type_name === "paket_belajar");

  const programPrivat = programEntry?.type.find((t) => t.title === "privat")?.class ?? [];
  const paketPrivat = paketEntry?.type.find((t) => t.title === "privat")?.class ?? [];
  const paketSemiPrivat = paketEntry?.type.find((t) => t.title === "semi_privat")?.class ?? [];

  const currentList = tab === 1 ? programPrivat : paketType === 1 ? paketPrivat : paketSemiPrivat;

  const handleCardClick = (slug) => (tab === 1 ? navigate(`/program/${slug}`) : navigate(`/paket/${slug}`));

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-menu"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          style={{ top: topOffset }}
          className="fixed inset-x-0 bottom-0 z-[100] pt-3 bg-white flex flex-col overflow-hidden md:hidden border-t border-gray-100 shadow-xl"
        >
          {/* ── Quick nav links ── */}
          <div className="flex flex-row gap-x-2 px-5 py-3 border-b border-dashed border-gray-200 flex-shrink-0 overflow-x-auto no-scrollbar">
            <a
              href="/"
              onClick={onClose}
              className="flex-shrink-0 flex items-center gap-x-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-[12px] font-lexend text-yl-20 hover:bg-yl-10/10 hover:border-yl-10 transition-all"
            >
              <span className="material-symbols-outlined text-yl-10" style={{ fontSize: 14 }}>
                home
              </span>
              Beranda
            </a>
            <a
              href="/tentang"
              onClick={onClose}
              className="flex-shrink-0 flex items-center gap-x-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-[12px] font-lexend text-yl-20 hover:bg-yl-10/10 hover:border-yl-10 transition-all"
            >
              <span className="material-symbols-outlined text-yl-10" style={{ fontSize: 14 }}>
                info
              </span>
              Tentang Yessles
            </a>
            <a
              href="/article"
              onClick={onClose}
              className="flex-shrink-0 flex items-center gap-x-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-[12px] font-lexend text-yl-20 hover:bg-yl-10/10 hover:border-yl-10 transition-all"
            >
              <span className="material-symbols-outlined text-yl-10" style={{ fontSize: 14 }}>
                article
              </span>
              Article
            </a>
          </div>

          {/* ── Tab selector (sliding green pill, pure CSS) ── */}
          <div className="px-5 py-3 border-b border-dashed border-gray-200 flex-shrink-0">
            <div className="relative flex bg-white border border-gray-200 rounded-full p-1 w-full">
              {/* sliding pill — CSS transform, no framer-motion layout */}
              <div
                className="absolute top-1 bottom-1 rounded-full bg-yl-10 transition-transform duration-300 ease-out"
                style={{ width: "calc(50% - 4px)", left: 4, transform: `translateX(${tab === 1 ? "0%" : "100%"})` }}
              />
              {tabs.map((t) => {
                const active = tab === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setTab(t.id)}
                    className={`relative z-10 flex-1 flex items-center justify-center gap-x-1.5 px-4 py-2 rounded-full text-[13px] font-lexend font-medium transition-colors ${
                      active ? "text-white" : "text-yl-10"
                    }`}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                      {t.icon}
                    </span>
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Content ── */}
          <div className="flex-1 overflow-y-auto px-5 py-4">
            {/* Privat / Semi Privat segmented control (sliding pill) */}
            {tab === 2 && (
              <div className="relative flex flex-row mb-4 bg-gray-100 p-1 rounded-xl">
                {/* sliding pill — CSS transform, no framer-motion layout */}
                <div
                  className="absolute top-1 bottom-1 rounded-lg bg-white shadow-sm ring-1 ring-yl-10/20 transition-transform duration-300 ease-out"
                  style={{ width: "calc(50% - 4px)", left: 4, transform: `translateX(${paketType === 1 ? "0%" : "100%"})` }}
                />
                {paketTypes.map((pt) => {
                  const active = paketType === pt.id;
                  return (
                    <button
                      key={pt.id}
                      onClick={() => setPaketType(pt.id)}
                      className="relative z-10 flex-1 py-2 rounded-lg text-[12px] font-lexend font-medium transition-colors"
                    >
                      <span className={active ? "text-yl-10 font-semibold" : "text-gray-500"}>{pt.label}</span>
                    </button>
                  );
                })}
              </div>
            )}

            <p className="text-[11px] text-gray-400 font-lexend uppercase tracking-wider mb-3">
              {tab === 1 ? "Pilih Jenjang Program" : `Pilih Paket ${paketType === 1 ? "Privat" : "Semi Privat"}`}
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={tab === 1 ? "program" : `paket-${paketType}`}
                variants={gridVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="grid grid-cols-2 gap-2"
              >
                {currentList.map((c, i) => (
                  <ClassCard key={i} label={c.label} onClick={() => handleCardClick(c.slug)} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Footer CTA ── */}
          <div className="bg-yl-60 px-5 py-4 flex flex-row items-center justify-between gap-x-4 flex-shrink-0">
            <div className="flex flex-col min-w-0">
              <p className="text-white font-lexend font-bold text-[14px] leading-tight">Test Gaya Belajar</p>
              <p className="text-white/70 text-[11px] font-lexend mt-0.5 leading-4">
                Temukan cara belajar paling efektif untukmu
              </p>
            </div>
            <a
              href="https://bit.ly/tesgayabelajaryessles"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex-shrink-0 bg-yl-10 text-white font-lexend text-[13px] font-medium px-4 py-2.5 rounded-xl hover:bg-yl-30 transition-all"
            >
              Ikuti Test
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
