import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

const CardArticlePage = () => {
  return (
    <>
      <div className="flex w-full justify-center items-center flex-col h-[350px] rounded-lg group">
        {/* Image */}
        <div className="h-[55%] w-full rounded-lg overflow-hidden">
          <img
            src="https://source.unsplash.com/400x400/?landscape"
            className="group-hover:scale-110 transition-all"
          />
        </div>
        {/* Title */}
        <div className="flex flex-col w-full mt-4 gap-y-2">
          <h1 className="font-lexend font-bold text-[18px] group-hover:text-yl-60">
            Cerita tentang Perjalanan Bersama Yessles
          </h1>
          <h1 className="text-gray-400 text-[13px]">24 April 2024</h1>
        </div>
        {/* Account Author */}
        <div className="flex flex-row gap-x-2 justify-between items-center w-full mt-4">
          <div className="flex flex-row gap-x-2 items-center">
            <div className="size-7 rounded-full overflow-hidden">
              <img src="https://source.unsplash.com/400x400/?portrait" />
            </div>
            <h1 className="font-lexend text-[12px] group-hover:text-yl-60">
              Andini Setiawan
            </h1>
          </div>
          <BsFillArrowUpRightCircleFill className="size-6 group-hover:text-yl-10 transition-all" />
        </div>
      </div>
    </>
  );
};

export default CardArticlePage;
