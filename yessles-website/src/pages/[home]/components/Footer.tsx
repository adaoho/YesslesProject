const Footer = () => {
  return (
    <>
      {/* Footer */}
      <section id="footer">
        <div className="flex w-screen h-[235px] px-[6%] text-gray-500 bottom-0">
          <div className="border-t-[1.5px] w-full h-full flex flex-row items-start pb-[4%] pt-[2%] gap-x-3 border-yl-40/70 border-dashed">
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

export default Footer;
