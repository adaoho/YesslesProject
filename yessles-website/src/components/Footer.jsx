import { BsYoutube } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { useState } from "react";

const WA_PHONE = "628994944728";
const WARedirect = `https://api.whatsapp.com/send?phone=${WA_PHONE}&text=Halo%20Kak!%20Mohon%20info%20cara%20bergabung%20di%20Yessles?`;

const programLinks = [
  { label: "Prasekolah", href: "/program/prasekolah" },
  { label: "Taman Kanak-Kanak", href: "/program/taman-kanak-kanak" },
  { label: "Sekolah Dasar (SD)", href: "/program/sekolah-dasar-sd" },
  { label: "SMP", href: "/program/sekolah-menengah-pertama-smp" },
  { label: "SMA", href: "/program/sekolah-menengah-atas-sma" },
  { label: "Softskill", href: "/program/softskill" },
  { label: "Umum", href: "/program/umum" },
];

const paketLinks = [
  { label: "Sahabat Belajar", href: "/paket/paket-sahabat-belajar" },
  { label: "Sobat Belajar", href: "/paket/paket-sobat-belajar" },
  { label: "Sohib Belajar", href: "/paket/paket-sohib-belajar" },
  { label: "Konco Belajar", href: "/paket/paket-konco-belajar" },
  { label: "Kawan Belajar", href: "/paket/paket-kawan-belajar" },
  { label: "Teman Belajar", href: "/paket/paket-teman-belajar" },
];

const exploreLinks = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Yessles", href: "/tentang" },
  { label: "Article", href: "/article" },
  { label: "Test Gaya Belajar", href: "https://bit.ly/tesgayabelajaryessles", external: true },
];

const socials = [
  {
    Icon: AiFillInstagram,
    href: "https://www.instagram.com/yessles_official/",
    label: "Instagram",
    hover: "hover:text-[#C13584] hover:border-[#C13584]",
  },
  { Icon: RiWhatsappFill, href: WARedirect, label: "WhatsApp", hover: "hover:text-yl-10 hover:border-yl-10" },
  {
    Icon: BsYoutube,
    href: "https://www.youtube.com/@YesslesSahabatBelajarmu",
    label: "YouTube",
    hover: "hover:text-red-500 hover:border-red-500",
  },
];

const FooterLink = ({ href, external, children }) => (
  <a
    href={href}
    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    className="text-[13px] text-gray-500 hover:text-yl-60 hover:translate-x-0.5 transition-all w-fit font-lexend"
  >
    {children}
  </a>
);

const ColumnTitle = ({ children }) => <h3 className="font-lexend font-bold text-[14px] text-yl-20 mb-3.5">{children}</h3>;

