import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";
<MdArrowBack />;

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col items-center pb-4">
          <h1 className="font-bold text-[34px]">Opps...</h1>
          <h1>Page yang kamu Cari Tidak Ada</h1>
        </div>
        <Link
          to={"/"}
          className="flex flex-row items-center gap-x-2 px-2 py-1 bg-yl-60 rounded-lg text-white transition-all cursor-pointer hover:bg-yl-30"
        >
          <MdArrowBack />
          <p>Kembali</p>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
