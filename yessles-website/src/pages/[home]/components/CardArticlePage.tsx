import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { dataArtikelPage } from "../utils/TypeDefs";
import { formatDateString } from "../../../utils/static";
import { Link } from "react-router-dom";

//@ts-ignore
const CardArticlePage = ({ data }: dataArtikelPage) => {
  return (
    <>
      <Link to={"/article/" + data?.slug}>
        <div className="flex w-full justify-center items-center flex-col h-[350px] rounded-lg group ">
          {/* Image */}
          <div className="h-[55%] w-full rounded-lg overflow-hidden">
            <img
              src={data?.thumbnail}
              className="group-hover:scale-110 transition-all object-cover w-full h-full"
            />
          </div>
          {/* Title */}
          <div className="flex flex-col w-full mt-4 gap-y-2">
            <h1 className="font-lexend font-bold text-[18px] group-hover:text-yl-60 max-h-18 truncate-multiline">
              {data?.title}
            </h1>
            <h1 className="text-gray-400 text-[13px]">
              {data?.createdAt ? formatDateString(data?.createdAt) : ""}
            </h1>
          </div>
          {/* Account Author */}
          <div className="flex flex-row gap-x-2 justify-between items-center w-full mt-4">
            <div className="flex flex-row gap-x-2 items-center">
              <div className="size-7 rounded-full overflow-hidden">
                <img src={data?.User?.profile_picture} />
              </div>
              <h1 className="font-lexend text-[12px] group-hover:text-yl-60">
                {data?.User?.full_name}
              </h1>
            </div>
            <BsFillArrowUpRightCircleFill className="size-6 group-hover:text-yl-10 transition-all" />
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardArticlePage;
