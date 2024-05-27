import { CgNotes } from "react-icons/cg";
import { AiOutlineDown } from "react-icons/ai";
import { BiUserPin } from "react-icons/bi";
import { RiUserSmileFill } from "react-icons/ri";
import { FiUserCheck } from "react-icons/fi";
import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { testimoni } from "@/database/testimoni.json";
import { articles } from "@/database/articles.json";
import CardArticle from "./components/CardArticle";
import CardTestimoni from "./components/CardTestimoni";
import Modal from "../../components/Modal";
import Aos from "aos";
import Footer from "./components/Footer";
import Subscription from "./components/Subscription";
import "swiper/css";
import "swiper/css/pagination";
import "./utils/swiper.css";
import "aos/dist/aos.css";
import CarouselProgramBelajar from "./components/CarouselProgramBelajar";
import { formatDateString } from "../../utils/static";
import SeoComp from "@/components/SeoComp";

const HomePage = () => {
  const [open, setOpen] = useState(false);
  let ref = useRef<null | HTMLDivElement>(null);

  const handleScroll = () => {
    const element = ref.current;
    if (element) {
      const offsetTop = 30; // Set your desired offset here
      const elementTop = element.offsetTop - offsetTop;
      window.scrollTo({
        top: elementTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    Aos.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <SeoComp
        title="Yessles: Bimbel No.1 di Madiun"
        description={`Bimbingan belajar privat yang menerapkan metode belajar "Student Centered Learning"`}
      />

      {/* Hero Section */}
      <section id="hero">
        {/* Background Blur */}
        <div className="absolute flex top-0">
          <img src="/bg_color_blur.png" alt="" />
        </div>
        <div className="flex flex-row w-screen mb-4 relative">
          {/* Part Title */}
          <div
            className="flex w-[50%] h-[720px] items-center "
            data-aos="fade-right"
          >
            <div className="flex flex-col w-[560px] pl-[15%] gap-y-4 relative h-[450px]">
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

              <Link to={`https://bit.ly/tesgayabelajaryessles`} target="_blank">
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
            className="flex flex-col w-[38%] xl:w-[48%] 2xl:w-[50%] h-[720px] items-center justify-center absolute -right-3 xl:right-0"
            data-aos="fade-left"
          >
            <img
              src="/background_utama.jpeg"
              className="w-full h-full -z-10 object-cover rounded-bl-[60px] absolute right-0"
            />

            <div className="absolute bottom-20 right-0 px-4 w-[380px] lg:w-[430px] pl-8  xl:w-[625px] 2xl:w-[730px] max-h-24 flex-row flex overflow-x-auto overflow-hidden gap-x-3 ">
              {/* card home */}
              <div className="flex">
                <div className="flex flex-row items-center h-[80px] w-[282px] rounded-3xl bg-white p-6 gap-x-4">
                  <img
                    src="/image_1_home.jpeg"
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
                    src="/image_2_home.jpeg"
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
                    src="/image_3_home.jpeg"
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
      <section id="programs" ref={ref} data-aos="fade-up">
        <CarouselProgramBelajar />
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
                  Kenapa Harus Belajar <br className="xl:hidden" /> di Yessles?
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
                <div className="grid xl:grid-cols-2 gap-y-4 xl:gap-y-2">
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
                <div className="grid xl:grid-cols-2 gap-y-4 xl:gap-y-2">
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
                <div className="flex flex-col xl:flex-row justify-start items-start xl:items-center gap-x-4 gap-y-4 mr-7">
                  <div className="flex flex-row gap-x-3">
                    <img
                      src="/profile_contact.png"
                      alt=""
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex flex-col">
                      <h1 className="text-[15px] font-lexend font-bold text-yl-60 truncate">
                        Customer Service
                      </h1>
                      <h1 className="font-lexend text-gray-500 text-[12px]">
                        Yessles Head Office
                      </h1>
                    </div>
                  </div>

                  <div className="flex flex-row gap-x-4">
                    <Link
                      to={`https://api.whatsapp.com/send?phone=628994944728&text=Halo%20Kak!%20Mohon%20info%20cara%20bergabung%20di%20Yessles?`}
                      data-action="share/whatsapp/share"
                      target="_blank"
                    >
                      <div className="flex flex-row gap-x-2 bg-yl-60  xl:ml-2 rounded-2xl justify-center items-center px-4 py-2 text-white hover:bg-yl-10 hover:scale-105 transition-all">
                        <img
                          src="/whatsapp-icon.svg"
                          alt=""
                          className="w-5 h-5"
                        />
                        <p className="">Daftar</p>
                      </div>
                    </Link>
                    <Link
                      to={`https://bit.ly/tesgayabelajaryessles`}
                      target="_blank"
                    >
                      <div className="flex flex-row gap-x-2 -ml-2 bg-yl-60 rounded-2xl justify-center items-center px-4 py-2 text-white hover:bg-yl-30 hover:scale-105 transition-all">
                        <CgNotes className="size-5 " />
                        <p className="xl:truncate">Test Gaya Belajar</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Component Right */}
            <div className="flex flex-col w-full h-full justify-center items-center relative group">
              <img
                src="/image_4_home.png"
                alt=""
                className="w-full h-full grayscale object-cover group-hover:grayscale-0 transition-all"
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
            className="w-[1060px] h-[590px]"
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
            {testimoni?.map((data, index) => (
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
            <Link to={"/article"}>
              <div className="flex flex-row font-lexend text-[14px] px-4 py-2 bg-yl-60 hover:bg-yl-10 transition-all text-white rounded-xl mb-4">
                Jelajahi Artikel di Yessles
              </div>
            </Link>
          </div>

          {/* Article Section */}
          <div className="grid xl:grid-cols-2 w-full h-fit py-10">
            {/* Left Section */}
            <div className="h-[525px] flex flex-col w-full justify-between ">
              {articles?.slice(1, 4).map((data, index) => (
                <CardArticle key={index} data={data} />
              ))}
            </div>

            {/* Right Section */}
            <Link to={"article/" + articles?.at(0)?.slug}>
              <div className="h-full hidden justify-start flex-col gap-y-4 group xl:flex">
                <div className="w-full h-[284px] overflow-hidden rounded-xl">
                  <img
                    src={articles?.at(0)?.thumbnail}
                    alt=""
                    className="w-full h-[284px] object-cover group-hover:scale-105 transition-all"
                  />
                </div>
                <div className="flex flex-row items-center gap-x-2">
                  <img
                    src={articles?.at(0)?.authorProfile}
                    alt=""
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <p className="font-lexend text-[16px] text-yl-60">
                    {articles?.at(0)?.author}
                  </p>
                </div>
                <h1 className="font-lexend font-medium text-yl-60 text-[24px] w-[80%] truncate-multiline-3">
                  {articles?.at(0)?.title}
                </h1>
                <p className="text-yl-40 text-[14px]">
                  {articles?.at(0)?.description}
                </p>
                <div className="flex flex-row text-yl-40 items-center gap-x-1">
                  <span className="material-icons" style={{ fontSize: 18 }}>
                    schedule
                  </span>
                  <p className="text-[13px] font-lexend">
                    {articles?.at(0)?.publication_date
                      ? formatDateString(articles?.at(0)?.publication_date)
                      : ""}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Subscription className="hidden" />
      <Footer />
    </>
  );
};

export default HomePage;
