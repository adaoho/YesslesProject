"use client";

import CardProgramYessles from "@/components/HomePage/CardProgramYessles";
import CardTestimoni from "@/components/HomePage/CardTestimoni";
import Modal from "@/components/Modal";
import { DataProgramBelajar, ResponseData } from "@/defs/Type";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CardArticle from "@/components/HomePage/CardArticle";
import Image from "next/image";

export default function Home() {
  const currentRoute = usePathname();
  const searchParams = useSearchParams();
  const getType = searchParams.get("type");
  const linkStyle = `hover:bg-yl-10/20 hover:text-yl-10 text-yl-70 border-yl-70 border-[1px] hover:border-yl-10/10 transition-all flex justify-center items-center rounded-[20px] px-[15px] py-[8px] flex-row gap-x-1 `;
  const activeStyle = `bg-yl-10/20 text-yl-10 text-yl-10 border-yl-10/20 border-[1px] border-yl-10/10 transition-all flex justify-center items-center rounded-[20px] px-[15px] py-[8px] flex-row gap-x-1 `;
  const [dataProgBel, setDataProgBel] = useState<DataProgramBelajar[]>();
  const [link, setLink] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchProgramBelajar = async () => {
      let response;
      if (!getType) {
        response = await fetch(`http://localhost:3001/program_yessles`, {
          cache: "no-store",
        });
      } else {
        response = await fetch(
          `http://localhost:3001/program_yessles?type_like=${getType}`,
          {
            cache: "no-store",
          }
        );
      }

      const responseJson: DataProgramBelajar[] = await response?.json();
      setDataProgBel(responseJson);
    };

    fetchProgramBelajar();
  }, [searchParams]);

  // console.log(dataProgBel);
  // console.log(searchParams.get("type"));
  // console.log(currentRoute);

  return (
    <>
      {/* Hero Section */}
      <section id="hero">
        <div className="grid grid-cols-2 w-full mb-4">
          {/* Part Title */}
          <div className="flex w-[50dvw] h-[720px] items-center">
            <div className="flex flex-col w-[510px] pl-[120px] gap-y-4 relative">
              <h1 className="text-[40px] font-lexend font-bold leading-[45px] text-yl-20">
                Bimbel Privat Nomor 1 Di Madiun
              </h1>
              <p className="font-lexend text-[13px] text-yl-40 font-light leading-[23px]">
                Yessles Bimbingan belajar privat berbasi psikologi dan motivasi
                menggunakan metode “Student Centered Learning” dimana pusat
                pembalajaran kami adalah siswa.
              </p>

              {/* Search Bar */}
              <form className="flex mt-4 justify-between outline outline-gray-300 outline-1 rounded-3xl h-[44px] items-center">
                <span className="material-symbols-outlined pl-4 text-yl-30">
                  school
                </span>
                <input
                  type="text"
                  placeholder="Ketik tingkat pendidikan kamu .."
                  className="pl-4 w-full text-sm focus:outline-none text-gray-500 pr-2"
                />
                <button className="h-full w-[150px] bg-yl-10 rounded-3xl text-white flex flex-row items-center justify-center">
                  Cari
                  <span className="material-symbols-outlined">
                    keyboard_arrow_right
                  </span>
                </button>
              </form>

              {/* Lulusan Kami */}
              <div className="flex flex-col mt-8">
                <p className="font-lexend text-yl-40 text-[13px] font-light mb-1">
                  Lulusan Kami
                </p>
                <div className="flex flex-row w-full justify-between">
                  <img src="/ui_logo.png" className="h-[60px] object-cover" />
                  <img src="/pnm_logo.png" className="h-[60px] object-cover" />
                  <img src="/ugm_logo.png" className="h-[60px] object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* Fixed Background Image */}
          <div className="flex flex-col relative w-[50dvw] h-[720px] items-center justify-center">
            <img
              src="/home_image.png"
              className="w-full h-full absolute -z-10 object-cover rounded-bl-[60px]"
            />

            <div className="absolute bottom-20 right-0 px-4 w-[700px] max-h-24 flex-row flex overflow-x-auto overflow-hidden gap-x-3">
              {/* card home */}
              <div className="flex">
                <div className="flex flex-row items-center h-[80px] w-[282px] rounded-3xl bg-white p-6 gap-x-4">
                  <img
                    src="https://source.unsplash.com/random/900x700/?person-1"
                    className="h-[56px] w-[56px] object-cover rounded-3xl"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-[16px] font-lexend text-yl-20">
                      200+ Active Student
                    </h1>
                    <h1 className="text-[10px] font-lexend text-yl-40">
                      Active Student & Alumni
                    </h1>
                  </div>
                </div>
              </div>
              {/* card home */}
              <div className="flex">
                <div className="flex flex-row items-center h-[80px] w-[262px] rounded-3xl bg-white p-6 gap-x-4">
                  <img
                    src="https://source.unsplash.com/random/900x700/?person-2"
                    className="h-[56px] w-[56px] object-cover rounded-3xl"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-[16px] font-lexend text-yl-20">
                      100+ Yess Tutor
                    </h1>
                    <h1 className="text-[10px] font-lexend text-yl-40">
                      Best partner for Student
                    </h1>
                  </div>
                </div>
              </div>
              {/* card home */}
              <div className="flex">
                <div className="flex flex-row items-center h-[80px] w-[262px] rounded-3xl bg-white p-6 gap-x-4">
                  <img
                    src="https://source.unsplash.com/random/900x700/?person-3"
                    className="h-[56px] w-[56px] object-cover rounded-3xl"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-[16px] font-lexend text-yl-20">
                      100+ Yess Tutor
                    </h1>
                    <h1 className="text-[10px] font-lexend text-yl-40">
                      Best partner for Student
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Yessles */}
      <section id="programs">
        <div className="flex w-[100dvw] h-[700px] items-center pt-[8%]">
          <div className="flex w-full flex-col">
            {/* Header Section Program */}
            <div className="flex flex-row bg-blue-gray-200 h-full w-full justify-between items-center px-[8%]">
              <div className="flex flex-col relative ">
                <div className="bg-yl-30 w-[25px] h-[1px] rounded-[20px] mb-2 absolute -left-8 top-2"></div>
                <h1 className="text-[12px] text-yl-30">Program Yessles</h1>
                <h1 className="text-[30px] font-bold text-yl-20 font-lexend">
                  Belajar di Yessles
                </h1>
              </div>

              {/* Button Type */}
              <div className="flex flex-row gap-x-4">
                <Link href={"/#programs"}>
                  <div
                    className={
                      !searchParams.get("type") ? activeStyle : linkStyle
                    }
                  >
                    <span className="material-symbols-outlined">apps</span>
                    Semua
                  </div>
                </Link>
                <Link href={"/?type=program_belajar#programs"}>
                  <div
                    className={
                      searchParams.get("type") === "program_belajar"
                        ? activeStyle
                        : linkStyle
                    }
                  >
                    <span className="material-symbols-outlined">school</span>
                    Program Belajar
                  </div>
                </Link>
                <Link href={"/?type=paket_belajar#programs"}>
                  <div
                    className={
                      searchParams.get("type") === "paket_belajar"
                        ? activeStyle
                        : linkStyle
                    }
                  >
                    <span className="material-symbols-outlined">package</span>
                    Paket Belajar
                  </div>
                </Link>
              </div>
            </div>

            {/* Caraousel */}
            <div className="flex flex-row pl-[8%] w-screen mt-2 overflow-x-auto gap-x-8 ">
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
        <div className="flex w-[100dvw] h-fit items-center px-[8%] py-[8%]">
          <div className="grid grid-cols-2 w-full h-full">
            {/* Component Left */}
            <div className="flex flex-col h-full w-full justify-center items-start ">
              {/* Title */}
              <div className="flex flex-col relative">
                <div className="bg-yl-30 w-[25px] h-[1px] rounded-[20px] mb-2 absolute -left-8 top-2"></div>
                <h1 className="text-[12px] text-yl-30">Tentang Yessles</h1>
                <h1 className="text-[30px] font-bold text-yl-20 font-lexend">
                  Kenapa Harus Belajar di Yessles?
                </h1>
              </div>
              <p className="text-[15px] text-yl-90 leading-6 font-lexend pr-[8%] mt-3">
                Bagi Yessles belajar itu bukan hanya tentang mengerjakan tugas
                atau ujian. Ini tentang memahami konsep, mengeksplorasi minat si
                Buah Hati, Agar Buah Hati dapat tumbuh menjadi individu yang
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
                    <p>1 Tutor Untuk 1 Siswa</p>
                  </div>
                  <div className="flex flex-row gap-x-2">
                    <span className="material-symbols-outlined">
                      pending_actions
                    </span>
                    <p>90 Menit/Pertemuan</p>
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="flex flex-row gap-x-2">
                    <span className="material-symbols-outlined">menu_book</span>
                    <p>Semua Mata Pelajaran</p>
                  </div>
                  <div className="flex flex-row gap-x-2">
                    <span className="material-symbols-outlined">
                      contact_mail
                    </span>
                    <p>Online & Offline</p>
                  </div>
                </div>

                {/* divider */}
                <div className="divider pr-[15%]"></div>

                {/* Contact Whatsapp */}
                <div className="flex flex-row justify-start items-center gap-x-8 pr-[15%]">
                  <div className="flex flex-row gap-x-3">
                    <img
                      src="https://source.unsplash.com/random/900x700/?student+2"
                      alt=""
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex flex-col">
                      <h1 className="text-[17px] font-lexend font-bold text-yl-20">
                        Kak Emi
                      </h1>
                      <h1 className="font-lexend text-gray-500 text-[14px]">
                        Yessles Head Office
                      </h1>
                    </div>
                  </div>
                  <Link
                    href={`https://api.whatsapp.com/send?phone=62895339096458&text=Halo%20Kak%20Emi!%20Saya%20tertarik%20untuk%20bergabung%20dengan%20Yessles!`}
                    data-action="share/whatsapp/share"
                    target="_blank"
                  >
                    <div className="flex flex-row gap-x-2 ml-4 bg-yl-60 rounded-2xl justify-center items-center px-4 py-2 text-white hover:bg-yl-10 hover:scale-105 transition-all">
                      <img
                        src="/whatsapp-icon.svg"
                        alt=""
                        className="w-5 h-5"
                      />
                      <p>Contact Now</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Component Right */}
            <div className="flex flex-col w-full h-full justify-center items-center relative group">
              <img
                src="/video_background.png"
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

            {/* Modal Popup Video */}
            <Modal
              open={open}
              onClose={() => setOpen(false)}
              bgcolor="bg-white"
            >
              <iframe
                className="w-[960px] h-[480px]"
                src="https://www.youtube.com/embed/hA6hldpSTF8?si=JkBTyIGnKdcAnOQS"
                rel="0"
                allowFullScreen
              ></iframe>
            </Modal>
          </div>
        </div>
      </section>

      {/* Testimoni Yessles */}
      <section id="testimoni">
        <div className="flex w-[100dvw] h-fit items-center px-[8%] flex-col">
          <div className="flex flex-col justify-center items-center w-full h-fit">
            <div className="bg-yl-30 w-[5%] h-[1px] rounded-[20px] mb-2"></div>
            <h1 className="text-[12px] text-yl-30">Yessles Kata Mereka</h1>
            <h1 className="text-[30px] font-bold text-yl-20 font-lexend">
              Dari Yess Student & Yess Parent
            </h1>
          </div>
        </div>

        <div
          id="overflow"
          className="flex flex-row w-full mt-10 h-[510px] items-start justify-start overflow-x-auto scroll-m-6 px-[4%] py-2 mb-[5%]"
        >
          <div className="gap-x-8 flex flex-row">
            <CardTestimoni />
            <CardTestimoni />
            <CardTestimoni />
          </div>
        </div>
      </section>

      {/* Article Yessles */}
      <section id="article">
        <div className="flex w-[100dvw] h-fit items-center px-[8%] flex-col pb-[6%]">
          {/* Title Section */}
          <div className="flex flex-col justify-center items-center w-full h-fit pb-[2%]">
            <div className="bg-yl-30 w-[5%] h-[1px] rounded-[20px] mb-2"></div>
            <h1 className="text-[12px] text-yl-30">Yessles Blog</h1>
            <h1 className="text-[30px] font-bold text-yl-20 font-lexend mb-4">
              Cerita Terbaru dari Yessles
            </h1>
            <div className="flex flex-row font-lexend text-[14px] px-4 py-2 bg-yl-10 text-white rounded-xl mb-4">
              Find All Article
            </div>
          </div>

          {/* Article Section */}
          <div className="grid grid-cols-2 w-full h-fit py-10">
            {/* Left Section */}
            <div className="h-full flex flex-col w-full gap-y-10 justify-between">
              <CardArticle />
              <CardArticle />
              <CardArticle />
            </div>

            {/* Right Section */}
            <div className="h-full flex justify-start flex-col gap-y-4">
              <img
                src="https://source.unsplash.com/random/900x700/?education+2"
                alt=""
                className="w-full h-[284px] object-cover rounded-2xl"
              />
              <div className="flex flex-row items-center gap-x-2">
                <img
                  src="https://source.unsplash.com/random/900x700/?person"
                  alt=""
                  className="w-8 h-8 rounded-full object-cover"
                />
                <p className="font-lexend text-[16px] text-yl-20">
                  Cameron Williamson
                </p>
              </div>
              <h1 className="font-lexend font-medium text-yl-20 text-[24px] w-[80%]">
                Pembelajaran Privat Online: Inovasi Baru dalam Edukasi
              </h1>
              <p className="text-yl-40 text-[14px]">
                Perubahan paradigma pendidikan: Bagaimana pembelajaran privat
                online memimpin inovasvi baru dalam mendukung proses edukasi di
                era digital.
              </p>
              <div className="flex flex-row text-yl-40 items-center gap-x-1">
                <span className="material-icons" style={{ fontSize: 18 }}>
                  schedule
                </span>
                <p className="text-[13px] font-lexend">25 Apr 2021</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nodemailer Subscription */}
      <section id="subscription">
        <div className="flex w-[100dvw] h-[350px] items-center px-[8%] flex-col pb-[6%] justify-center">
          {/* Banner Button */}
          <div className="flex flex-col w-full items-center justify-center h-full rounded-[25px] gap-y-6 overflow-hidden relative">
            <img
              src="/subscribe_banner.svg"
              alt=""
              className="absolute -z-10 w-full object-cover"
            />
            <h1 className="font-lexend font-bold text-[28px] w-[30%] text-center leading-9 text-yl-20">
              Ketahui Lebih Jauh Program Yessles
            </h1>
            {/* Input Email */}
            <div className="flex flex-row bg-white w-fit h-fit px-1 pl-5 justify-center items-center gap-x-2 rounded-[17px] py-1 text-yl-20 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
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
          <div className="border-t-[1px] w-full h-full flex flex-row items-start pb-[4%] pt-[2%] gap-x-3 border-yl-40/30">
            {/* Coloumn 1 */}
            <div className="flex flex-col col-span-2 gap-y-6 w-[50%] h-fit">
              <img src="/yessles_logo.svg" alt="" className="w-[148px]" />
              <h1 className="text-gray-500 font-light -mt-2 font-lexend text-[12px] w-48">
                Yessles Bimbingan belajar privat berbasi psikologi.
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
                  <h1>2464 Royal Ln. Mesa, New Jersey 45463</h1>
                  <h1>(671) 555-0110</h1>
                  <h1>yessles@gmail.com</h1>
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
}
