import { DataProgramBelajar } from "../utils/TypeDefs";

const CardProgramYessles = ({ data }: { data: DataProgramBelajar }) => {
  // console.log(data, "<<< card");

  return (
    <div className="snap-start flex h-[478px] w-[320px] flex-col">
      <div className="flex h-[382px] w-[310px] bg-blue-gray-500 rounded-3xl relative bg-yellow-600 overflow-hidden">
        <img src={data.thumbnail} alt="" className="object-cover" />
        <div className="absolute font-lexend h-[34px] text-yl-10 w-fit px-3 bg-blue-gray-700 rounded-xl flex items-center justify-center bottom-0 m-6 bg-yl-80 gap-x-1 uppercase text-[12px]">
          <span className="material-symbols-outlined" style={{ fontSize: 22 }}>
            {data.icon}
          </span>
          {data.alias}
        </div>
      </div>
      <div className="flex flex-col mt-3 gap-y-1">
        <h1 className="font-lexend font-bold text-[20px] text-yl-20">
          {data.pendidikan}
        </h1>
        <h1 className="text-gray-400 text-[15px] font-light font-lexend">
          Mulai dari Rp {data.priceStart}jt/tahun
        </h1>
      </div>
    </div>
  );
};

export default CardProgramYessles;
