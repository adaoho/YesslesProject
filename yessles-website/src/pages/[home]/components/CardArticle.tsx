import { DataArtikel } from "../utils/TypeDefs";

const CardArticle = ({ data }: any) => {
  return (
    <>
      {/* Card Article */}
      <div className="flex flex-row w-full h-fit gap-x-4 ">
        <img
          src={data.thumbnail}
          alt=""
          className="w-[250px] h-[144px] object-contain rounded-2xl"
        />
        <div className="flex flex-col h-full justify-between py-[1%]">
          <div className="flex flex-row items-center gap-x-2">
            <img
              src={data.authorProfile}
              alt=""
              className="w-7 h-7 rounded-full object-cover"
            />
            <p className="font-lexend text-[14px] text-yl-20">{data.author}</p>
          </div>
          <p className="font-lexend text-yl-20 text-[17px] w-[90%] font-bold">
            {data.title}
          </p>
          <div className="flex flex-row text-yl-40 items-center gap-x-1">
            <span className="material-icons" style={{ fontSize: 18 }}>
              schedule
            </span>
            <p className="text-[14px] font-lexend">{data.publication_date}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardArticle;
