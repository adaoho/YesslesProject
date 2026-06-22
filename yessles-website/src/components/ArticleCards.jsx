import { formatDateString } from "../utils/Static";

// Compact horizontal card used in the "side list" next to the featured article.
// Grows to fill its column height on lg (via lg:flex-1) so it lines up with the
// featured card, and renders a pulse skeleton while data is loading.
export const SideArticleCard = ({ data }) => {
  if (!data) {
    return (
      <div className="flex flex-row gap-x-3 rounded-2xl border border-gray-100 bg-white p-2.5 animate-pulse lg:flex-1 lg:min-h-0">
        <div className="flex-shrink-0 w-[120px] md:w-[140px] self-stretch min-h-[96px] rounded-xl bg-gray-100" />
        <div className="flex flex-col justify-center gap-y-2 w-full py-1">
          <div className="h-4 w-full bg-gray-100 rounded" />
          <div className="h-4 w-2/3 bg-gray-100 rounded" />
          <div className="h-3 w-24 bg-gray-100 rounded mt-1" />
        </div>
      </div>
    );
  }
  return (
    <a href={"/article/" + data?.slug} className="group block lg:flex-1 lg:min-h-0">
      <article className="flex flex-row gap-x-3 items-stretch h-full rounded-2xl border border-yl-60/15 bg-white p-2.5 transition-all duration-300 hover:border-yl-60/40 hover:shadow-[0_10px_28px_rgba(82,119,115,0.12)]">
        <div className="flex-shrink-0 w-[120px] md:w-[140px] min-h-[96px] self-stretch rounded-xl overflow-hidden bg-gray-100">
          <img
            src={data?.thumbnail}
            alt=""
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="flex flex-col justify-center gap-y-1.5 min-w-0 py-1 pl-2 pr-6">
          <h3 className="font-lexend font-bold text-yl-20 text-[15px] md:text-[16px] leading-snug truncate-multiline-3 group-hover:text-yl-60 transition-colors">
            {data?.title}
          </h3>
          <div className="flex items-center gap-x-2 text-[11px] md:text-[12px] text-yl-40">
            <span className="text-yl-60 font-medium truncate max-w-[130px]">{data?.User?.full_name}</span>
            <span className="text-gray-300">•</span>
            <span className="flex-shrink-0">{data?.createdAt ? formatDateString(data?.createdAt) : ""}</span>
          </div>
        </div>
      </article>
    </a>
  );
};

// Large vertical "featured" article card with a pulse skeleton while loading.
export const FeaturedArticleCard = ({ data }) => {
  if (!data) {
    return (
      <div className="flex flex-col h-full overflow-hidden rounded-2xl border border-gray-100 bg-white animate-pulse">
        <div className="w-full h-[240px] md:h-[340px] bg-gray-100 flex-shrink-0" />
        <div className="flex flex-col gap-y-3 p-5 md:p-6">
          <div className="h-6 w-20 bg-gray-100 rounded-full" />
          <div className="h-7 w-full bg-gray-100 rounded" />
          <div className="h-7 w-3/4 bg-gray-100 rounded" />
          <div className="h-4 w-44 bg-gray-100 rounded mt-1" />
        </div>
      </div>
    );
  }
  return (
    <a href={"/article/" + data?.slug} className="group block h-full">
      <article className="flex flex-col h-full overflow-hidden rounded-2xl border border-yl-60/15 bg-white transition-all duration-300 hover:border-yl-60/40 hover:shadow-[0_14px_34px_rgba(82,119,115,0.15)]">
        <div className="w-full h-[240px] md:h-[340px] overflow-hidden bg-gray-100 flex-shrink-0">
          <img
            src={data?.thumbnail}
            alt=""
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="flex flex-col gap-y-3 p-5 md:p-6">
          <span className="inline-flex w-fit items-center rounded-full bg-yl-30/10 text-yl-30 px-3 py-1 text-[11px] md:text-[12px] font-semibold">
            Featured
          </span>
          <h2 className="font-raleway font-bold text-yl-20 text-[22px] md:text-[30px] leading-tight truncate-multiline group-hover:text-yl-60 transition-colors">
            {data?.title}
          </h2>
          <div className="flex flex-row items-center gap-x-2 text-yl-40 text-[13px] md:text-[15px]">
            <span className="text-yl-60 font-medium">{data?.User?.full_name}</span>
            <span className="text-gray-300">•</span>
            <span>{data?.createdAt ? formatDateString(data?.createdAt) : ""}</span>
          </div>
        </div>
      </article>
    </a>
  );
};
