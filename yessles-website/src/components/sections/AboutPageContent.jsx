import { BsPersonHeart } from "react-icons/bs";
import { IoMdSchool } from "react-icons/io";
import { MdPsychology } from "react-icons/md";
import { BiPlayCircle } from "react-icons/bi";
import { useState } from "react";
import { FadeIn } from "../ui/FadeIn";
import Footer from "../Footer";
import CardAboutAspect from "../CardAboutAspect";
import Modal from "../Modal";

const dataAspects = [
  {
    title: "Psikologi",
    description:
      "Membaca suasana hati dan motivasi belajar siswa, lalu menyesuaikan pendekatan agar setiap sesi terasa nyaman dan bermakna.",
    picture: "/program_yessles/pic_14.jpeg",
    icon: <MdPsychology className="size-7 text-white" />,
  },
  {
    title: "Gaya Belajar",
    description:
      "Mengenali cara setiap siswa menyerap materi—visual, auditori, atau kinestetik—untuk pembelajaran yang jauh lebih efektif.",
    picture: "/program_yessles/pic_15.jpeg",
    icon: <IoMdSchool className="size-7 text-white" />,
  },
  {
    title: "Kepribadian",
    description:
      "Memahami tipe kepribadian siswa agar tutor dapat membimbing secara personal dan tepat sesuai karakter masing-masing.",
    picture: "/program_yessles/pic_16.jpeg",
    icon: <BsPersonHeart className="size-7 py-1 px-1 text-white" />,
  },
];

const AboutPageContent = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="absolute flex top-[9.5%] -z-20 pointer-events-none select-none">
        <img src="/bg_color_blur.png" alt="" />
      </div>

      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section id="hero">
        <FadeIn direction="up">
          <div className="w-screen px-[5%] md:px-[8%] pt-[26%] sm:pt-[16%] md:pt-[7.5%] pb-[2%] flex flex-col items-center text-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-x-2.5 mb-3 md:mb-4">
              <div className="bg-yl-30 w-[18px] md:w-[22px] h-[2px] rounded" />
              <span className="text-[12px] md:text-[15px] text-yl-30 font-lexend tracking-wide">Tentang Yessles</span>
              <div className="bg-yl-30 w-[18px] md:w-[22px] h-[2px] rounded" />
            </div>

            <h1 className="text-[29px] md:text-[50px] font-bold font-lexend text-yl-20 leading-[1.1] tracking-tight max-w-[860px]">
              Yessles Berbasis Psikologi dan Motivasi
            </h1>

            <p className="text-[13px] md:text-[16px] text-gray-500 font-lexend font-light mt-4 leading-relaxed max-w-[650px]">
              Yessles merupakan bimbingan belajar privat yang menerapkan metode{" "}
              <span className="text-yl-60 font-semibold italic">Student Centered Learning</span>, dimana{" "}
              <b className="text-yl-20 font-semibold">siswa menjadi pusat pembelajaran</b> melalui observasi pada 3 aspek
              utama.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ═══════════════════════ 3 ASPEK ═══════════════════════ */}
      <section id="aspects">
        <FadeIn direction="up">
          <div className="w-screen px-[5%] md:px-[8%] pt-2 md:pt-4 pb-[7%] md:pb-[4%]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {dataAspects.map((data, index) => (
                <CardAboutAspect key={index} data={data} index={index} />
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ═══════════════════════ VIDEO CTA ═══════════════════════ */}
      <section id="video">
        <FadeIn direction="up">
          <div className="w-screen px-[5%] md:px-[8%] pb-[9%] md:pb-[2%] border-b-[1px] border-gray-200 mb-4">
            <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-yl-60 via-[#3a8a6f] to-yl-10 ring-1 ring-white/10 shadow-[0_24px_60px_rgba(16,185,129,0.25)]">
              {/* Soft sheen for depth */}
              <div className="absolute inset-0 bg-gradient-to-tr from-yl-60/40 via-transparent to-yl-10/30 pointer-events-none" />
              {/* Decorative brand glows */}
              <div className="absolute -top-20 -right-16 w-72 h-72 rounded-full bg-yl-10/40 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-16 w-80 h-80 rounded-full bg-yl-60/50 blur-3xl pointer-events-none" />
              {/* Bubble dot texture — subtle, fills empty space (distinct from footer banner) */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.10) 1.5px, transparent 2px)",
                  backgroundSize: "28px 38px, 20px 20px",
                  backgroundPosition: "0 0, 10px 10px",
                }}
              />

              <div className="relative flex flex-col md:flex-row items-center justify-between gap-y-7 gap-x-10 px-[7%] md:px-[6%] py-10 md:py-14">
                <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-[580px]">
                  <span className="text-yl-50 text-[12px] md:text-[14px] font-lexend tracking-wide mb-2">
                    Video Profil Yessles
                  </span>
                  <h2 className="text-white font-lexend font-bold text-[23px] md:text-[34px] leading-[1.2]">
                    Kenali Lebih Dekat Cara Belajar di Yessles
                  </h2>
                  <p className="text-white/70 font-lexend font-light text-[13px] md:text-[15px] mt-3 leading-relaxed">
                    Tonton bagaimana pendekatan psikologi dan motivasi kami membantu setiap siswa belajar dengan cara yang
                    paling efektif untuk mereka.
                  </p>
                </div>

                <button
                  onClick={() => setOpen(true)}
                  className="group flex items-center gap-x-3 bg-white text-yl-60 font-lexend font-medium text-[14px] md:text-[15px] pl-2.5 pr-6 py-2.5 rounded-full hover:bg-yl-10 hover:text-white transition-all shadow-lg flex-shrink-0"
                >
                  <span className="w-11 h-11 rounded-full bg-yl-10 text-white group-hover:bg-white group-hover:text-yl-10 flex items-center justify-center transition-all">
                    <BiPlayCircle className="size-7" />
                  </span>
                  Putar Video
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <Modal open={open} onClose={() => setOpen(false)} bgcolor="bg-white">
        <iframe
          className="w-[86vw] max-w-[1120px] aspect-video rounded-lg"
          src="https://www.youtube.com/embed/nhZE4T7DCTI?si=g8MPC_ZjbF3cg65m"
          allowFullScreen
        />
      </Modal>

      <Footer />
    </>
  );
};

export default AboutPageContent;
