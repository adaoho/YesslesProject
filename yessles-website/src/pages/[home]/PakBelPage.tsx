import { Fragment, useEffect, useRef, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import CardProgramYessles from "./components/CardProgramYessles";
import { DataProgramBelajar } from "./utils/TypeDefs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DataFaq, DataPakBelPage, DataSistemBelajar } from "./utils/TypePage";
import { generateSliceIndexes, toMoneyRP } from "../../utils/static";
import Aos from "aos";
import Footer from "./components/Footer";
import SeoComp from "@/components/SeoComp";

const PakBelPage = () => {
  const [nameChat, setNameChat] = useState<string>("");
  const [dataProgBel, setDataProgBel] = useState<DataProgramBelajar[]>();
  const [selectProgram, setSelectProgram] = useState<any>(3);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [dataSistemBelajar, setDataSistemBelajar] =
    useState<DataSistemBelajar[]>();
  const [dataFaq, setDataFaq] = useState<DataFaq[]>();
  const [dataPage, setDataPage] = useState<DataPakBelPage[]>();
  const [startIndex, endIndex] = generateSliceIndexes();

  const { slug } = useParams();
  const harga = useRef<null | HTMLDivElement>(null);
  const ketentuan = useRef<null | HTMLDivElement>(null);
  const sistem_belajar = useRef<null | HTMLDivElement>(null);
  const kenapa_yessles = useRef<null | HTMLDivElement>(null);
  const data = dataPage?.at(0);

  useEffect(() => {
    const fetchProgramBelajar = async () => {
      let response;
      if (selectProgram == 2) {
        response = await fetch(
          `http://localhost:3001/program_yessles?type_like=program_belajar`,
          {
            cache: "no-store",
          }
        );
      } else if (selectProgram == 3) {
        response = await fetch(
          `http://localhost:3001/program_yessles?type_like=paket_belajar`,
          {
            cache: "no-store",
          }
        );
      } else {
        response = await fetch(`http://localhost:3001/program_yessles`, {
          cache: "no-store",
        });
      }

      const responseJson: DataProgramBelajar[] = await response?.json();
      setDataProgBel(responseJson);
    };

    fetchProgramBelajar();
  }, [selectProgram]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 128;
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

  console.log(activeLink);

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

  // FAQ & SISTEM BELAJAR
  useEffect(() => {
    const fetchFaq = async () => {
      const response = await fetch(`http://localhost:3001/faq`, {
        cache: "no-store",
      });

      const responseJson: DataFaq[] = await response?.json();
      setDataFaq(responseJson);
    };

    const fetchSistemBelajar = async () => {
      const response = await fetch(`http://localhost:3001/sistem_belajar`, {
        cache: "no-store",
      });

      const responseJson: DataSistemBelajar[] = await response?.json();
      setDataSistemBelajar(responseJson);
    };

    fetchFaq();
    fetchSistemBelajar();
  }, []);

  // DATA PAGE
  useEffect(() => {
    const fetchPage = async () => {
      const response = await fetch(
        `http://localhost:3001/paket_belajar?slug_like=${slug}`,
        {
          cache: "no-store",
        }
      );

      const responseJson: DataPakBelPage[] = await response?.json();
      setDataPage(responseJson);
    };

    fetchPage();
  }, [slug]);

  const scrollToSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 125,
      behavior: "smooth",
    });
  };

  const onOptionSelectProgram = (e: any) => {
    setSelectProgram(e.target.value);
  };

  const nameChange = (element: any) => {
    const { value } = element.target;
    setNameChat(value);
  };

  const onSubmitChat = (e: any) => {
    e.preventDefault();
    window.open(
      `https://api.whatsapp.com/send?phone=628994944728&text=Halo%20Kak,%20Saya%20${nameChat}!%20Mohon%20info%20cara%20bergabung%20di%20Yessles?`,
      "_blank",
      "rel=noopener noreferrer"
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section id="hero" data-aos="fade-up">
        <SeoComp
          title="Paket Belajar"
          description={`Yessles Bimbingan No.1 di Madiun`}
        />

        <div className="w-full h-[600px] mt-[9%] px-[8%] flex flex-col justify-start items-center gap-y-5">
          <div className="flex flex-row justify-between items-start w-full">
            <h1 className="text-[42px] font-lexend font-bold text-left w-[45%] leading-[50px] text-yl-20">
              {data?.hero?.title}
            </h1>
            <h1 className="text-[14px] text-left  w-[50%] leading-7">
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
                <h1 className="text-white text-[12px] underline">
                  Opsi Mata Pelajaran Scroll di Bawah
                </h1>
              </div>
            </div>

            <div className="flex flex-col gap-y-6 h-full py-4 w-[55%] text-white">
              <h1 className="text-white text-[32px] font-lexend font-bold leading-[42px]">
                {data?.hero?.sub_title}
              </h1>

              <div className="flex flex-row gap-x-2 justify-start items-center">
                <h1 className="font-lexend font-light underline">
                  Kenali Sistem Belajar yang ada di Yessles
                </h1>
              </div>

              <div className="flex flex-row gap-x-4">
                {dataSistemBelajar
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
                onClick={() => scrollToSection(harga)}
                className="w-full bg-yl-40 text-white flex justify-center items-center py-2 rounded-lg font-lexend hover:bg-yl-10 transition-all gap-x-2"
              >
                <AiOutlineDown className="text-[18px]" />
                <h1>Kenali lebih Lanjut</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="new_form">
        <div className="flex flex-row w-full h-full px-[8%] gap-x-4 font-lexend mt-8">
          {/* Sidebar */}
          <div className="sticky top-28 shadow-xl w-[240px] h-[350px] gap-y-4 flex flex-col rounded-md justify-between">
            <div className="w-full bg-yl-60 h-[65px] rounded-t-md absolute flex justify-center items-center px-6">
              <h1 className="text-left text-white font-bold">{data?.title}</h1>
            </div>
            <div className="flex flex-col gap-y-4 p-6 mt-16">
              <a
                className={`hover:underline ${
                  activeLink === "harga" ? `underline font-bold` : ``
                }`}
                onClick={() => scrollToSection(harga)}
              >
                Harga
              </a>
              <a
                className={`hover:underline ${
                  activeLink === "ketentuan" ? `underline font-bold` : ``
                }`}
                onClick={() => scrollToSection(ketentuan)}
              >
                Ketentuan
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
              <div className="flex flex-row gap-x-2 bg-yl-30 mx-4 mb-3 py-1 rounded-lg justify-center items-center text-white hover:bg-yl-10 hover:scale-105 transition-all">
                <img src="/whatsapp-icon.svg" alt="" className="w-4 h-4" />
                <p>Hubungi Kami</p>
              </div>
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex w-[85%] flex-col px-7">
            {/* Harga Section */}
            <section className="w-full h-fit mb-12" ref={harga} id="harga">
              <div className="flex flex-col relative">
                {/* <h1 className="text-[14px] text-yl-30">Paket Belajar</h1> */}
                <h1 className="text-[24px] font-bold text-yl-60 font-lexend">
                  Harga Paket
                </h1>
              </div>

              <div className="grid grid-cols-2 gap-2 w-full font-lexend mt-4">
                {data?.price?.map((data, index) => (
                  <div
                    key={index}
                    className="h-[100px] w-full flex justify-between items-center bg-gray-100 px-4 rounded-lg"
                  >
                    <h1>{data.pendidikan}</h1>
                    <div className="flex flex-col items-end">
                      <h1>Rp {toMoneyRP(data.min_price)}</h1>
                      <h1>
                        {data.max_price === 0
                          ? ""
                          : "Rp " + toMoneyRP(data.max_price)}
                      </h1>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Ketentuan Paket Section */}
            <section
              className="w-full h-fit mb-12"
              ref={ketentuan}
              id="ketentuan"
            >
              <div className="flex flex-col relative">
                {/* <h1 className="text-[14px] text-yl-30">
                  Paket Belajar Yessles
                </h1> */}
                <h1 className="text-[24px] font-bold text-yl-60 font-lexend">
                  Ketentuan
                </h1>
              </div>

              <div className="grid grid-cols-3 gap-2 w-full font-lexend mt-4">
                {data?.ketentuan?.map((data, index) => (
                  <div
                    key={index}
                    className="w-full h-[100px] bg-gray-100 flex justify-center items-center rounded-lg p-4"
                  >
                    <h1>{data?.description}</h1>
                  </div>
                ))}
              </div>
            </section>

            {/* Sistem Belajar Section */}
            <section
              className="w-full h-fit mb-12"
              ref={sistem_belajar}
              id="sistem_belajar"
            >
              <div className="flex flex-col relative mb-4">
                {/* <h1 className="text-[14px] text-yl-30">Program Yessles</h1> */}
                <h1 className="text-[24px] font-bold text-yl-60 font-lexend">
                  Sistem Belajar
                </h1>
              </div>

              <div className="grid grid-cols-3 gap-4 w-full font-lexend">
                {/* Card Sistem Belajar */}
                {dataSistemBelajar?.map((data, index) => (
                  <Fragment key={index}>
                    <div className="w-full h-[120px] border-solid border-yl-60 border-2 flex flex-col rounded-lg justify-center px-[8%] items-start">
                      <h1 className="underline">{data?.title}</h1>
                      <h1 className="text-[18px] font-bold leading-6">
                        {data?.description}
                      </h1>
                    </div>
                  </Fragment>
                ))}
              </div>
            </section>

            {/* Kenapa di Yessles Section */}
            <section
              className="w-full h-fit"
              ref={kenapa_yessles}
              id="kenapa_yessles"
            >
              <div className="flex flex-col relative">
                {/* <h1 className="text-[14px] text-yl-30">Program Yessles</h1> */}
                <h1 className="text-[24px] font-bold text-yl-60 font-lexend">
                  Kenapa di Yessles?
                </h1>
              </div>

              {dataFaq?.map((data, index) => (
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
      <section id="programs">
        <div className="flex w-full h-[700px] items-center mt-[100px]">
          <div className="flex w-full flex-col">
            {/* Header Section Program */}
            <div className="flex flex-row bg-blue-gray-200 h-full w-full justify-between items-center px-[8%]">
              <div className="flex flex-col relative ">
                {/* <div className="bg-yl-30 w-[25px] h-[1px] rounded-[20px] mb-2 absolute -left-8 top-3"></div> */}
                {/* <h1 className="text-[18px] text-yl-30">Program Yessles</h1> */}
                <h1 className="text-[30px] font-bold text-yl-60 font-lexend">
                  Pilih Paket Belajar Yessles Lainnya
                </h1>
              </div>

              {/* Button Type */}
              <div className="flex flex-row gap-x-2">
                <div className="flex flex-row gap-x-2">
                  <input
                    type="radio"
                    name="group_id"
                    id="3"
                    value="3"
                    className="peer hidden"
                    onChange={onOptionSelectProgram}
                  />
                  <label
                    htmlFor="3"
                    className={`${
                      selectProgram == 3 ? `activestyle` : `linkstyle`
                    }`}
                  >
                    <span className="material-symbols-outlined">school</span>
                    Paket Belajar
                  </label>
                </div>
              </div>
            </div>

            {/* Caraousel */}
            <div className="flex flex-row pl-[8%] w-screen mt-2 overflow-x-auto gap-x-8">
              <div className="overflow-x-auto flex flex-row w-full h-full items-start justify-start py-5 gap-x-5 pr-[8%] snap-x snap-mandatory">
                {dataProgBel?.map((programBel, index) => (
                  <CardProgramYessles key={index} data={programBel} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nodemailer Subscription */}
      <section id="subscription">
        <div className="flex w-[100dvw] h-[350px] items-center px-[8%] flex-col pb-[6%] justify-center mt-8">
          {/* Banner Button */}
          <div className="flex flex-col w-full items-center justify-center h-full rounded-[25px] overflow-hidden relative">
            <img
              src="/subscribe_banner.jpeg"
              alt=""
              className="absolute -z-10 w-full object-cover"
            />
            <h1 className="font-lexend font-bold text-[28px] w-[30%] text-center leading-9 text-yl-20">
              Ayo Daftar Sekarang!
            </h1>
            <h1 className="font-lexend text-[14px] w-[70%] text-center  text-yl-20 mt-2">
              Segera amankan jadwalmu, karena jadwal les di Yessles berlaku
              REAL-TIME (tidak ada sistem keep jadwal)
            </h1>
            <h1 className="font-lexend text-[14px] w-[70%] text-center  text-yl-20">
              Untuk Permintaan les, dilayani sesuai jadwal tutor yang tersedia
              ya..
            </h1>
            {/* Input Email */}
            <div className="mt-4 flex flex-row bg-white w-fit h-fit px-1 pl-5 justify-center items-center gap-x-2 rounded-[17px] py-1 text-yl-20 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <span className="material-symbols-outlined">chat</span>
              <form onSubmit={onSubmitChat}>
                <input
                  placeholder="Ketik nama kamu di sini ya.. "
                  type="text"
                  className="w-[250px] focus:outline-none px-4 font-lexend placeholder:text-yl-40/50"
                  onChange={nameChange}
                />
                <button className="bg-yl-10 text-white px-4 py-2 rounded-[13px]">
                  Kirimkan Chat
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PakBelPage;
