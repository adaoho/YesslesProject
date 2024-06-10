import { useSelector } from "react-redux";
import { filterStatuses } from "../utils/static";
import { formatDateShortString } from "@/utils/static";

const LatestCardArticle = ({ data }: any) => {
  const { userData } = useSelector((state: any) => state.user);

  return (
    <>
      <div className="bg-white rounded-xl border flex flex-col h-full p-4 gap-y-4">
        <div className="flex flex-row w-full relative h-20 rounded-lg overflow-hidden">
          <div className="absolute w-full h-20 bg-gradient-to-t from-black/80 to-white/20 z-10"></div>
          <img
            src={data?.thumbnail}
            alt=""
            className="w-full h-full object-cover absolute"
          />

          {/* Status & Created At */}
          <div className="flex xl:flex-row flex-col justify-between w-full px-3 gap-x-2 gap-y-1 text-[12px] z-20 text-white absolute bottom-2">
            <div className="flex gap-x-1 items-center">
              {formatDateShortString(data?.createdAt)}
            </div>
            <div className="flex gap-x-1 items-center">
              {filterStatuses(data?.status).map((status) => {
                const Icon = status.icon;
                const value = status.value;
                return (
                  <div
                    key={status.value}
                    className={`flex items-center gap-x-1 text-white px-2 rounded-lg ${
                      value == "ACTIVE"
                        ? "bg-yl-10"
                        : value == "PENDING"
                        ? "bg-yellow-500"
                        : "bg-red-600"
                    }`}
                  >
                    <Icon />
                    <span>{status.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-2 text-gray-400">
          <h1 className="truncate-multiline text-gray-800">{data?.title}</h1>
          <p className="text-[10px] truncate-multiline">{data?.description}</p>
          {userData?.role == "admin" && (
            <p className="text-[10px]">Author: {data?.User.email}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default LatestCardArticle;
