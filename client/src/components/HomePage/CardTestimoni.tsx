import React from "react";

const CardTestimoni = () => {
  return (
    <>
      <div className="flex w-[700px] h-[350px] flex-col justify-center relative items-center">
        {/* Image Card */}
        <div className="w-full h-full rounded-2xl overflow-hidden bg-black/40">
          <img
            src="https://source.unsplash.com/random/900x700/?family-school-2"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        {/* Testimoni Card */}
        <div className="absolute bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-[80%] h-[230px] -bottom-24 flex flex-col rounded-xl justify-center items-start px-[4%] gap-y-3">
          <h1 className="font-lexend text-yl-20 text-[18px] font-bold">
            Yessles, lembaga pendidikan privat yang luar biasa!
          </h1>
          <p className="text-[13px] text-yl-90 font-lexend">
            Pengalaman saya sebagai siswa di Yessles sangat positif dan
            memuaskan. Mereka tidak hanya menawarkan kurikulum akademis yang
            kuat, tetapi juga memberikan perhatian khusus pada perkembangan
            karakter dan keterampilan non-akademis.
          </p>
          <div className="flex flex-row w-full justify-between items-center mt-2">
            {/* Picture Testimoni */}
            <div className="flex gap-x-2 items-center">
              <img
                src="https://source.unsplash.com/random/900x700/?family"
                alt=""
                className="w-8 h-8 rounded-full"
              />
              <div className="flex flex-col -gap-y-3">
                <p className="font-lexend text-yl-20 text-[14px] font-bold">
                  Dianne Russell
                </p>
                <p className="font-lexend text-yl-90 text-[11px]">
                  Manager Director
                </p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex flex-row w-fit text-yellow-300 gap-x-2 text-lg items-center justify-center pr-[2%]">
              <span className="material-icons" style={{ fontSize: 28 }}>
                kid_star
              </span>
              <p className="font-lexend font-bold text-yl-20 text-[22px]">
                4.6
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTestimoni;
