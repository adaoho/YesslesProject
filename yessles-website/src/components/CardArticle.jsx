import { formatDateString } from "../utils/Static";

const CardArticle = ({ data, other }) => {
  return (
    <a href={"/article/" + data?.slug} className={!data ? "hidden" : "group block"}>
      <article className="flex flex-row w-full gap-x-3 md:gap-x-4 items-center">
        <div className="flex-shrink-0 w-[110px] md:w-[180px] h-[80px] md:h-[130px] overflow-hidden rounded-xl bg-gray-100">
          <img
            src={data?.thumbnail}
            alt=""
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {other ? (
          <div className="flex flex-col justify-center gap-y-1.5 w-full min-w-0">
            <h3 className="font-lexend text-yl-20 text-[14px] md:text-[18px] xl:text-[20px] font-bold truncate-multiline-3 leading-tight group-hover:text-yl-60 transition-colors">
              {data?.title}
            </h3>
            <div className="flex flex-row text-yl-40 items-center gap-x-2 text-[11px] md:text-[13px]">
              <span className="text-yl-60 font-lexend truncate max-w-[120px]">{data?.User?.full_name}</span>
              <span className="text-gray-300">•</span>
              <span className="font-lexend flex-shrink-0">
                {data?.createdAt ? formatDateString(data?.createdAt) : ""}
              </span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center gap-y-1.5 w-full min-w-0">
            <div className="flex flex-row items-center gap-x-2">
              <img
                src={data?.User?.profile_picture}
                alt=""
                className="w-6 h-6 rounded-full object-cover flex-shrink-0 bg-gray-100"
              />
              <span className="font-lexend text-[11px] md:text-[13px] text-gray-500 truncate">
                {data?.User?.full_name}
              </span>
            </div>
            <h3 className="font-lexend text-yl-20 text-[13px] md:text-[16px] font-bold truncate-multiline-3 leading-tight group-hover:text-yl-60 transition-colors">
              {data?.title}
            </h3>
            <div className="flex flex-row text-yl-40 items-center gap-x-1 text-[10px] md:text-[13px]">
              <span className="material-icons text-[14px] md:text-[16px]">schedule</span>
              <span className="font-lexend">{data?.createdAt ? formatDateString(data?.createdAt) : ""}</span>
            </div>
          </div>
        )}
      </article>
    </a>
  );
};

export default CardArticle;
