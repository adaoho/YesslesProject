import { formatPaketPrice } from '../utils/Static';

const CardProgramYessles = ({ data }) => {
  const handleClick = () => {
    if (data?.type === 'program_belajar') {
      window.location.href = `/program/${data.slug}`;
    } else {
      window.location.href = `/paket/${data.slug}`;
    }
  };

  return (
    <div
      onClick={handleClick}
      className="snap-start flex h-[478px] w-[320px] flex-col group transition-all cursor-pointer"
    >
      <div className="flex h-[382px] w-[310px] rounded-3xl relative overflow-hidden">
        <img
          src={data.thumbnail}
          alt={data.pendidikan}
          className="object-cover w-full h-full group-hover:scale-110 transition-all group-hover:brightness-110"
        />
        <div className="absolute font-lexend h-[34px] text-yl-10 group-hover:bg-yl-30 group-hover:text-white transition-all w-fit px-3 bg-yl-80 rounded-xl flex items-center justify-center bottom-0 m-6 gap-x-1 uppercase text-[12px]">
          <span className="material-symbols-outlined" style={{ fontSize: 22 }}>
            {data.icon}
          </span>
          {data.alias}
        </div>
      </div>
      <div className="flex flex-col mt-3 gap-y-1">
        <h1 className="font-lexend font-bold text-[20px] text-yl-60">{data.pendidikan}</h1>
        {data.priceStart && (
          <h1 className="text-gray-400 text-[15px] font-light font-lexend">
            Mulai dari {formatPaketPrice(data.priceStart)}
            /{data.durasiBelajar === 12 ? 'tahun' : `${data.durasiBelajar} bulan`}
          </h1>
        )}
        {data.matapelajaran && (
          <h1 className="text-gray-400 text-[15px] font-light font-lexend">
            Bisa Pilih
            {data.matapelajaran > 12
              ? ' Semua Mata Pelajaran'
              : ` ${data.matapelajaran} Mata Pelajaran`}
          </h1>
        )}
      </div>
    </div>
  );
};

export default CardProgramYessles;
