import { BsYoutube } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  const [nameChat, setNameChat] = useState<string>("");
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

  const WARedirect = `https://api.whatsapp.com/send?phone=628994944728&text=Halo%20Kak!%20Mohon%20info%20cara%20bergabung%20di%20Yessles?`;
  return (
    <>
      {/* Footer */}
      <section id="footer">
        <div className="flex w-screen h-full px-[6%] text-gray-500 bottom-0">
          <div className="border-t-[1.5px] w-full h-full flex flex-col lg:flex-row items-start pb-[4%] pt-[8%] md:pt-[5%] lg:pt-[2%] gap-x-3 gap-y-4 border-yl-40/70 border-dashed">
            <div className="flex flex-col md:flex-row">
              {/* Coloumn 1 */}
              <div className="flex flex-col col-span-2 gap-y-6 w-[calc(100%+50px)] h-fit ">
                <img src="/yessles_logo.svg" alt="" className="w-[148px]" />
                <h1 className="text-gray-500 font-light -mt-2 font-lexend text-[12px] w-48">
                  Yessles Bimbingan Belajar Privat No.1 di Madiun.
                </h1>
                <div className="flex flex-row gap-x-2 w-fit items-center justify-center">
                  <button
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/yessles_official/",
                        "_blank"
                      )
                    }
                  >
                    <AiFillInstagram className="size-6 -mt-2 text-gray-500 hover:text-[#C13584] transition-all" />
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        "https://www.facebook.com/yessles.madiun",
                        "_blank"
                      )
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
                    className="hidden"
                  >
                    <FaTiktok className="size-5 -mt-2 text-gray-500 hover:text-black transition-all" />
                  </button>
                  <button onClick={() => window.open(WARedirect, "_blank")}>
                    <RiWhatsappFill className="size-6 -mt-2 text-gray-500 hover:text-yl-10 transition-all" />
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/@YesslesSahabatBelajarmu",
                        "_blank"
                      )
                    }
                  >
                    <BsYoutube className="size-6 -mt-2 text-gray-500 hover:text-red-500 transition-all ml-1" />
                  </button>
                </div>
              </div>

              {/* Hyperlink Footer */}
              <div className="grid grid-cols-1 md:grid-cols-3 w-full md:w-[calc(100%+520px)] gap-x-6 text-gray-500 h-fit mb-4 gap-y-4 mt-4 md:mt-0">
                <div className="flex flex-col gap-y-5 w-full h-fit justify-start">
                  <div className="flex flex-col text-[11px] gap-y-1">
                    <h1 className="font-bold text-[13px] underline">
                      Program Belajar
                    </h1>
                    <h1>Program Belajar</h1>
                    <h1>Sistem Belajar</h1>
                    <h1>Paket Belajar</h1>
                  </div>
                </div>

                <div className="flex flex-col gap-y-5 w-full h-fit justify-start">
                  <div className="flex flex-col text-[11px] gap-y-1">
                    <h1 className="font-bold text-[13px] underline">Article</h1>
                    <h1>New Article</h1>
                    <h1>Popular Article</h1>
                    <h1>Most Read</h1>
                    <h1>Tips & Tricks</h1>
                  </div>
                </div>

                <div className="flex flex-col gap-y-2 w-full h-fit text-[11px]">
                  <h1 className="font-bold text-[13px] underline">Contact</h1>
                  <div className="flex flex-col gap-y-1">
                    <h1>Jl. Bali No. 1C, Kota Madiun, Jawa Timur, 63122.</h1>
                    <h1>(+62) 899 4944 728</h1>
                    <h1>haloyessles@gmail.com</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-x-4 md:items-center lg:flex-col col-span-2 gap-y-2 w-full lg:w-[60%] h-full xl:ml-[5%] ">
              <div className="flex flex-col h-full w-full md:w-[50%] lg:w-full  gap-y-2 items-start justify-start">
                <h1 className="font-bold text-[11px] lg:text-[14px]">
                  Jadi Bagian dari +200 Students Kami
                </h1>
                <h1 className="text-gray-500 font-light -mt-2 text-[11px] lg:text-[13px] font-lexend">
                  Ketahui Lebih Jauh Program Belajar di Yessles
                </h1>
              </div>
              <form
                className="flex flex-row gap-x-2 w-full md:w-[60%] lg:w-[100%] py-2 h-full"
                onSubmit={onSubmitChat}
              >
                <input
                  type="text"
                  name="email"
                  placeholder="Ketik Nama Kamu ..."
                  autoComplete="off"
                  className="w-full bg-gray-200 rounded-md px-4 text-gray-900 text-[14px] font-bold font-lexend py-3 placeholder-yl-40/60"
                  onChange={nameChange}
                />
                <button
                  type="submit"
                  className="w-[40%] h-full py-3 bg-yl-60 justify-center items-center flex flex-row rounded-lg text-white gap-x-1 px-2 hover:bg-yl-10 transition-all"
                >
                  <FaWhatsapp className="size-5" />
                  <p>Chat</p>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
