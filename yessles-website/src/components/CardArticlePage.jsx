import { BsArrowUpRight } from "react-icons/bs";
import { formatDateString } from "../utils/Static";

const CardArticlePage = ({ data }) => {
  // Skeleton placeholder while data loads
  if (!data) {
    return (
      <div className="flex flex-col h-full rounded-2xl border border-gray-100 bg-white overflow-hidden animate-pulse">
        <div className="h-[180px] w-full bg-gray-100" />
        <div className="flex flex-col flex-1 p-4 gap-y-3">
          <div className="h-3 w-20 bg-gray-100 rounded" />
          <div className="h-4 w-full bg-gray-100 rounded" />
          <div className="h-4 w-3/4 bg-gray-100 rounded" />
          <div className="mt-auto h-7 w-28 bg-gray-100 rounded-full" />
        </div>
      </div>
    );
  }

  return (
    <a href={"/article/" + data?.slug} className="group block h-full">
      <article className="flex flex-col h-full rounded-2xl border border-yl-60/15 bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(82,119,115,0.15)] hover:border-yl-60/40">
        <div className="relative h-[180px] w-full overflow-hidden bg-gray-100">
          <img
            src={data?.thumbnail}
            alt=""
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="flex flex-col flex-1 p-4 gap-y-2">
          <p className="text-[11px] text-gray-400 font-lexend">
            {data?.createdAt ? formatDateString(data?.createdAt) : ""}
          </p>
          <h3 className="font-lexend font-bold text-[15px] md:text-[16px] text-yl-20 leading-snug truncate-multiline group-hover:text-yl-60 transition-colors">
            {data?.title}
          </h3>
          <div className="mt-auto pt-3 flex items-center justify-between gap-x-2">
            <div className="flex items-center gap-x-2 min-w-0">
              <div className="size-7 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                <img src={data?.User?.profile_picture} alt="" className="w-full h-full object-cover" />
              </div>
              <span className="text-[12px] text-gray-500 truncate font-lexend">{data?.User?.full_name}</span>
            </div>
            <span className="w-8 h-8 rounded-full bg-yl-60/10 flex items-center justify-center flex-shrink-0 group-hover:bg-yl-60 transition-colors">
              <BsArrowUpRight className="size-[14px] text-yl-60 group-hover:text-white transition-colors" />
            </span>
          </div>
        </div>
      </article>
    </a>
  );
};

export default CardArticlePage;
