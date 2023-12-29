"use client";

import CardProgramYessles from "@/components/HomePage/CardProgramYessles";
import Modal from "@/components/Modal";
import { DataProgramBelajar, ResponseData } from "@/defs/Type";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

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

        <div className="flex flex-row w-screen mt-2 gap-x-8 bg-yellow-400 h-[500px]">
          <div className="overflow-x-auto flex flex-row items-center justify-center gap-x-5 snap-x snap-mandatory">
            <div className="bg-red-500 w-[800px] h-[200px] flex flex-col"></div>
            <div className="bg-red-500 w-[800px] h-[200px] flex flex-col"></div>
            <div className="bg-red-500 w-[800px] h-[200px] flex flex-col"></div>
            <div className="bg-red-500 w-[800px] h-[200px] flex flex-col"></div>
            <div className="bg-red-500 w-[800px] h-[200px] flex flex-col"></div>
            <div className="bg-red-500 w-[800px] h-[200px] flex flex-col"></div>
          </div>
        </div>
      </section>
    </>
  );
}