const Footer = () => {
  const [nameChat, setNameChat] = useState("");

  const onSubmitChat = (e) => {
    e.preventDefault();
    window.open(
      `https://api.whatsapp.com/send?phone=${WA_PHONE}&text=Halo%20Kak,%20Saya%20${nameChat}!%20Mohon%20info%20cara%20bergabung%20di%20Yessles?`,
      "_blank",
      "rel=noopener noreferrer"
    );
  };

  return (
    <footer id="footer" className="w-full bg-gradient-to-b from-white to-yl-50/30 font-lexend">
      <div className="px-[5%] pt-4 md:px-[8%] md:pt-5 pb-8">
        {/* ── CTA banner ── */}
        <div className="relative overflow-hidden rounded-[24px] bg-yl-60 px-6 md:px-10 py-7 md:py-9 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="absolute -right-12 -top-12 w-44 h-44 rounded-full bg-white/10" />
          <div className="absolute -left-10 -bottom-16 w-40 h-40 rounded-full bg-yl-10/15" />
          <div className="relative max-w-lg">
            <h2 className="text-white font-bold text-[19px] md:text-[24px] leading-tight">
              Jadi Bagian dari +200 Yess Students
            </h2>
            <p className="text-white/80 text-[13px] md:text-[14px] mt-1.5 leading-relaxed">
              Ketahui lebih jauh program belajar di Yessles dan amankan jadwalmu sekarang juga!
            </p>
          </div>
          <form
            onSubmit={onSubmitChat}
            className="relative flex flex-row items-center gap-x-2 bg-white rounded-2xl p-1.5 pl-4 w-full lg:w-auto lg:min-w-[360px] shadow-[0_10px_40px_rgba(0,0,0,0.15)]"
          >
            <input
              type="text"
              name="name"
              autoComplete="off"
              placeholder="Ketik nama kamu ..."
              value={nameChat}
              onChange={(e) => setNameChat(e.target.value)}
              className="flex-1 min-w-0 bg-transparent focus:outline-none text-[13px] md:text-base text-yl-20 placeholder:text-yl-40/50"
            />
            <button
              type="submit"
              className="flex items-center gap-x-1.5 bg-yl-10 hover:bg-yl-30 active:scale-95 transition-all text-white px-4 py-2.5 rounded-xl text-[13px] md:text-[15px] font-medium flex-shrink-0"
            >
              <FaWhatsapp className="text-[16px]" />
              Chat
            </button>
          </form>
        </div>

        {/* ── Link columns ── */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-x-6 gap-y-8 mt-12 md:mt-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 flex flex-col gap-y-4">
            <img src="/yessles_logo.png" alt="Yessles" width={148} height={34} className="w-[148px] h-auto" />
            <p className="text-gray-500 font-light text-[13px] leading-relaxed max-w-[240px]">
              Yessles — Bimbingan Belajar Privat No.1 di Madiun. Sahabat belajar yang menemani setiap langkah si buah hati.
            </p>
            <div className="flex flex-row gap-x-2 items-center mt-1">
              <a
                href="https://www.facebook.com/yessles.madiun"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center transition-all hover:border-[#1877F2]"
              >
                <img src="/social_media/fb_icon.svg" alt="" className="w-5 h-5 grayscale hover:grayscale-0 transition-all" />
              </a>
              {socials.map(({ Icon, href, label, hover }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 transition-all ${hover}`}
                >
                  <Icon className="size-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Program Belajar */}
          <div className="md:col-span-2 flex flex-col">
            <ColumnTitle>Program Belajar</ColumnTitle>
            <div className="flex flex-col gap-y-2.5">
              {programLinks.map((l) => (
                <FooterLink key={l.href} href={l.href}>
                  {l.label}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* Paket Belajar */}
          <div className="md:col-span-2 flex flex-col">
            <ColumnTitle>Paket Belajar</ColumnTitle>
            <div className="flex flex-col gap-y-2.5">
              {paketLinks.map((l) => (
                <FooterLink key={l.href} href={l.href}>
                  {l.label}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* Jelajahi */}
          <div className="md:col-span-2 flex flex-col">
            <ColumnTitle>Jelajahi</ColumnTitle>
            <div className="flex flex-col gap-y-2.5">
              {exploreLinks.map((l) => (
                <FooterLink key={l.href} href={l.href} external={l.external}>
                  {l.label}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* Kontak */}
          <div className="col-span-2 md:col-span-2 flex flex-col">
            <ColumnTitle>Kontak</ColumnTitle>
            <div className="flex flex-col gap-y-3">
              <div className="flex items-start gap-x-2 text-[13px] text-gray-500 leading-snug">
                <HiOutlineLocationMarker className="text-yl-60 size-[18px] mt-0.5 flex-shrink-0" />
                <span>Jl. Bali No. 1C, Kota Madiun, Jawa Timur, 63122.</span>
              </div>
              <a
                href={`tel:+${WA_PHONE}`}
                className="flex items-center gap-x-2 text-[13px] text-gray-500 hover:text-yl-60 transition-all"
              >
                <HiOutlinePhone className="text-yl-60 size-[18px] flex-shrink-0" />
                (+62) 899 4944 728
              </a>
              <a
                href="mailto:haloyessles@gmail.com"
                className="flex items-center gap-x-2 text-[13px] text-gray-500 hover:text-yl-60 transition-all"
              >
                <HiOutlineMail className="text-yl-60 size-[18px] flex-shrink-0" />
                haloyessles@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-gray-200 mt-10 md:mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-y-2">
          <p className="text-[12px] text-gray-400">© {new Date().getFullYear()} Yessles. Seluruh hak cipta dilindungi.</p>
          <p className="text-[12px] text-gray-400">Yessles, Sahabat Belajarmu 💚</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
