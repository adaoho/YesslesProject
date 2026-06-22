import { BsWhatsapp, BsFillArrowUpRightCircleFill, BsCheckLg } from "react-icons/bs";
import { IoMdSchool } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { FadeIn } from "../ui/FadeIn";
import { generateSliceIndexes, toMoneyRP, formatPaketPrice } from "../../utils/Static";
import Footer from "../Footer";
import Subscription from "../Subscription";
import paketBelajarData from "../../database/paket_belajar.json";
import sistemBelajarData from "../../database/sistem_belajar.json";
import faqData from "../../database/faq.json";
import programData from "../../database/program.json";

const { paket_program_belajar } = paketBelajarData;
const { sistem_belajar: sistemBelajar } = sistemBelajarData;
const { faq } = faqData;
const { program_yessles } = programData;

const durasiLabel = (n) => (n === 12 ? "1 Tahun" : `${n} Bulan`);

const PakBelPageContent = ({ slug }) => {
  const [activeLink, setActiveLink] = useState(null);
  const [startIndex, endIndex] = generateSliceIndexes();

  const harga = useRef(null);
  const ketentuan = useRef(null);
  const sistem_belajar_ref = useRef(null);
  const kenapa_yessles = useRef(null);

  const data = paket_program_belajar.find((p) => p.slug === slug);
  const meta = program_yessles.find((d) => d.slug === slug && d.type === "paket_belajar");
  const otherPaket = program_yessles.filter((d) => d.type === "paket_belajar" && d.slug !== slug);

  const sidebarLinks = [
    { label: "Harga Paket", ref: harga, id: "harga" },
    { label: "Ketentuan", ref: ketentuan, id: "ketentuan" },
    { label: "Sistem Belajar", ref: sistem_belajar_ref, id: "sistem_belajar" },
    { label: "Kenapa Yessles?", ref: kenapa_yessles, id: "kenapa_yessles" },
  ];

  // Fixed-navbar offset (smaller on mobile where the navbar is shorter).
  const navOffset = () => (window.innerWidth < 768 ? 90 : 130);

  const scrollToSection = (elementRef) => {
    const el = elementRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - navOffset();
    window.scrollTo({ top, behavior: "smooth" });
  };

  // Scroll-spy: highlight the active sidebar link. Scoped to the sidebar
  // refs only — querying every <section> matched the outer/nested wrappers
  // and unrelated sections, so the active state kept flickering off.
  useEffect(() => {
    const handleScroll = () => {
      const pos = window.scrollY + navOffset() + 12;
      let current = null;
      for (const { ref, id } of sidebarLinks) {
        const el = ref.current;
        if (el && pos >= el.getBoundingClientRect().top + window.scrollY) current = id;
      }
      setActiveLink(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* Hero */}
      <FadeIn
        direction="up"
        className="w-full h-auto md:min-h-[600px] mt-[30%] md:mt-[9%] px-[5%] md:px-[8%] flex flex-col justify-start items-center gap-y-5"
      >
        <div className="flex flex-col md:flex-row justify-between items-start w-full gap-y-3 md:gap-x-8">
          <h1 className="text-[28px] md:text-[42px] font-lexend font-bold text-left md:w-1/2 leading-tight text-yl-20">
            {data?.hero?.title}
          </h1>
          <h1 className="text-[14px] md:text-[16px] text-left md:w-1/2 leading-7 font-lexend text-gray-600">
            {data?.hero?.description}
          </h1>
        </div>

        <div className="bg-black rounded-xl w-full h-auto md:h-[440px] mt-4 flex flex-col md:flex-row justify-start items-start p-4 md:p-6 gap-y-4 md:gap-x-8">
          <div className="rounded-xl bg-yellow-50 w-full md:w-[52%] h-[200px] md:h-full overflow-hidden items-center justify-center flex relative">
            <div className="absolute bottom-0 bg-gradient-to-t from-black/40 to-white/0 w-full h-full" />
            <img src={data?.hero?.thumbnail} className="w-full h-full object-cover" alt="" />
            <div className="absolute bottom-0 right-0 p-3 md:p-4 gap-y-2 flex flex-col items-end">
              <div className="flex flex-row flex-wrap gap-2 justify-end">
                <div className="px-3 py-1 rounded-md bg-yl-10/30 text-white text-[11px] md:text-sm">
                  {meta?.tm}x Tatap Muka
                </div>
                <div className="px-3 py-1 rounded-md bg-yl-10/30 text-white text-[11px] md:text-sm">
                  Durasi {durasiLabel(meta?.durasiBelajar)}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-4 md:gap-y-6 h-full py-2 md:py-4 w-full md:flex-1 text-white">
            <p className="text-white text-[20px] md:text-[32px] font-lexend font-bold leading-tight md:leading-[42px]">
              {data?.hero?.sub_title}
            </p>
            <div
              onClick={() => scrollToSection(sistem_belajar_ref)}
              className="flex flex-row gap-x-2 justify-start items-center cursor-pointer w-fit group"
            >
              <h1 className="font-lexend font-light underline text-[13px] md:text-base group-hover:text-yl-10 transition-colors">
                Kenali Sistem Belajar yang ada di Yessles
              </h1>
              <BsFillArrowUpRightCircleFill className="text-[14px] md:text-[16px] text-yl-10 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-row gap-x-3 overflow-x-auto no-scrollbar md:grid md:grid-cols-3 md:gap-4 md:overflow-visible">
              {sistemBelajar?.slice(startIndex, endIndex).map((sb, i) => (
                <div
                  key={i}
                  className="group flex-shrink-0 w-[150px] md:w-auto h-[125px] md:h-[150px] rounded-xl border border-white/15 bg-white/[0.06] backdrop-blur-sm p-3 md:p-4 flex flex-col justify-between hover:border-yl-10/60 hover:bg-white/[0.1] transition-all"
                >
                  <span className="text-[11px] md:text-[12px] font-bold text-yl-10/70 font-lexend tracking-wider">
                    0{i + 1}
                  </span>
                  <div className="flex flex-col gap-y-1">
                    <h3 className="text-[12px] md:text-[13px] font-bold text-yl-10 leading-tight">{sb?.title}</h3>
                    <p className="text-[11px] md:text-[12px] font-light text-white/75 leading-snug">{sb?.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div
              onClick={() => scrollToSection(harga)}
              className="w-full bg-yl-40 text-white flex justify-center items-center py-2 rounded-lg font-lexend hover:bg-yl-10 transition-all gap-x-2 cursor-pointer"
            >
              <AiOutlineDown className="text-[18px]" />
              <h1>Lihat Harga Paket</h1>
            </div>
          </div>
        </div>
      </FadeIn>

      <section id="new_form">
        <div className="flex flex-col md:flex-row w-full h-full px-[5%] md:px-[8%] gap-y-4 md:gap-x-4 font-lexend mt-8">
          {/* Sidebar - sticky on desktop, horizontal tabs on mobile */}
          <div className="w-full md:w-[240px] md:self-start md:sticky md:top-28 flex-shrink-0">
            {/* Mobile: inline pill tabs */}
            <div className="flex flex-row gap-x-2 md:hidden w-full no-scrollbar overflow-x-auto pb-1">
              {sidebarLinks.map(({ label, ref, id }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(ref)}
                  className={`flex-shrink-0 px-4 py-1.5 rounded-full text-[12px] font-medium border transition-all ${
                    activeLink === id
                      ? "bg-yl-60 text-white border-yl-60 shadow-[0_4px_12px_rgba(82,119,115,0.25)]"
                      : "border-gray-200 text-gray-500 hover:border-yl-60 hover:text-yl-60"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Desktop: nav card */}
            <div className="hidden md:flex flex-col rounded-2xl border border-yl-60/15 bg-white overflow-hidden shadow-[0_10px_40px_rgba(27,28,87,0.08)]">
              {/* Header */}
              <div className="bg-yl-60 px-5 py-4 flex flex-col gap-y-0.5">
                <span className="text-white/70 text-[11px] font-lexend">Paket Belajar</span>
                <h2 className="text-white font-bold font-lexend text-[15px] leading-tight">{data?.title}</h2>
              </div>

              {/* Nav list */}
              <nav className="flex flex-col p-3 gap-y-1">
                {sidebarLinks.map(({ label, ref, id }) => {
                  const active = activeLink === id;
                  return (
                    <button
                      key={id}
                      onClick={() => scrollToSection(ref)}
                      className={`group flex items-center gap-x-2.5 w-full text-left px-3 py-2.5 rounded-xl text-[14px] font-lexend transition-all ${
                        active ? "bg-yl-60/10 text-yl-60 font-semibold" : "text-gray-500 hover:bg-gray-50 hover:text-yl-20"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full transition-all ${
                          active ? "bg-yl-60 scale-100" : "bg-gray-300 scale-75 group-hover:bg-yl-60"
                        }`}
                      />
                      {label}
                    </button>
                  );
                })}
              </nav>

              {/* WhatsApp CTA */}
              <div className="p-3 pt-0">
                <a
                  href="https://api.whatsapp.com/send?phone=628994944728&text=Halo%20Kak!%20Mohon%20info%20cara%20bergabung%20di%20Yessles?"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-row gap-x-2 bg-yl-10 py-2.5 rounded-xl justify-center items-center text-white text-[14px] font-medium font-lexend hover:bg-yl-60 transition-all">
                    <BsWhatsapp className="w-4 h-4" />
                    <span>Daftar Sekarang</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="flex w-full md:w-[85%] flex-col md:px-7">
            {/* Harga */}
            <FadeIn direction="up">
              <section className="w-full h-fit mb-8 md:mb-12" ref={harga} id="harga">
                <div className="flex flex-col gap-y-1 mb-4">
                  <h1 className="text-[20px] md:text-[24px] font-bold text-yl-20 font-lexend">Harga Paket</h1>
                  <p className="text-[13px] md:text-[14px] text-gray-500 font-lexend">
                    Harga menyesuaikan jenjang pendidikan si buah hati.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 w-full">
                  {data?.price?.map((p, i) => (
                    <div
                      key={i}
                      className="group w-full rounded-2xl border border-yl-60/15 bg-white p-4 flex flex-row items-center justify-between gap-x-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(82,119,115,0.15)] hover:border-yl-60/40"
                    >
                      <div className="flex items-center gap-x-3 min-w-0">
                        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-yl-60/10 text-yl-60 group-hover:bg-yl-60 group-hover:text-white transition-colors flex-shrink-0">
                          <IoMdSchool className="size-[20px]" />
                        </div>
                        <h3 className="text-[13px] md:text-[15px] font-medium text-yl-20 leading-tight">{p.pendidikan}</h3>
                      </div>
                      <div className="flex flex-col items-end flex-shrink-0">
                        <span className="text-[14px] md:text-[16px] font-bold text-yl-60 font-lexend whitespace-nowrap">
                          Rp {toMoneyRP(p.min_price)}
                        </span>
                        {p.max_price > 0 && (
                          <span className="text-[11px] md:text-[12px] text-gray-400 whitespace-nowrap">
                            s/d Rp {toMoneyRP(p.max_price)}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </FadeIn>

            {/* Ketentuan */}
            <FadeIn direction="up">
              <section className="w-full h-fit mb-12 md:mb-20" ref={ketentuan} id="ketentuan">
                <h1 className="text-[20px] md:text-[24px] font-bold text-yl-20 font-lexend mb-4">Ketentuan</h1>
                <div className="flex flex-col gap-y-3">
                  {data?.ketentuan?.map((k, i) => (
                    <div
                      key={i}
                      className="flex flex-row items-start gap-x-3 rounded-2xl border border-yl-60/15 bg-white p-4 md:p-5 transition-all duration-300 hover:border-yl-60/40 hover:shadow-[0_8px_24px_rgba(82,119,115,0.1)]"
                    >
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-yl-10/10 text-yl-10 flex-shrink-0 mt-0.5">
                        <BsCheckLg className="size-[13px]" />
                      </div>
                      <p className="text-[13px] md:text-[14px] text-gray-600 leading-relaxed font-lexend">
                        {k?.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </FadeIn>

            {/* Sistem Belajar */}
            <FadeIn direction="up">
              <section className="w-full h-fit mb-12 md:mb-20" ref={sistem_belajar_ref} id="sistem_belajar">
                <h1 className="text-[20px] md:text-[24px] font-bold text-yl-20 font-lexend mb-4">Sistem Belajar</h1>
                <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4 w-full h-full font-lexend">
                  {sistemBelajar?.map((sb, i) => (
                    <div
                      key={i}
                      className="group w-full h-full rounded-2xl border border-yl-60/15 bg-white p-4 md:p-5 flex flex-col gap-y-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(82,119,115,0.15)] hover:border-yl-60/40"
                    >
                      <div className="flex items-center gap-x-2">
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-yl-60/10 text-yl-60 group-hover:bg-yl-60 group-hover:text-white transition-colors flex-shrink-0">
                          <span className="text-[12px] font-bold font-lexend">0{i + 1}</span>
                        </div>
                        <h3 className="text-[12px] md:text-[13px] text-yl-60 font-medium">{sb?.title}</h3>
                      </div>
                      <p className="text-[15px] md:text-[18px] font-bold text-yl-20 leading-5 md:leading-6">
                        {sb?.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </FadeIn>

            {/* Kenapa di Yessles */}
            <FadeIn direction="up">
              <section className="w-full h-fit" ref={kenapa_yessles} id="kenapa_yessles">
                <h1 className="text-[20px] md:text-[24px] font-bold text-yl-20 font-lexend mb-4">Kenapa di Yessles?</h1>
                <div className="flex flex-col gap-y-3">
                  {faq?.map((f, i) => (
                    <Accordion
                      key={i}
                      type="single"
                      collapsible
                      className="rounded-2xl border border-yl-60/15 bg-white px-4 md:px-5 transition-all duration-300 hover:border-yl-60/40 hover:shadow-[0_8px_24px_rgba(82,119,115,0.1)]"
                    >
                      <AccordionItem value={`item-${i + 1}`} className="border-b-0">
                        <AccordionTrigger className="text-left text-[14px] md:text-[16px] font-semibold text-yl-20 font-lexend hover:no-underline [&[data-state=open]]:text-yl-60 [&[data-state=open]>svg]:text-yl-60">
                          {f?.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-[13px] md:text-[14px] text-gray-500 leading-relaxed font-lexend">
                          {f?.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ))}
                </div>
              </section>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pilih Paket Belajar Lainnya */}
      <FadeIn direction="up">
        <section id="paket_lainnya">
          <div className="px-[5%] md:px-[8%] mt-12 md:mt-20 mb-12">
            <h1 className="text-[20px] md:text-[30px] font-bold text-yl-20 font-lexend">Pilih Paket Belajar Lainnya</h1>
            <p className="text-[13px] md:text-[14px] text-gray-500 font-lexend mb-5 mt-1">
              Temukan paket yang paling pas dengan kebutuhan belajarmu.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4 font-lexend">
              {otherPaket.map((d, i) => (
                <a
                  key={i}
                  href={`/paket/${d.slug}`}
                  className="group bg-white border border-yl-60/15 rounded-2xl flex flex-row p-2.5 items-stretch gap-x-3 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(82,119,115,0.15)] hover:border-yl-60/40 cursor-pointer"
                >
                  <div className="overflow-hidden w-[84px] sm:w-[100px] md:w-[110px] aspect-[4/5] rounded-xl flex-shrink-0">
                    <img
                      src={d.thumbnail}
                      alt=""
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col flex-1 min-w-0 py-1 gap-y-2">
                    <h3 className="font-lexend font-bold text-[15px] md:text-[17px] text-yl-20 leading-snug line-clamp-2">
                      {d.pendidikan}
                    </h3>
                    <span className="inline-flex w-fit items-center rounded-full bg-yl-30/10 text-yl-30 px-2 py-0.5 text-[11px] font-medium">
                      {d?.tm}x Tatap Muka
                    </span>
                    <div className="mt-auto flex items-end justify-between gap-x-2">
                      <div className="flex flex-col min-w-0">
                        <span className="text-[10px] md:text-[11px] text-gray-400 font-lexend">Mulai dari</span>
                        <span className="text-[14px] md:text-[16px] font-bold text-yl-60 font-lexend whitespace-nowrap">
                          {formatPaketPrice(d.priceStart)}
                          <span className="text-[11px] font-light text-gray-500">
                            /{d.durasiBelajar === 12 ? "thn" : `${d.durasiBelajar} bln`}
                          </span>
                        </span>
                      </div>
                      <BsFillArrowUpRightCircleFill className="text-yl-10 text-[20px] group-hover:text-yl-60 group-hover:scale-110 transition-all flex-shrink-0 mb-0.5" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* <Subscription other={true} /> */}
      <Footer />
    </>
  );
};

export default PakBelPageContent;
