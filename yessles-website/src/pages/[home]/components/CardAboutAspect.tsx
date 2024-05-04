const CardAboutAspect = ({ data }: any) => {
  return (
    <>
      <div className="w-full h-[380px] bg-yl-60 shadow-sm rounded-2xl flex flex-col gap-y-3">
        <div className="flex flex-row gap-x-4 px-[5%] w-full h-[30%] pt-4 items-start ">
          <div className="px-1 py-1 bg-yl-10 rounded-lg flex justify-center items-center h-fit mt-1">
            {data?.icon}
          </div>
          <div className="flex flex-col text-white font-lexend items-start justify-start ">
            <h1 className="text-[24px] font-bold">{data?.title}</h1>
            <h1 className="font-light text-[14px]">{data?.description}</h1>
          </div>
        </div>
        <div className="w-full overflow-hidden rounded-b-2xl h-[70%] border-t-2 border-yl-10">
          <img
            src={data?.picture}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default CardAboutAspect;
