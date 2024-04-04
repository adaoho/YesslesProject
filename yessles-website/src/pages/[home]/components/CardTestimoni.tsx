import { DataTestimoni } from "../utils/TypeDefs";

const CardTestimoni = ({ testimoni }: { testimoni: DataTestimoni }) => {
  return (
    <>
      <div className="flex w-[700px] h-[350px] flex-col justify-center relative items-center">
        {/* Image Card */}
        <div className="w-full h-full rounded-2xl overflow-hidden bg-black/40">
          <img
            src={testimoni.image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        {/* Testimoni Card */}
        <div className="absolute bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-[80%] h-[230px] -bottom-24 flex flex-col rounded-xl justify-center items-center px-[4%] gap-y-3">
          <h1 className="font-lexend text-yl-20 text-[18px] font-bold text-center">
            {testimoni.title}
          </h1>
          <p className="text-[13px] text-yl-90 font-lexend text-center">
            {testimoni.comment}
          </p>
          <div className="flex flex-row w-full justify-center items-center mt-2">
            {/* Picture Testimoni */}
            <div className="flex gap-x-2 items-center">
              <img
                src={testimoni.image}
                alt=""
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="flex flex-col -gap-y-3">
                <p className="font-lexend text-yl-20 text-[14px] font-bold">
                  {testimoni.name}
                </p>
                <p className="font-lexend text-yl-90 text-[11px]">
                  {testimoni.position}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTestimoni;
