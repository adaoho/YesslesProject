import { Link } from "react-router-dom";

const CardArticle = ({ data, other }: any) => {
  return (
    <>
      {/* Card Article */}
      {console.log(data)}
      <Link to={data.title}>
        <div
          className={`flex flex-row w-full h-[150px] gap-x-4 group items-center`}
        >
          <div className="w-[450px] h-[144px] overflow-hidden rounded-lg flex items-center">
            <img
              src={data.thumbnail}
              alt=""
              className={`object-cover rounded-lg group-hover:scale-105 transition-all`}
            />
          </div>

          {other ? (
            <>
              <div className="flex flex-col h-full justify-between items-start gap-y-2 w-full">
                <p className="font-lexend text-yl-60 text-[21px] w-full font-bold">
                  {data.title}
                </p>
                <div className="flex flex-row text-yl-40 items-center gap-x-3 group-hover:text-yl-10">
                  <p className="font-lexend text-[14px] text-yl-60">
                    {data.author}
                  </p>
                  <p>|</p>
                  <p className="text-[14px] font-lexend">
                    {data.publication_date}
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col h-full justify-between py-[1%] items-start gap-y-2 w-full">
                <div className="flex flex-row items-center gap-x-2">
                  <img
                    src={data.authorProfile}
                    alt=""
                    className="w-7 h-7 rounded-full object-cover"
                  />
                  <p className="font-lexend text-[14px] text-yl-60">
                    {data.author}
                  </p>
                </div>
                <p className="font-lexend text-yl-60 text-[17px] w-[90%] font-bold">
                  {data.title}
                </p>
                <div className="flex flex-row text-yl-40 items-center gap-x-1">
                  <span className="material-icons" style={{ fontSize: 18 }}>
                    schedule
                  </span>
                  <p className="text-[14px] font-lexend">
                    {data.publication_date}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </Link>
    </>
  );
};

export default CardArticle;
