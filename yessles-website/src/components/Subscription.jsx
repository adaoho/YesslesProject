import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { FadeIn } from "./ui/FadeIn";

const Subscription = ({ className, other }) => {
  const [nameChat, setNameChat] = useState("");

  const onSubmitChat = (e) => {
    e.preventDefault();
    window.open(
      `https://api.whatsapp.com/send?phone=628994944728&text=Halo%20Kak,%20Saya%20${nameChat}!%20Mohon%20info%20cara%20bergabung%20di%20Yessles?`,
      "_blank",
      "rel=noopener noreferrer"
    );
  };

  const heading = other ? "Ayo Daftar Sekarang!" : "Ketahui Lebih Jauh Program Yessles";
  const badge = other ? "Jadwal Real-Time" : "Konsultasi Gratis";

  return (
    <FadeIn direction="up">
      <section id="subscription" className={className}>
        <div className="px-[5%] md:px-[8%] pb-[6%] mt-8">
          <div className="relative w-full overflow-hidden rounded-[28px] border border-yl-60/10 bg-gradient-to-br from-yl-50 via-white to-yl-50/60 px-5 md:px-12 py-10 md:py-16">
            {/* Themed dot pattern */}
            <div
              className="absolute inset-0 z-0 opacity-60"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(82,119,115,0.18) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
                maskImage: "radial-gradient(ellipse at center, black 35%, transparent 80%)",
                WebkitMaskImage: "radial-gradient(ellipse at center, black 35%, transparent 80%)",
              }}
            />
            {/* Soft brand glow accents */}
            <div className="absolute -top-20 -left-16 z-0 w-56 h-56 rounded-full bg-yl-10/15 blur-3xl" />
            <div className="absolute -bottom-24 -right-16 z-0 w-64 h-64 rounded-full bg-yl-60/15 blur-3xl" />

            {/* Content */}
            <div className="relative flex flex-col items-center text-center w-full">
              {/* Status badge */}
              <span className="inline-flex items-center gap-x-1.5 rounded-full bg-yl-10/10 text-yl-10 px-3 py-1 text-[11px] md:text-[12px] font-semibold font-lexend mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-yl-10 animate-pulse" />
                {badge}
              </span>

              <h2 className="font-lexend font-bold text-[23px] md:text-[32px] text-yl-20 leading-tight max-w-[20ch]">
                {heading}
              </h2>

              {other && (
                <p className="font-lexend text-[13px] md:text-[15px] text-yl-20/70 mt-3 max-w-[54ch] leading-relaxed">
                  Segera amankan jadwalmu, karena jadwal les di Yessles berlaku REAL-TIME (tidak ada sistem keep jadwal).
                  Permintaan les dilayani sesuai jadwal tutor yang tersedia ya..
                </p>
              )}

              {/* Inline name → WhatsApp pill */}
              <form
                onSubmit={onSubmitChat}
                className="mt-6 w-full max-w-md flex flex-row items-center gap-x-2 bg-white rounded-2xl p-1.5 pl-3 md:pl-4 shadow-[0_10px_40px_rgba(27,28,87,0.12)]"
              >
                <span className="material-symbols-outlined text-yl-40 text-[20px] flex-shrink-0">chat</span>
                <input
                  placeholder="Ketik nama kamu ..."
                  type="text"
                  value={nameChat}
                  onChange={(e) => setNameChat(e.target.value)}
                  className="flex-1 min-w-0 bg-transparent focus:outline-none font-lexend placeholder:text-yl-40/50 text-[13px] md:text-base text-yl-20"
                />
                <button
                  type="submit"
                  className="flex items-center gap-x-1.5 bg-yl-10 hover:bg-yl-60 active:scale-95 transition-all text-white px-3 md:px-5 py-2.5 rounded-xl text-[13px] md:text-[15px] font-medium font-lexend flex-shrink-0"
                >
                  <FaWhatsapp className="text-[16px]" />
                  <span className="hidden sm:inline">Kirim Chat</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
};

export default Subscription;
