import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { IoMdSchool } from "react-icons/io";
import { Fragment, useEffect, useRef, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { generateSliceIndexes } from "@/utils/Static";
import { program_yessles } from "@/database/program.json";
import { faq } from "@/database/faq.json";
import { sistem_belajar as sistemBelajar } from "@/database/sistem_belajar.json";
import Footer from "./components/Footer";
import CarouselProgramBelajar from "./components/CarouselProgramBelajar";
import { program_belajar } from "@/database/program_belajar.json";
import Aos from "aos";
import Subscription from "./components/Subscription";

const ProgBelPage = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [dataPage, setDataPage] = useState<any>();
  const [startIndex, endIndex] = generateSliceIndexes();
  const { slug } = useParams();
  const mata_pelajaran = useRef<null | HTMLDivElement>(null);
  const sistem_belajar = useRef<null | HTMLDivElement>(null);
  const paket_belajar = useRef<null | HTMLDivElement>(null);
  const kenapa_yessles = useRef<null | HTMLDivElement>(null);
  const navigate = useNavigate();
  const data = dataPage;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 130;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const linkToSemuaMapel = () => {
    const url = `https://drive.google.com/file/d/1Lw2J9AldSgcy2PSBrXzribur3lFnwF6A/view?usp=sharing`;
    window.open(url, "_blank", "noopener noreferrer");
  };

  useEffect(() => {
    Aos.refresh();
    program_belajar.forEach((data) => {
      if (data.slug === slug) {
        setDataPage(data);
      }
    });
  }, [slug]);

  const scrollToSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 130,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    Aos.init({
      disable: false,
      duration: 700,
      easing: "ease-out-cubic",
      once: false,
      startEvent: "load",
      disableMutationObserver: false,
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div
        data-aos="fade-up"
        className="fade-up-animation w-full h-[600px] mt-[9%] px-[8%] flex flex-col justify-start items-center gap-y-5"
      >
        <div className="flex flex-row justify-between items-start w-full">
          <h1 className="text-[42px] font-lexend font-bold text-left w-[55%] leading-[50px] text-yl-20">
            {data?.hero?.title}
          </h1>
          <h1 className="text-[16px] text-left  w-[60%] leading-7 font-lexend">
            {data?.hero?.description}
          </h1>
        </div>

        <div className="bg-black rounded-xl w-full h-[440px] mt-4 flex flex-row justify-start items-start p-6 gap-x-8">
          <div className="rounded-xl bg-yellow-50 w-[55%] h-full overflow-hidden items-center justify-center flex relative">
            <div className="absolute bottom-0 bg-gradient-to-t from-black/40 to-white/0 w-full h-full"></div>
            <img
              src={data?.hero?.thumbnail}
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 right-0 p-4 gap-y-2 flex flex-col items-end">
              <div className="flex flex-row gap-x-2">
                {data?.mapel?.opsi
                  .map((data: any) => (
                    <div className="px-3 py-1 rounded-md bg-yl-10/30 text-white">
                      {data?.label}
                    </div>
                  ))
                  .slice(startIndex, endIndex)}
                {data?.mapel?.opsi.length == 1 && (
                  <div className="px-3 py-1 rounded-md bg-yl-10/30 text-white">
                    Semua Mata Pelajaran
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-6 h-full py-4 w-[55%] text-white">
            <p className="text-white text-[32px] font-lexend font-bold leading-[42px]">
              {data?.hero?.sub_description}
            </p>

            <div className="flex flex-row gap-x-2 justify-start items-center">
              <h1 className="font-lexend font-light underline">
                Kenali Sistem Belajar yang ada di Yessles
              </h1>
            </div>

            <div className="flex flex-row gap-x-4">
              {sistemBelajar
                ?.map((data, index) => (
                  <div
                    key={index}
                    className="w-full h-[140px] border-dashed border-gray-200 border-[2px] rounded-lg flex justify-center items-start flex-col px-3 py-2 gap-y-1"
                  >
                    <h1 className="text-[13px] font-bold text-yl-10">
                      {data?.title}
                    </h1>
                    <h1 className="text-[11px] font-light">
                      {data?.description}
                    </h1>
                  </div>
                ))
                .slice(startIndex, endIndex)}
            </div>

            <div
              onClick={() => scrollToSection(mata_pelajaran)}
              className="w-full bg-yl-40 text-white flex justify-center items-center py-2 rounded-lg font-lexend hover:bg-yl-10 transition-all gap-x-2"
            >
              <AiOutlineDown className="text-[18px]" />
              <h1>Kenali lebih Lanjut</h1>
            </div>
          </div>
        </div>
      </div>

      <section id="new_form">
        <div className="flex flex-row w-full h-full px-[8%] gap-x-4 font-lexend mt-8">
          {/* Sidebar */}
          <div className="sticky top-28 shadow-xl w-[240px] h-[350px] gap-y-4 flex flex-col rounded-md justify-between">
            <div className="w-full bg-yl-60 h-[65px] rounded-t-md absolute flex justify-center items-center px-6">
              <h1 className="text-left text-white font-bold">{data?.type}</h1>
            </div>
            <div className="flex flex-col gap-y-4 p-6 mt-16">
              <a
                className={`hover:underline ${
                  activeLink === "mata_pelajaran" ? `underline font-bold` : ``
                }`}
                onClick={() => scrollToSection(mata_pelajaran)}
              >
                Mata Pelajaran
              </a>
              <a
                className={`hover:underline ${
                  activeLink === "sistem_belajar" ? `underline font-bold` : ``
                }`}
                onClick={() => scrollToSection(sistem_belajar)}
              >
                Sistem Belajar
              </a>
              <a
                className={`hover:underline ${
                  activeLink === "paket_belajar" ? `underline font-bold` : ``
                }`}
                onClick={() => scrollToSection(paket_belajar)}
              >
                Paket Belajar
              </a>
              <a
                className={`hover:underline ${
                  activeLink === "kenapa_yessles" ? `underline font-bold` : ``
                }`}
                onClick={() => scrollToSection(kenapa_yessles)}
              >
                Kenapa Yessles?
              </a>
            </div>
            <Link
              to={`https://api.whatsapp.com/send?phone=628994944728&text=Halo%20Kak!%20Mohon%20info%20cara%20bergabung%20di%20Yessles?`}
              data-action="share/whatsapp/share"
              target="_blank"
            >
              <div className="flex flex-row gap-x-2 bg-yl-100 mx-4 mb-3 py-1 rounded-lg justify-center items-center text-white hover:bg-yl-10 hover:scale-105 transition-all">
                <img src="/whatsapp-icon.svg" alt="" className="w-4 h-4" />
                <p>Hubungi Kami</p>
              </div>
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex w-[85%] flex-col px-7">
            {/* Mata Pelajaran Section */}
            <section
              className="w-full h-fit mb-12"
              ref={mata_pelajaran}
              id="mata_pelajaran"
            >
              <div className="flex flex-col relative">
                {/* <h1 className="text-[14px] text-yl-30">Mata Pelajaran</h1> */}
                <h1 className="text-[24px] font-bold text-yl-20 font-lexend">
                  Bisa Pilih Mata Pelajaran
                </h1>
              </div>

              <div className="grid grid-cols-2 xl:grid-cols-3 w-full h-fit gap-2 mt-4">
                {data?.mapel?.opsi.map((data: any) => (
                  <>
                    {/* Component Mata Pelajaran */}
                    <div className="w-full h-[130px] bg-yl-60/20 rounded-lg flex justify-center items-center text-yl-60 flex-col">
                      <div className="flex flex-row justify-center items-start gap-x-2 w-full px-4">
                        <IoMdSchool className="size-[30px]" />
                        <h1 className="text-[18px] ">{data?.label}</h1>
                      </div>
                    </div>
                  </>
                ))}
                <div
                  onClick={linkToSemuaMapel}
                  className="w-full h-[130px] bg-yl-60/20 rounded-lg flex justify-center items-center text-yl-60 flex-col hover:bg-yl-10 hover:text-white transition-all"
                >
                  <div className="flex flex-row justify-center items-center gap-x-2 w-full px-4">
                    <BsFillArrowUpRightCircleFill className="size-[25px]" />
                    <h1 className="text-[18px] ">Lihat Lebih Detail</h1>
                  </div>
                </div>
              </div>
            </section>

            {/* Sistem Belajar Section */}
            <section
              className="w-full h-fit mb-20"
              ref={sistem_belajar}
              id="sistem_belajar"
              data-aos="fade-up"
            >
              <div className="flex flex-col relative mb-4">
                {/* <h1 className="text-[14px] text-yl-30">Program Yessles</h1> */}
                <h1 className="text-[24px] font-bold text-yl-20 font-lexend">
                  Sistem Belajar
                </h1>
              </div>

              <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 w-full h-full font-lexend">
                {/* Card Sistem Belajar */}
                {sistemBelajar?.map((data, index) => (
                  <Fragment key={index}>
                    <div className="w-full h-full py-6 border-solid border-yl-60 border-2 flex flex-col rounded-lg justify-center px-[8%] items-start">
                      <h1 className="underline">{data?.title}</h1>
                      <h1 className="text-[18px] font-bold leading-6">
                        {data?.description}
                      </h1>
                    </div>
                  </Fragment>
                ))}
              </div>
            </section>

            {/* Paket Belajar Yessles Section */}
            <section
              className="w-full h-fit mb-12"
              ref={paket_belajar}
              id="paket_belajar"
              data-aos="fade-up"
            >
              <div className="flex flex-col relative">
                {/* <h1 className="text-[14px] text-yl-30">Program Yessles</h1> */}
                <h1 className="text-[24px] font-bold text-yl-20 font-lexend">
                  Paket Belajar
                </h1>
              </div>

              <div className="grid grid-cols-2 xl:grid-cols-3 gap-2 w-full font-lexend mt-4">
                {program_yessles?.map(
                  (data, index) =>
                    data.type === "paket_belajar" && (
                      <div
                        onClick={() => {
                          navigate(`/paket/${data?.slug}`);
                        }}
                        key={index}
                        className="relative w-full h-full bg-yl-40/10 rounded-xl flex flex-row p-2 justify-start items-center gap-x-3 group hover:bg-yl-60 transition-all"
                      >
                        <div className="overflow-hidden w-fit h-[130px] xl:h-[140px]  flex rounded-xl">
                          <img
                            src={data.thumbnail}
                            alt=""
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="flex flex-col h-full w-fit items-start justify-start py-2 group-hover:text-white">
                          <h1 className="font-lexend font-bold text-[16px]">
                            {data.pendidikan}
                          </h1>
                          <h1 className="text-yl-30 text-[13px] group-hover:text-white">
                            {data?.tm}x Tatap Muka
                          </h1>
                          {data.priceStart && (
                            <h1 className="text-gray-900 text-[13px] font-light font-lexend w-[80%] mt-4 group-hover:text-white ">
                              Mulai dari <br />
                              {data.priceStart.toString().split(".").length > 1
                                ? `Rp ${data.priceStart}jt`
                                : `Rp ${data.priceStart}rb`}
                              /
                              {data.durasiBelajar === 12
                                ? "thn"
                                : `${data.durasiBelajar} bln`}
                            </h1>
                          )}
                        </div>

                        <div className="absolute right-4 bottom-4">
                          <BsFillArrowUpRightCircleFill className="text-yl-10 text-[20px] group-hover:text-yl-30 group-hover:scale-125 transition-all " />
                        </div>
                      </div>
                    )
                )}
              </div>
            </section>

            {/* Kenapa di Yessles Section */}
            <section
              className="w-full h-fit"
              ref={kenapa_yessles}
              data-aos="fade-up"
              id="kenapa_yessles"
            >
              <div className="flex flex-col relative">
                {/* <h1 className="text-[14px] text-yl-30">Program Yessles</h1> */}
                <h1 className="text-[24px] font-bold text-yl-20 font-lexend">
                  Kenapa di Yessles?
                </h1>
              </div>

              {faq?.map((data, index) => (
                <Accordion key={index} type="single" collapsible>
                  <AccordionItem value={`item-${index + 1}`}>
                    <AccordionTrigger>{data?.question}</AccordionTrigger>
                    <AccordionContent>{data?.answer}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </section>
          </div>
        </div>
      </section>

      {/* Program Yessles */}
      <section id="program" data-aos="fade-up">
        <CarouselProgramBelajar
          programButton={2}
          showButton={2}
          hideButton={true}
          title={"Program Belajar"}
          subtitle={"Program Belajar Lainnya"}
        />
      </section>

      {/* Nodemailer Subscription */}
      <Subscription other={true} />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ProgBelPage;
