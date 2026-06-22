const CardAboutAspect = ({ data, index }) => {
  return (
    <div className="group relative flex flex-col h-full bg-white rounded-2xl border border-gray-200/80 p-5 md:p-6 hover:border-yl-60/40 hover:shadow-[0_14px_40px_rgba(82,119,115,0.14)] transition-all duration-300">
      {/* Top row: brand icon chip + aspect label */}
      <div className="flex items-center justify-between">
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-yl-60 to-yl-10 flex items-center justify-center shadow-md shadow-yl-60/20">
          {data?.icon}
        </div>
        <span className="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-500 text-[12px] font-lexend font-semibold tracking-wide">
          Aspek 0{index + 1}
        </span>
      </div>

      {/* Dashed divider */}
      <div className="border-t border-dashed border-gray-200 mt-5 mb-4" />

      {/* Title + description */}
      <h3 className="text-[20px] md:text-[22px] font-bold font-lexend text-yl-20 leading-snug">{data?.title}</h3>
      <p className="text-[13px] md:text-[14px] text-gray-500 font-lexend font-light leading-relaxed mt-2">
        {data?.description}
      </p>

      {/* Image panel (existing photo) — pushed to bottom so cards align */}
      <div className="mt-auto pt-5 md:pt-6">
        <div className="rounded-xl overflow-hidden bg-gray-50 border border-gray-100 aspect-[4/3]">
          <img
            src={data?.picture}
            alt={data?.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default CardAboutAspect;
