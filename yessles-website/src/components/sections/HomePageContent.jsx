import { FaWhatsapp } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { AiOutlineDown } from "react-icons/ai";
import { BiUserPin } from "react-icons/bi";
import { RiUserSmileFill } from "react-icons/ri";
import { FiUserCheck } from "react-icons/fi";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FadeIn } from "../ui/FadeIn";
import { SideArticleCard, FeaturedArticleCard } from "../ArticleCards";
import CardTestimoni from "../CardTestimoni";
import Modal from "../Modal";
import Footer from "../Footer";
import Subscription from "../Subscription";
import CarouselProgramBelajar from "../CarouselProgramBelajar";
import { keepPreviousData, useQuery, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { endPoint } from "../../utils/Endpoint";
import testimoniData from "../../database/testimoni.json";
import { Toaster } from "sonner";

const { testimoni } = testimoniData;
const queryClient = new QueryClient();

const statCards = [
  { img: "/image_1_home.jpeg", title: "200+ Yess Student", sub: "Murid Aktif" },
  { img: "/image_2_home.jpeg", title: "50+ Yess Tutor", sub: "Sahabat Belajar" },
  { img: "/image_3_home.jpeg", title: "10+ Program Belajar", sub: "Penunjang Belajar" },
];

const methodCards = [
  { id: "1", Icon: RiUserSmileFill, label: "Psikologi", desc: "Memahami mood (suasana hati) dan motivasi belajar." },
  { id: "2", Icon: FiUserCheck, label: "Gaya Belajar", desc: "Mengaplikasikan pembelajaran sesuai dengan gaya belajar." },
  { id: "3", Icon: BiUserPin, label: "Kepribadian", desc: "Memahami tipe kepribadian siswa dalam pembelajaran." },
];

const systemFeatures = [
  { icon: "group", text: "1 Tutor untuk 1 Siswa" },
  { icon: "partner_exchange", text: "Garansi ganti tutor" },
  { icon: "menu_book", text: "Waktu belajar fleksibel" },
  { icon: "person_pin", text: "Belajar di mana saja" },
];

function HomeContent() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const handleScroll = () => {
    if (ref.current) {
      window.scrollTo({ top: ref.current.offsetTop - 30, behavior: "smooth" });
    }
  };

  const { data } = useQuery({
    queryKey: ["article"],
    queryFn: async () => {
      try {
        const res = await fetch(`${endPoint}/article/article-active?page=1&limit=12&search=`);
        return await res.json();
      } catch (error) {
        console.log(error);
      }
    },
    placeholderData: keepPreviousData,
  });

  const dataArtikel = data?.data?.items;

  return (
    <>
      <Toaster />

      {/* ═══════════════════════ HERO SECTION ═══════════════════════ */}
      <section id="hero">
        <div className="absolute flex top-0 pointer-events-none select-none">
          <img src="/bg_color_blur.png" alt="" />
        </div>

        {/* ── MOBILE HERO ── image top half → gradient → white content */}
        <div className="flex flex-col md:hidden w-full pt-[68px]">
          {/* Image with bottom gradient fade to white */}
          <FadeIn direction="fade">
            <div className="relative w-full h-[270px] flex-shrink-0">
              <img src="/background_utama.jpeg" className="absolute inset-0 w-full h-full object-cover" alt="Yessles" />
              {/* Fade image → white so content blends seamlessly */}
              <div className="absolute bottom-0 left-0 right-0 h-[130px] bg-gradient-to-t from-white via-white/75 to-transparent" />
            </div>
          </FadeIn>

          {/* Content — white background, pulls up slightly to blend with gradient */}
          <FadeIn direction="up" delay={0.12} className="flex flex-col px-5 gap-y-4 pb-10 mt-2">
            <h1 className="text-[28px] font-lexend font-bold leading-[34px] text-gray-800">
              Bimbel Privat Nomor 1 di Madiun
            </h1>
            <p className="font-lexend text-[13px] text-yl-40 font-light leading-[22px]">
              Yessles Bimbingan belajar privat berbasis psikologi dan motivasi menggunakan metode{" "}
              <em>Student Centered Learning</em> di mana pusat pembelajaran kami adalah siswa.
            </p>

            {/* Method label divider */}
            <div className="flex flex-row items-center gap-x-2">
              <div className="border-b flex-shrink-0 md:w-[15%] border-gray-300 border-dashed" />
              <p className="font-lexend text-[11px] text-gray-400 text-center flex-shrink-0">Metode Pendekatan Siswa</p>
              <div className="border-b flex-1 border-gray-300 border-dashed" />
            </div>

            {/* Method cards — horizontal scroll, same cards as desktop */}
            <div className="flex flex-row gap-x-2.5 overflow-x-auto no-scrollbar">
              {methodCards.map(({ id, Icon, label, desc }) => (
                <div
                  key={id}
                  className="flex-shrink-0 flex flex-col bg-white border border-yl-60/15 rounded-2xl p-3 w-[145px] gap-y-1.5"
                >
                  <div className="w-7 h-7 rounded-lg bg-yl-60/10 text-yl-60 flex items-center justify-center">
                    <Icon className="text-[14px]" />
                  </div>
                  <b className="text-[12px] text-yl-20 font-lexend leading-tight">{label}</b>
                  <p className="text-[10px] text-gray-500 leading-[14px]">{desc}</p>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div className="flex flex-row gap-x-2 mt-1">
              <a
                href="https://bit.ly/tesgayabelajaryessles"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-yl-30 text-white font-lexend text-[13px] font-medium py-2 flex justify-center items-center  rounded-xl text-center hover:bg-yl-10 transition-all"
              >
                Test Gaya Belajar
              </a>
              <button
                className="flex-1 border-2 border-yl-60 text-yl-60 font-lexend text-[13px] py-2 flex justify-center items-center rounded-xl hover:bg-yl-60 hover:text-white transition-all"
                onClick={handleScroll}
              >
                Lebih Lanjut
              </button>
            </div>
          </FadeIn>
        </div>

        {/* ── DESKTOP HERO ── */}
        <div className="hidden md:flex flex-row w-screen mb-4 relative">
          <FadeIn direction="right" className="flex w-[50%] h-[720px] items-center">
            <div className="flex flex-col w-full pl-[8%] xl:pl-[15%] pr-[6%] xl:pr-[10%] gap-y-4 relative">
              <h1 className="text-[34px] lg:text-[40px] xl:text-[45px] font-lexend font-bold leading-[1.1] text-gray-800">
                Bimbel Privat Nomor 1 di Madiun
              </h1>
              <p className="font-lexend text-[13px] text-yl-40 font-light leading-[23px] max-w-[520px]">
                Yessles Bimbingan belajar privat berbasis psikologi dan motivasi menggunakan metode "Student Centered
                Learning" di mana pusat pembelajaran kami adalah siswa.
              </p>

              <div className="flex flex-row w-full max-w-[520px] gap-x-2 justify-center items-center">
                <div className="border-b-[1px] flex-1 h-2 border-gray-500 border-dashed mb-1" />
                <h1 className="font-lexend text-[14px] whitespace-nowrap">Metode Pendekatan Siswa</h1>
                <div className="border-b-[1px] flex-1 h-2 border-gray-500 border-dashed mb-1" />
              </div>

              <div className="w-full flex flex-row gap-x-3 mt-2">
                {methodCards.map(({ id, Icon, label, desc }) => (
                  <div
                    key={id}
                    className="group flex-1 flex flex-col gap-y-2 bg-white border border-yl-60/15 rounded-2xl p-4 hover:border-yl-60/40 hover:shadow-[0_10px_28px_rgba(82,119,115,0.12)] hover:-translate-y-1 transition-all"
                  >
                    <div className="w-9 h-9 rounded-xl bg-yl-60/10 text-yl-60 flex items-center justify-center group-hover:bg-yl-60 group-hover:text-white transition-colors">
                      <Icon className="text-[18px]" />
                    </div>
                    <b className="text-yl-20 text-[14px] font-lexend">{label}</b>
                    <p className="text-gray-500 text-[12.5px] leading-5 font-lexend">{desc}</p>
                  </div>
                ))}
              </div>

              <a
                href="https://bit.ly/tesgayabelajaryessles"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-[520px]"
              >
                <div className="flex flex-row w-full gap-x-2 justify-center items-center group">
                  <div className="border-b-[1px] flex-1 h-2 border-gray-500 border-dashed mb-1" />
                  <h1 className="font-lexend text-[14px] whitespace-nowrap underline px-4 py-1 bg-yl-30 transition-all rounded-lg text-white hover:bg-yl-10 hover:scale-110">
                    Ikuti Test Gaya Belajar!
                  </h1>
                  <div className="border-b-[1px] flex-1 h-2 border-gray-500 border-dashed mb-1" />
                </div>
              </a>

              <button
                className="bg-yl-40 px-3 w-full max-w-[540px] py-2.5 mt-1 flex justify-center items-center rounded-xl gap-x-2 text-white hover:bg-yl-10 transition-all xl:absolute xl:-bottom-[90px] xl:mt-0 xl:animate-bounce"
                onClick={handleScroll}
              >
                <AiOutlineDown className="text-[18px]" />
                <p className="font-lexend text-white">Ketahui Lebih Lanjut</p>
              </button>
            </div>
          </FadeIn>

          <FadeIn
            direction="left"
            className="flex flex-col w-[38%] xl:w-[48%] 2xl:w-[50%] h-[720px] items-center justify-center absolute -right-3 xl:right-0"
          >
            <img
              src="/background_utama.jpeg"
              className="w-full h-full -z-10 object-cover rounded-bl-[60px] absolute right-0"
              alt=""
            />
            <div className="absolute bottom-20 right-0 px-4 w-[380px] lg:w-[430px] pl-8 xl:w-[625px] 2xl:w-[730px] max-h-24 flex-row flex overflow-x-auto overflow-hidden gap-x-3">
              {statCards.map(({ img, title, sub }, i) => (
                <div key={i} className="flex">
                  <div className="flex flex-row items-center h-[80px] w-[280px] rounded-2xl bg-white/95 backdrop-blur-sm p-4 gap-x-3 shadow-[0_8px_30px_rgba(27,28,87,0.15)] border border-white/60">
                    <img src={img} className="h-[52px] w-[52px] object-cover rounded-xl flex-shrink-0" alt="" />
                    <div className="flex flex-col">
                      <h1 className="text-[15px] font-bold font-lexend text-yl-20 leading-tight">{title}</h1>
                      <h1 className="text-[11px] font-lexend text-yl-40">{sub}</h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════ PROGRAMS SECTION ═══════════════════════ */}
      <section id="programs" ref={ref}>
        <FadeIn direction="up">
          <CarouselProgramBelajar />
        </FadeIn>
      </section>

      {/* ═══════════════════════ ABOUT SECTION ═══════════════════════ */}
      <section id="about">
        {/* ── MOBILE ABOUT ── */}
        <div className="flex md:hidden w-full flex-col px-5 py-8 gap-y-6">
          <FadeIn direction="up">
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-col relative">
                <div className="bg-yl-30 w-[18px] h-[2px] rounded absolute left-0 top-2.5 hidden" />

                <h1 className="text-[14px] text-yl-30">Tentang Yessles</h1>
                <h1 className="text-[22px] font-bold text-yl-60 font-lexend leading-tight mt-0.5">
                  Kenapa Harus Belajar di Yessles?
                </h1>
              </div>
              <p className="text-[13px] text-yl-90 leading-[22px] font-lexend">
                Bagi Yessles belajar itu bukan hanya tentang mengerjakan tugas atau ujian. Ini tentang memahami konsep,
                mengeksplorasi minat si Buah Hati, agar dapat tumbuh menjadi individu yang lebih percaya diri.
              </p>

              <div className="grid grid-cols-2 gap-2 mt-1 font-lexend">
                {systemFeatures.map(({ icon, text }, i) => (
                  <div
                    key={i}
                    className="flex flex-row items-center gap-x-2 bg-white border border-yl-60/15 rounded-xl px-3 py-2.5"
                  >
                    <span className="material-symbols-outlined text-yl-10 text-[18px] flex-shrink-0">{icon}</span>
                    <p className="text-[12px] text-yl-20 leading-tight">{text}</p>
                  </div>
                ))}
              </div>

              <div className="divider" />

              <div className="flex flex-row items-center gap-x-3">
                <img src="/profile_contact.png" alt="" className="w-10 h-10 rounded-full flex-shrink-0" />
                <div className="flex flex-col">
                  <h1 className="text-[13px] font-lexend font-bold text-yl-60">Customer Service</h1>
                  <h1 className="font-lexend text-gray-500 text-[11px]">Yessles Head Office</h1>
                </div>
              </div>

              <div className="flex flex-row gap-x-3">
                <a
                  href="https://api.whatsapp.com/send?phone=628994944728&text=Halo%20Kak!%20Mohon%20info%20cara%20bergabung%20di%20Yessles?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <div className="flex flex-row gap-x-2 bg-yl-60 rounded-2xl justify-center items-center px-3 py-2.5 text-white hover:bg-yl-10 transition-all">
                    <FaWhatsapp className="size-4 flex-shrink-0" />
                    <p className="text-[13px] font-lexend">Daftar</p>
                  </div>
                </a>
                <a href="https://bit.ly/tesgayabelajaryessles" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <div className="flex flex-row gap-x-2 bg-yl-60 rounded-2xl justify-center items-center px-3 py-2.5 text-white hover:bg-yl-30 transition-all">
                    <CgNotes className="size-4 flex-shrink-0" />
                    <p className="text-[13px] font-lexend">Test Gaya Belajar</p>
                  </div>
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <div className="relative w-full h-[220px] rounded-2xl overflow-hidden group cursor-pointer">
              <img
                src="/image_4_home.png"
                alt=""
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
              <button
                onClick={() => setOpen(true)}
                className="absolute inset-0 flex items-center justify-center text-white/70 group-hover:text-white transition-all"
              >
                <span className="material-symbols-outlined drop-shadow-2xl" style={{ fontSize: 64 }}>
                  play_circle
                </span>
              </button>
            </div>
          </FadeIn>
        </div>

        {/* ── DESKTOP ABOUT ── */}
        <FadeIn direction="up" className="hidden md:flex w-[100dvw] h-fit items-center px-[8%] py-[8%]">
          <div className="grid grid-cols-2 w-full h-full gap-x-12">
            <div className="flex flex-col h-full w-full justify-center items-start">
              <div className="flex flex-col relative">
                <div className="bg-yl-30 w-[25px] h-[1px] rounded-[20px] mb-2 absolute -left-8 top-3" />
                <h1 className="text-[18px] text-yl-30">Tentang Yessles</h1>
                <h1 className="text-[30px] font-bold text-yl-60 font-lexend">Kenapa Harus Belajar di Yessles?</h1>
              </div>
              <p className="text-[15px] text-yl-90 leading-6 font-lexend pr-[8%] mt-3">
                Bagi Yessles belajar itu bukan hanya tentang mengerjakan tugas atau ujian. Ini tentang memahami konsep,
                mengeksplorasi minat si Buah Hati, agar Buah Hati dapat tumbuh menjadi individu yang lebih percaya diri dan
                berpengetahuan.
              </p>

              <div className="flex flex-col mt-7 w-full font-lexend text-yl-100 gap-y-4">
                <h1 className="font-lexend font-bold text-[17px] text-yl-20">Sistem Belajar</h1>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
                  {systemFeatures.map(({ icon, text }, i) => (
                    <div
                      key={i}
                      className="flex flex-row items-center gap-x-3 bg-white border border-yl-60/15 rounded-xl px-4 py-3 hover:border-yl-60/40 hover:shadow-[0_8px_20px_rgba(82,119,115,0.1)] transition-all"
                    >
                      <span className="material-symbols-outlined text-yl-10 text-[20px]">{icon}</span>
                      <p className="text-[14px] text-yl-20">{text}</p>
                    </div>
                  ))}
                </div>

                <div className="divider pr-[15%]" />

                <div className="flex flex-col xl:flex-row justify-start items-start xl:items-center gap-x-4 gap-y-4 mr-7">
                  <div className="flex flex-row gap-x-3">
                    <img src="/profile_contact.png" alt="" className="w-12 h-12 rounded-full" />
                    <div className="flex flex-col">
                      <h1 className="text-[15px] font-lexend font-bold text-yl-60 truncate">Customer Service</h1>
                      <h1 className="font-lexend text-gray-500 text-[12px]">Yessles Head Office</h1>
                    </div>
                  </div>
                  <div className="flex flex-row gap-x-4">
                    <a
                      href="https://api.whatsapp.com/send?phone=628994944728&text=Halo%20Kak!%20Mohon%20info%20cara%20bergabung%20di%20Yessles?"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex flex-row gap-x-2 bg-yl-60 xl:ml-2 rounded-2xl justify-center items-center px-4 py-2 text-white hover:bg-yl-10 hover:scale-105 transition-all">
                        <FaWhatsapp className="size-6" />
                        <p>Daftar</p>
                      </div>
                    </a>
                    <a href="https://bit.ly/tesgayabelajaryessles" target="_blank" rel="noopener noreferrer">
                      <div className="flex flex-row gap-x-2 -ml-2 bg-yl-60 rounded-2xl justify-center items-center px-4 py-2 text-white hover:bg-yl-30 hover:scale-105 transition-all">
                        <CgNotes className="size-5" />
                        <p className="xl:truncate">Test Gaya Belajar</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full h-full min-h-[380px] rounded-3xl overflow-hidden group">
              <img
                src="/image_4_home.png"
                alt=""
                className="w-full h-full grayscale object-cover group-hover:grayscale-0 transition-all duration-500"
              />
              {/* <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" /> */}
              <button
                onClick={() => setOpen(true)}
                className="absolute inset-0 flex justify-center items-center text-white/80 group-hover:text-white group-hover:scale-105 transition-all"
              >
                <span className="material-symbols-outlined drop-shadow-2xl" style={{ fontSize: 80 }}>
                  play_circle
                </span>
              </button>
            </div>
          </div>
        </FadeIn>

        <Modal open={open} onClose={() => setOpen(false)} bgcolor="bg-white">
          <iframe
            className="w-[86vw] max-w-[1120px] aspect-video rounded-lg"
            src="https://www.youtube.com/embed/CDZrI7cQZiE?si=9_KqKhiQhjoAPyRs"
            allowFullScreen
          />
        </Modal>
      </section>

      {/* ═══════════════════════ TESTIMONI SECTION ═══════════════════════ */}
      <section id="testimoni">
        <FadeIn direction="up">
          <div className="flex w-[100dvw] h-fit items-center flex-col mb-6 md:mb-8">
            <div className="flex flex-col justify-center items-center w-full h-fit">
              <div className="bg-yl-30 w-[5%] h-[1px] rounded-[20px] mb-2" />
              <h1 className="text-[18px] text-yl-30">Testimoni</h1>
              <h1 className="text-[24px] md:text-[30px] font-bold text-yl-60 font-lexend">Yessles Kata Mereka</h1>
            </div>
          </div>

          <div className="w-screen overflow-x-clip">
            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: "auto",
                  centeredSlides: true,
                  spaceBetween: 16,
                },
                768: {
                  slidesPerView: "auto",
                  centeredSlides: true,
                  spaceBetween: 32,
                },
              }}
              pagination={{ clickable: true }}
              speed={900}
              autoplay={{ delay: 5500, disableOnInteraction: false }}
              initialSlide={1}
              modules={[Pagination, Autoplay]}
              className="testimoni-swiper"
            >
              {testimoni?.map((data, index) => (
                <SwiperSlide key={index}>
                  <CardTestimoni testimoni={data} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </FadeIn>
      </section>

      {/* ═══════════════════════ ARTICLES SECTION ═══════════════════════ */}
      <section id="article">
        <FadeIn direction="up">
          <div className="flex w-[100dvw] h-fit items-center px-[5%] md:px-[8%] flex-col pb-[2%] pt-6">
            <div className="flex flex-col justify-center items-center w-full h-fit pb-[2%] text-center">
              <div className="flex w-[100dvw] h-fit items-center flex-col mb-2">
                <div className="flex flex-col justify-center items-center w-full h-fit">
                  <div className="bg-yl-30 w-[5%] h-[1px] rounded-[20px] mb-2" />
                  <h1 className="text-[18px] text-yl-30">Yessles Articles</h1>
                  <h1 className="text-[24px] md:text-[30px] font-bold text-yl-60 font-lexend">Cerita Yessles</h1>
                </div>
              </div>
            </div>

            {/* Featured + aligned side list (bordered cards, skeleton while loading) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-6 lg:gap-12 mt-3">
              <FeaturedArticleCard data={dataArtikel?.at(0)} />

              <div className="flex flex-col gap-y-4 h-full">
                {(dataArtikel?.slice(1, 4) ?? [undefined, undefined, undefined]).map((item, i) => (
                  <SideArticleCard key={i} data={item} />
                ))}
              </div>
            </div>

            <a href="/article">
              <div className="flex mt-10 md:14 flex-row items-center gap-x-2 font-lexend text-[14px] px-5 py-2.5 bg-yl-60 hover:bg-yl-10 transition-all text-white rounded-full">
                Jelajahi Artikel di Yessles
                <span className="material-icons text-[18px]">arrow_forward</span>
              </div>
            </a>
          </div>
        </FadeIn>
      </section>

      <Subscription className="hidden" />
      <Footer />
    </>
  );
}

export default function HomePageContent() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomeContent />
    </QueryClientProvider>
  );
}
