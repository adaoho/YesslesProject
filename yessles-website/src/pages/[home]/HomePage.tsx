import { CgNotes } from "react-icons/cg";
import { AiOutlineDown } from "react-icons/ai";
import { BiUserPin } from "react-icons/bi";
import { RiUserSmileFill } from "react-icons/ri";
import { FiUserCheck } from "react-icons/fi";
import {
  DataArtikel,
  DataProgramBelajar,
  DataTestimoni,
} from "./utils/TypeDefs";
import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import CardArticle from "./components/CardArticle";
import CardProgramYessles from "./components/CardProgramYessles";
import CardTestimoni from "./components/CardTestimoni";
import Modal from "../../components/Modal";
import { Link, useSearchParams } from "react-router-dom";
import Aos from "aos";
import "swiper/css";
import "swiper/css/pagination";
import "./utils/swiper.css";
import "aos/dist/aos.css";

const HomePage = () => {
  // @ts-ignore
  let [searchParams, setSearchParams] = useSearchParams();
  const [dataProgBel, setDataProgBel] = useState<DataProgramBelajar[]>();
  const [dataTestimoni, setDataTestimoni] = useState<DataTestimoni[]>();
  const [dataArtikel, setDataArtikel] = useState<DataArtikel[]>();
  const [open, setOpen] = useState(false);
  //@ts-ignore
  const [selectProgram, setSelectProgram] = useState<any>(1);
  let ref = useRef<null | HTMLDivElement>(null);

  const handleScroll = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onOptionSelectProgram = (e: any) => {
    setSelectProgram(e.target.value);
  };

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
    const fetchTestimoni = async () => {
      const response = await fetch(`http://localhost:3001/testimoni`, {
        cache: "no-store",
      });

      const responseJson: DataTestimoni[] = await response?.json();
      setDataTestimoni(responseJson);
    };

    fetchTestimoni();
  }, []);

  useEffect(() => {
    const fetchArtikel = async () => {
      const response = await fetch(`http://localhost:3001/articles`, {
        cache: "no-store",
      });

      const responseJson: DataArtikel[] = await response?.json();
      setDataArtikel(responseJson);
    };

    fetchArtikel();
  }, []);

  useEffect(() => {
    Aos.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section id="hero">
        <div className="absolute flex top-0">
          <img src="/bg_color_blur.png" alt="" />
        </div>
        <div className="grid grid-cols-2 w-full mb-4">
          {/* Part Title */}
          <div
            className="flex w-[50dvw] h-[720px] items-center"
            data-aos="fade-right"
          >
            <div className="flex flex-col w-[560px] pl-[120px] gap-y-4 relative h-[450px]">
              <h1 className="text-[45px] font-lexend font-bold leading-[45px] text-gray-800">
                Bimbel Privat Nomor 1 di Madiun
              </h1>
              <p className="font-lexend text-[13px] text-yl-40 font-light leading-[23px]">
                Yessles Bimbingan belajar privat berbasis psikologi dan motivasi
                menggunakan metode “Student Centered Learning” di mana pusat
                pembelajaran kami adalah siswa.
              </p>

              <div className="flex flex-row w-[520px] gap-x-2 justify-center items-center">
                <div className="border-b-[1px] w-[30%] h-2 border-gray-500 border-dashed mb-1"></div>
                <h1 className="font-lexend text-[14px]">
                  Metode Pendekatan Siswa
                </h1>
                <div className="border-b-[1px] w-[30%] h-2 border-gray-500 border-dashed mb-1"></div>
              </div>

              {/* Selected Metode Belajar */}
              <form className="w-full h-[150px] flex flex-row justify-between mt-2">
                <div className="w-full flex flex-row gap-x-1 rounded-xl justify-between ">
                  <div>
                    <input
                      type="radio"
                      name="group_id"
                      id="1"
                      value="1"
                      className="peer hidden"
                      onChange={onOptionSelectProgram}
                    />
                    <label
                      htmlFor="1"
                      className="cursor-pointer select-none rounded-xl w-[175px] h-[141px] text-gray-600 text-center justify-center items-center flex border-1 bg-yl-10/20 border-1 border-gray-500"
                    >
                      <div className="flex flex-col gap-x-2 justify-center items-center py-2 px-3">
                        <div className="flex flex-row items-center gap-x-2 justify-center">
                          <RiUserSmileFill className="text-[20px]" />
                          <b>Psikologi</b>
                        </div>
                        <p className="leading-5 py-2 text-[14px]">
                          Memahami mood (suasana hati) dan motivasi belajar.
                        </p>
                      </div>
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="group_id"
                      id="2"
                      value="2"
                      className="peer hidden"
                      onChange={onOptionSelectProgram}
                    />
                    <label
                      htmlFor="2"
                      className="cursor-pointer select-none rounded-xl w-[175px] h-[141px] text-gray-600 text-center justify-center items-center flex border-1 bg-yl-10/20 border-1 border-gray-500"
                    >
                      <div className="flex flex-col gap-x-2 justify-center items-center py-2 px-3">
                        <div className="flex flex-row items-center gap-x-2 justify-center">
                          <FiUserCheck className="text-[20px]" />
                          <b>Gaya Belajar</b>
                        </div>
                        <p className="leading-5 py-2 text-[14px]">
                          Mengaplikasikan pembelajaran sesuai dengan gaya
                          belajar.
                        </p>
                      </div>
                    </label>
                  </div>
                  <div>
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
                      className="cursor-pointer select-none rounded-xl w-[175px] h-[141px] text-gray-600 text-center justify-center items-center flex border-1 bg-yl-10/20 border-1 border-gray-500"
                    >
                      <div className="flex flex-col gap-x-2 justify-center items-center py-2 px-3">
                        <div className="flex flex-row items-center gap-x-2 justify-center">
                          <BiUserPin className="text-[20px]" />
                          <b>Kepribadian</b>
                        </div>
                        <p className="leading-5 py-2 text-[14px]">
                          Memahami tipe kepribadian siswa dalam pembelajaran.
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
              </form>

              <Link
                to={`https://drive.google.com/drive/folders/1MmdXrQ4MedPhI1SvNPppSa566knWbemc?usp=sharing`}
                target="_blank"
              >
                <div className="flex flex-row w-[520px] gap-x-2 justify-center items-center group">
                  <div className="border-b-[1px] w-[30%] group-hover:w-[30%] h-2 border-gray-500 border-dashed mb-1"></div>
                  <h1 className="font-lexend text-[14px] underline px-4 py-1 bg-yl-30 transition-all rounded-lg text-white hover:bg-yl-10 hover:scale-110">
                    Ikuti Test Gaya Belajar!
                  </h1>
                  <div className="border-b-[1px] w-[30%] group-hover:w-[30%] h-2 border-gray-500 border-dashed mb-1"></div>
                </div>
              </Link>

              <button
                className="bg-yl-40 px-3 w-[540px] py-2 flex justify-center items-center rounded-xl gap-x-2 text-white absolute -bottom-[70px] animate-bounce hover:bg-yl-10 transition-all"
                onClick={handleScroll}
              >
                <AiOutlineDown className="text-[18px]" />
                <p className="font-lexend text-white">Ketahui Lebih Lanjut</p>
              </button>
            </div>
          </div>

          {/* Fixed Background Image */}
          <div
            className="flex flex-col relative w-[50dvw] h-[720px] items-center justify-center"
            data-aos="fade-left"
          >
            <img
              src="/background_utama.png"
              className="w-full h-full absolute -z-10 object-cover rounded-bl-[60px]"
            />

            <div className="absolute bottom-20 right-0 px-4 w-[700px] max-h-24 flex-row flex overflow-x-auto overflow-hidden gap-x-3">
              {/* card home */}
              <div className="flex">
                <div className="flex flex-row items-center h-[80px] w-[282px] rounded-3xl bg-white p-6 gap-x-4">
                  <img
                    src="/image_1_home.jpg"
                    className="h-[56px] w-[56px] object-cover rounded-3xl"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-[16px] font-lexend text-yl-60">
                      200+ Yess Student
                    </h1>
                    <h1 className="text-[10px] font-lexend text-yl-40">
                      Murid Aktif
                    </h1>
                  </div>
                </div>
              </div>
              {/* card home */}
              <div className="flex">
                <div className="flex flex-row items-center h-[80px] w-[262px] rounded-3xl bg-white p-6 gap-x-4">
                  <img
                    src="/image_2_home.JPG"
                    className="h-[56px] w-[56px] object-cover rounded-3xl"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-[16px] font-lexend text-yl-60">
                      50+ Yess Tutor
                    </h1>
                    <h1 className="text-[10px] font-lexend text-yl-40">
                      Sahabat Belajar
                    </h1>
                  </div>
                </div>
              </div>
              {/* card home */}
              <div className="flex">
                <div className="flex flex-row items-center h-[80px] w-[280px] rounded-3xl bg-white p-6 gap-x-4">
                  <img
                    src="/image_3_home.JPG"
                    className="h-[56px] w-[56px] object-cover rounded-3xl"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-[16px] font-lexend text-yl-60">
                      10+ Program Belajar
                    </h1>
                    <h1 className="text-[10px] font-lexend text-yl-40">
                      Penunjang Belajar
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Yessles */}
      <section id="programs" ref={ref}>
        <div
          className="flex w-[100dvw] h-[700px] items-center pt-[8%]"
          data-aos="fade-up"
        >
          <div className="flex w-full flex-col">
            {/* Header Section Program */}
            <div className="flex flex-row bg-blue-gray-200 h-full w-full justify-between items-center px-[8%]">
              <div className="flex flex-col relative ">
                <div className="bg-yl-30 w-[25px] h-[1px] rounded-[20px] mb-2 absolute -left-8 top-3"></div>
                <h1 className="text-[18px] text-yl-30">
                  Program & Paket Belajar
                </h1>
                <h1 className="text-[30px] font-bold text-yl-60 font-lexend">
                  Belajar di Yessles
                </h1>
              </div>

              {/* Button Type */}
              <div className="flex flex-row gap-x-2">
                <div className="flex flex-row gap-x-2">
                  <input
                    type="radio"
                    name="group_id"
                    id="1"
                    value="1"
                    className="peer hidden"
                    onChange={onOptionSelectProgram}
                  />
                  <label
                    htmlFor="1"
                    className={`${
                      selectProgram == 1 ? `activestyle` : `linkstyle`
                    }`}
                  >
                    <span className="material-symbols-outlined">apps</span>
                    Semua Program
                  </label>
                </div>
                <div className="flex flex-row gap-x-2">
                  <input
                    type="radio"
                    name="group_id"
                    id="2"
                    value="2"
                    className="peer hidden"
                    onChange={onOptionSelectProgram}
                  />
                  <label
                    htmlFor="2"
                    className={`${
                      selectProgram == 2 ? `activestyle` : `linkstyle`
                    }`}
                  >
                    <span className="material-symbols-outlined">school</span>
                    Program Belajar
                  </label>
                </div>
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
                    <span className="material-symbols-outlined">package</span>
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

      {/* Kenapa Harus Belajar di Yessles */}
      <section id="about">
        <div
          className="flex w-[100dvw] h-fit items-center px-[8%] py-[8%]"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-2 w-full h-full">
            {/* Component Left */}
            <div className="flex flex-col h-full w-full justify-center items-start ">
              {/* Title */}
              <div className="flex flex-col relative">
                <div className="bg-yl-30 w-[25px] h-[1px] rounded-[20px] mb-2 absolute -left-8 top-3"></div>
                <h1 className="text-[18px] text-yl-30">Tentang Yessles</h1>
                <h1 className="text-[30px] font-bold text-yl-60 font-lexend">
                  Kenapa Harus Belajar di Yessles?
                </h1>
              </div>
              <p className="text-[15px] text-yl-90 leading-6 font-lexend pr-[8%] mt-3">
                Bagi Yessles belajar itu bukan hanya tentang mengerjakan tugas
                atau ujian. Ini tentang memahami konsep, mengeksplorasi minat si
                Buah Hati, agar Buah Hati dapat tumbuh menjadi individu yang
                lebih percaya diri dan berpengetahuan.
              </p>

              {/* Sistem Belajar */}
              <div className="flex flex-col mt-7 w-full font-lexend text-yl-100 gap-y-4">
                <h1 className="font-lexend font-bold text-[17px] underline">
                  Sistem Belajar
                </h1>
                <div className="grid grid-cols-2">
                  <div className="flex flex-row gap-x-2">
                    <span className="material-symbols-outlined">group</span>
                    <p>1 Tutor untuk 1 Siswa</p>
                  </div>
                  <div className="flex flex-row gap-x-2">
                    <span className="material-symbols-outlined">
                      partner_exchange
                    </span>
                    <p>Garansi ganti tutor</p>
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="flex flex-row gap-x-2">
                    <span className="material-symbols-outlined">menu_book</span>
                    <p>Waktu belajar fleksibel</p>
                  </div>
                  <div className="flex flex-row gap-x-2">
                    <span className="material-symbols-outlined">
                      person_pin
                    </span>
                    <p>Belajar di mana saja</p>
                  </div>
                </div>

                {/* divider */}
                <div className="divider pr-[15%]"></div>

                {/* Contact Whatsapp */}
                <div className="flex flex-row justify-start items-center gap-x-4">
                  <div className="flex flex-row gap-x-3">
                    <img
                      src="/profile_contact.png"
                      alt=""
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex flex-col">
                      <h1 className="text-[15px] font-lexend font-bold text-yl-60">
                        Customer Service
                      </h1>
                      <h1 className="font-lexend text-gray-500 text-[12px]">
                        Yessles Head Office
                      </h1>
                    </div>
                  </div>
                  <Link
                    to={`https://api.whatsapp.com/send?phone=628994944728&text=Halo%20Kak!%20Mohon%20info%20cara%20bergabung%20di%20Yessles?`}
                    data-action="share/whatsapp/share"
                    target="_blank"
                  >
                    <div className="flex flex-row gap-x-2 bg-yl-60 ml-2 rounded-2xl justify-center items-center px-4 py-2 text-white hover:bg-yl-10 hover:scale-105 transition-all">
                      <img
                        src="/whatsapp-icon.svg"
                        alt=""
                        className="w-5 h-5"
                      />
                      <p>Daftar</p>
                    </div>
                  </Link>
                  <Link
                    to={`https://drive.google.com/drive/folders/1MmdXrQ4MedPhI1SvNPppSa566knWbemc?usp=sharing`}
                    target="_blank"
                  >
                    <div className="flex flex-row gap-x-2 -ml-2 bg-yl-60 rounded-2xl justify-center items-center px-4 py-2 text-white hover:bg-yl-30 hover:scale-105 transition-all">
                      <CgNotes className="size-5" />
                      <p>Test Gaya Belajar</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Component Right */}
            <div className="flex flex-col w-full h-full justify-center items-center relative group">
              <img
                src="/image_4_home.png"
                alt=""
                className="w-full h-full grayscale group-hover:grayscale-0 transition-all"
              />
              <button
                onClick={() => setOpen(true)}
                className="absolute w-full h-full justify-center items-center flex text-white/50 group-hover:scale-105 transition-all group-hover:text-white"
              >
                <span
                  className="material-symbols-outlined shadow-2xl"
                  style={{ fontSize: 80 }}
                >
                  play_circle
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* Modal Popup Video */}
        <Modal open={open} onClose={() => setOpen(false)} bgcolor="bg-white">
          <iframe
            className="w-[960px] h-[480px]"
            src="https://www.youtube.com/embed/CDZrI7cQZiE?si=9_KqKhiQhjoAPyRs"
            rel="0"
            allowFullScreen
          ></iframe>
        </Modal>
      </section>

      {/* Testimoni Yessles */}
      <section id="testimoni" data-aos="fade-up">
        <div className="flex w-[100dvw] h-fit items-center px-[8%] flex-col">
          <div className="flex flex-col justify-center items-center w-full h-fit">
            <div className="bg-yl-30 w-[5%] h-[1px] rounded-[20px] mb-2"></div>
            <h1 className="text-[18px] text-yl-30">Testimoni</h1>
            <h1 className="text-[30px] font-bold text-yl-60 font-lexend">
              Yessles Kata Mereka
            </h1>
          </div>
        </div>

        <div id="overflow" className="flex items-center w-screen h-[600px]">
          <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            speed={1200}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            initialSlide={1}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {dataTestimoni?.map((data, index) => (
              <SwiperSlide key={index}>
                <CardTestimoni testimoni={data} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Article Yessles */}
      <section id="article" data-aos="fade-up">
        <div className="flex w-[100dvw] h-fit items-center px-[8%] flex-col pb-[6%] ">
          {/* Title Section */}
          <div className="flex flex-col justify-center items-center w-full h-fit pb-[2%]">
            <div className="bg-yl-30 w-[5%] h-[1px] rounded-[20px]"></div>
            <h1 className="text-[18px] text-yl-30">Yessles Blog</h1>
            <h1 className="text-[30px] font-bold text-yl-60 font-lexend mb-4">
              Cerita Yessles
            </h1>
            <div className="flex flex-row font-lexend text-[14px] px-4 py-2 bg-yl-10 text-white rounded-xl mb-4">
              Jelajahi Artikel
            </div>
          </div>

          {/* Article Section */}
          <div className="grid grid-cols-2 w-full h-fit py-10">
            {/* Left Section */}
            <div className="h-[525px] flex flex-col w-full justify-between ">
              {dataArtikel?.slice(1, 4).map((data, index) => (
                <CardArticle key={index} data={data} />
              ))}
            </div>

            {/* Right Section */}
            <div className="h-full flex justify-start flex-col gap-y-4">
              <img
                src="https://ik.imagekit.io/9nm0rr5hka/Yessles/thumbnail_4.png?updatedAt=1709279422996"
                alt=""
                className="w-full h-[284px] object-cover rounded-2xl"
              />
              <div className="flex flex-row items-center gap-x-2">
                <img
                  src="https://ik.imagekit.io/9nm0rr5hka/Yessles/profile_4.png?updatedAt=1709279130623"
                  alt=""
                  className="w-8 h-8 rounded-full object-cover"
                />
                <p className="font-lexend text-[16px] text-yl-60">
                  Dian Pratiwi
                </p>
              </div>
              <h1 className="font-lexend font-medium text-yl-60 text-[24px] w-[80%]">
                Mengasah Potensi Anak Melalui Pendidikan Inklusif: Peran Orang
                Tua
              </h1>
              <p className="text-yl-40 text-[14px]">
                Dari pengawasan penggunaan gadget hingga memilih aplikasi
                pendidikan yang sesuai, orang tua memiliki peran penting dalam
                mengarahkan anak-anak mereka menuju pemanfaatan teknologi yang
                bermanfaat.
              </p>
              <div className="flex flex-row text-yl-40 items-center gap-x-1">
                <span className="material-icons" style={{ fontSize: 18 }}>
                  schedule
                </span>
                <p className="text-[13px] font-lexend">2024-02-03</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nodemailer Subscription */}
      <section id="subscription" className="hidden">
        <div
          className="flex w-[100dvw] h-[350px] items-center px-[8%] flex-col pb-[6%] justify-center"
          data-aos="fade-up"
        >
          {/* Banner Button */}
          <div className="flex flex-col w-full items-center justify-center h-full rounded-[25px] gap-y-6 overflow-hidden relative">
            <img
              src="/subscribe_banner.svg"
              alt=""
              className="absolute -z-10 w-full object-cover"
            />
            <h1 className="font-lexend font-bold text-[28px] w-[30%] text-center leading-9 text-yl-60">
              Ketahui Lebih Jauh Program Yessles
            </h1>
            {/* Input Email */}
            <div className="flex flex-row bg-white w-fit h-fit px-1 pl-5 justify-center items-center gap-x-2 rounded-[17px] py-1 text-yl-60 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <span className="material-symbols-outlined">mail</span>
              <input
                placeholder="Ketik email kamu di sini ..."
                type="text"
                className="w-[250px] focus:outline-none px-4 font-lexend placeholder:text-yl-40/50"
              />
              <button className="bg-yl-10 text-white px-4 py-2 rounded-[13px]">
                Kirimkan Email
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section id="footer">
        <div className="flex w-screen h-[235px] px-[6%] text-gray-500 bottom-0">
          <div className="border-t-[1px] w-full h-full flex flex-row items-start pb-[4%] pt-[2%] gap-x-3 border-yl-40/30 border-dashed">
            {/* Coloumn 1 */}
            <div className="flex flex-col col-span-2 gap-y-6 w-[50%] h-fit">
              <img src="/yessles_logo.svg" alt="" className="w-[148px]" />
              <h1 className="text-gray-500 font-light -mt-2 font-lexend text-[12px] w-48">
                Yessles Bimbingan Belajar Privat No.1 di Madiun.
              </h1>
              <div className="flex flex-row gap-x-2 w-fit items-center justify-center">
                <button
                  onClick={() =>
                    window.open("https://www.hacktiv8.com/", "_blank")
                  }
                >
                  <img
                    src="/social_media/ig_icon.svg"
                    alt=""
                    className="w-7 h-7 -mt-2 grayscale hover:grayscale-0 transition-all"
                  />
                </button>
                <button
                  onClick={() =>
                    window.open("https://github.com/EcoBucks", "_blank")
                  }
                >
                  <img
                    src="/social_media/fb_icon.svg"
                    alt=""
                    className="w-7 h-7 -mt-2 grayscale hover:grayscale-0 transition-all"
                  />
                </button>
                <button
                  onClick={() =>
                    window.open("https://github.com/EcoBucks", "_blank")
                  }
                >
                  <img
                    src="/social_media/tik_icon.svg"
                    alt=""
                    className="w-7 h-7 -mt-2 grayscale hover:grayscale-0 transition-all"
                  />
                </button>
                <button
                  onClick={() =>
                    window.open("https://github.com/EcoBucks", "_blank")
                  }
                >
                  <img
                    src="/social_media/wa_icon.svg"
                    alt=""
                    className="w-7 h-7 -mt-2 grayscale hover:grayscale-0 transition-all"
                  />
                </button>
                <button
                  onClick={() =>
                    window.open("https://github.com/EcoBucks", "_blank")
                  }
                >
                  <img
                    src="/social_media/yb_icon.svg"
                    alt=""
                    className="w-7 h-7 -mt-2 grayscale hover:grayscale-0 transition-all"
                  />
                </button>
              </div>
            </div>

            {/* Hyperlink Footer */}
            <div className="flex flex-row w-[64%] text-gray-500 h-fit">
              <div className="flex flex-col gap-y-5 w-[80%] h-fit justify-start">
                <div className="flex flex-col text-[11px] gap-y-1">
                  <h1 className="font-bold text-[13px] underline">
                    Program Belajar
                  </h1>
                  <h1>Program Belajar</h1>
                  <h1>Sistem Belajar</h1>
                  <h1>Paket Belajar</h1>
                </div>
              </div>

              <div className="flex flex-col gap-y-5 w-[70%] h-fit justify-start">
                <div className="flex flex-col text-[11px] gap-y-1">
                  <h1 className="font-bold text-[13px] underline">Article</h1>
                  <h1>New Article</h1>
                  <h1>Popular Article</h1>
                  <h1>Most Read</h1>
                  <h1>Tips & Tricks</h1>
                </div>
              </div>

              <div className="flex flex-col gap-y-2 w-[70%] h-fit text-[11px]">
                <h1 className="font-bold text-[13px] underline">Contact</h1>
                <div className="flex flex-col gap-y-1">
                  <h1>
                    Jl. Bali No.1C, Madiun Lor, Kec. Kartoharjo, Kota Madiun,
                    Jawa Timur 63122
                  </h1>
                  <h1>(+62) 899 4944 728</h1>
                  <h1>haloyessles@gmail.com</h1>
                </div>
              </div>
            </div>

            <div className="flex flex-col col-span-2 gap-y-2 w-[60%] h-fit ml-[5%] ">
              <h1 className=" font-bold text-[14px] text-eb-10">
                Jadi Bagian dari +200 Students Kami
              </h1>
              <h1 className="text-gray-500 font-light -mt-2 text-[13px] font-lexend">
                Ketahui Lebih Jauh Program Yessles
              </h1>
              <form className="flex flex-row gap-x-2 w-[100%] py-2 items-center justify-center">
                <input
                  type="text"
                  name="email"
                  placeholder="Ketik Email Kamu ..."
                  autoComplete="off"
                  className="w-full bg-gray-300 rounded-md px-4 text-gray-900 text-[14px] font-bold font-lexend py-3 placeholder-yl-40/60"
                />
                <button
                  type="submit"
                  className="w-[40%] h-full py-3 bg-yl-10 justify-center items-center flex flex-row rounded-lg text-white gap-x-1 px-2 hover:bg-yl-30 transition-all"
                >
                  <span className="material-symbols-outlined">mail</span>
                  <p>send</p>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
