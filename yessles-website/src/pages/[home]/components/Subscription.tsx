import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

const Subscription = ({ className, other }: any) => {
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
  return (
    <>
      {other ? (
        <>
          <section id="subscription" data-aos="fade-up">
            <div className="flex w-[100dvw] h-[350px] items-center px-[8%] flex-col pb-[6%] justify-center mt-8">
              {/* Banner Button */}
              <div className="flex flex-col w-full items-center justify-center h-full rounded-[25px] overflow-hidden relative">
                <img
                  src="/subscribe_banner.png"
                  alt=""
                  className="absolute -z-10 w-full object-cover"
                />
                <h1 className="font-lexend font-bold text-[28px] w-[30%] text-center leading-9 text-yl-20 mb-3">
                  Ayo Daftar Sekarang!
                </h1>
                <h1 className="font-lexend text-[14px] w-[70%] text-center  text-yl-20 mt-2">
                  Segera amankan jadwalmu, karena jadwal les di Yessles berlaku
                  REAL-TIME (tidak ada sistem keep jadwal)
                </h1>
                <h1 className="font-lexend text-[14px] w-[70%] text-center  text-yl-20 mb-3">
                  Untuk Permintaan les, dilayani sesuai jadwal tutor yang
                  tersedia ya..
                </h1>
                {/* Input Email */}
                <div className="mt-4 flex flex-row bg-white w-fit h-fit px-1 pl-5 justify-center items-center gap-x-2 rounded-[17px] py-1 text-yl-20 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                  <span className="material-symbols-outlined">chat</span>
                  <form onSubmit={onSubmitChat}>
                    <input
                      placeholder="Ketik Nama Kamu ... "
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
        </>
      ) : (
        <>
          {/* Nodemailer Subscription */}
          <section id="subscription" className={className}>
            <div
              className="flex w-[100dvw] h-[350px] items-center px-[8%] flex-col pb-[6%] justify-center"
              data-aos="fade-up"
            >
              {/* Banner Button */}
              <div className="flex flex-col w-full items-center justify-center h-full rounded-[25px] gap-y-6 overflow-hidden relative">
                <img
                  src="/subscribe_banner.png"
                  alt=""
                  className="absolute -z-10 w-full object-cover"
                />
                <h1 className="font-lexend font-bold text-[28px] w-[30%] text-center leading-9 text-yl-60">
                  Ketahui Lebih Jauh Program Yessles
                </h1>
                {/* Input Email */}
                <div className="flex flex-row bg-white w-fit h-fit px-1 pl-5 justify-center items-center gap-x-2 rounded-[17px] py-1 text-yl-60 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                  <FaWhatsapp />
                  <input
                    placeholder="Ketik Nama Kamu ..."
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
        </>
      )}
    </>
  );
};

export default Subscription;
