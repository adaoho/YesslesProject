const Subscription = ({ className }: any) => {
  return (
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
              src="/chat_bg.png"
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
    </>
  );
};

export default Subscription;
