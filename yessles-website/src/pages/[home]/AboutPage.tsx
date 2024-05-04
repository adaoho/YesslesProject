import { BsPersonHeart } from "react-icons/bs";
import { IoMdSchool } from "react-icons/io";
import { MdPsychology } from "react-icons/md";
import { BiPlayCircle } from "react-icons/bi";
import Aos from "aos";
import { Fragment, useEffect, useState } from "react";
import "aos/dist/aos.css";
import Footer from "./components/Footer";
import CardAboutAspect from "./components/CardAboutAspect";
import Modal from "../../components/Modal";

const dataAspects = [
  {
    title: "Psikologi",
    description: `Memahami mood (suasana hati) dan motivasi siswa saat belajar.`,
    picture: "https://source.unsplash.com/random/900x700/?school",
    icon: <MdPsychology className="size-7 text-white" />,
  },
  {
    title: "Gaya Belajar",
    description: "Menyesuaikan pembelajaran sesuai dengan gaya belajar.",
    picture: "https://source.unsplash.com/random/900x700/?school+2",
    icon: <IoMdSchool className="size-7 text-white" />,
  },
  {
    title: "Kepribadian",
    description: `Memahami tipe kepribadian siswa untuk \r\n dapat memberikan pembelajaran yang sesuai.`,
    picture: "https://source.unsplash.com/random/900x700/?school+3",
    icon: <BsPersonHeart className="size-7 py-1 px-1 text-white" />,
  },
];

const AboutPage = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    Aos.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>
      <div className="absolute flex top-[9.5%] -z-20">
        <img src="/bg_color_blur.png" alt="" />
      </div>
      <section id="hero" data-aos="fade-up">
        <div className="flex flex-col w-screen h-full px-[8%] pt-[6.5%] pb-[3%] ">
          {/* Hero Title */}
          <div className="flex flex-col justify-center w-full h-[200px] items-center text-[#383838] font-lexend">
            <h1 className="text-[42px] font-bold">
              Yessles Berbasis Psikologi dan Motivasi
            </h1>
            <h1 className="text-[16px] text-center text-gray-500 font-light mt-2">
              Yessles merupakan bimbingan belajar privat yang menerapkan metode
              belajar "Student Centered Learning",
              <br /> dimana{" "}
              <b className="font-bold">siswa menjadi pusat pembalajaran</b>,
              melalui observasi pada 3 aspek:
            </h1>
          </div>
          {/* Card Section */}
          <div className="flex w-full flex-row gap-x-6 h-full">
            {dataAspects.map((data, index) => (
              <Fragment key={index}>
                <CardAboutAspect data={data} />
              </Fragment>
            ))}
          </div>

          {/* Pelajari Lebih Lanjut */}
          <div className="flex flex-col justify-center w-full h-full py-8 items-center text-[#383838] font-lexend ">
            <div
              onClick={() => setOpen(true)}
              className="flex flex-row font-lexend text-[14px] px-4 py-2 bg-yl-60 hover:bg-yl-10 transition-all text-white rounded-xl items-center justify-center gap-x-2"
            >
              <BiPlayCircle className="size-4" />
              Pelajari Lebih Lanjut
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <Modal open={open} onClose={() => setOpen(false)} bgcolor="bg-white">
        <iframe
          className="w-[1060px] h-[590px]"
          src="https://www.youtube.com/embed/nhZE4T7DCTI?si=g8MPC_ZjbF3cg65m"
          rel="0"
          allowFullScreen
        ></iframe>
      </Modal>

      <Footer />
    </>
  );
};

export default AboutPage;
