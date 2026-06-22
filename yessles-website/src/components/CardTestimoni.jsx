const CardTestimoni = ({ testimoni }) => {
  return (
    <div className="relative w-[90vw] h-[420px] md:w-[650px] md:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden select-none flex-shrink-0">
      {/* Background image — object-contain so full image is always visible */}
      <img
        src={testimoni.thumbnail || testimoni.image}
        alt={testimoni.name}
        className="absolute inset-0 w-full h-[80%] object-cover rounded-xl"
      />

      {/* White content card — absolute overlay at bottom */}
      <div className="absolute bottom-3 w-full flex justify-center">
        <div className="bg-white rounded-2xl shadow-lg px-4 py-4 md:px-6 md:py-5 flex flex-col gap-y-2 md:gap-y-3 w-[80vw] max-w-[97%] md:w-[92%] md:max-w-[600px]">
          {/* Title */}
          <h2 className="font-lexend text-yl-20 text-[12px] md:text-[16px] font-bold leading-snug text-center">
            {testimoni.title}
          </h2>

          {/* Comment */}
          <p className="text-[10.5px] md:text-[13px] text-yl-90 font-lexend leading-relaxed text-center truncate-multiline-3">
            {testimoni.comment}
          </p>

          {/* Author */}
          <div className="flex flex-row items-center justify-center gap-x-2.5 pt-0.5">
            <img
              src={testimoni.image}
              alt={testimoni.name}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover flex-shrink-0 ring-2 ring-gray-100"
            />
            <div className="flex flex-col text-left">
              <p className="font-lexend text-yl-20 text-[11px] md:text-[14px] font-bold leading-tight">{testimoni.name}</p>
              <p className="font-lexend text-yl-90 text-[9.5px] md:text-[11px] leading-tight mt-0.5">{testimoni.position}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTestimoni;
