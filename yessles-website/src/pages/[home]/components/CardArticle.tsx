const CardArticle = () => {
  return (
    <>
      {/* Card Article */}
      <div className="flex flex-row w-full h-fit gap-x-4">
        <img
          src="https://source.unsplash.com/random/900x700/?education"
          alt=""
          className="w-[250px] h-[144px] object-cover rounded-2xl"
        />
        <div className="flex flex-col h-full justify-between py-[1%]">
          <div className="flex flex-row items-center gap-x-2">
            <img
              src="https://source.unsplash.com/random/900x700/?person"
              alt=""
              className="w-7 h-7 rounded-full object-cover"
            />
            <p className="font-lexend text-[14px] text-yl-20">Dianne Russell</p>
          </div>
          <p className="font-lexend text-yl-20 text-[17px] w-[90%] font-bold">
            Prestasi Akademis Lebih Baik dengan Pembelajaran Privat
          </p>
          <div className="flex flex-row text-yl-40 items-center gap-x-1">
            <span className="material-icons" style={{ fontSize: 18 }}>
              schedule
            </span>
            <p className="text-[14px] font-lexend">25 Apr 2021</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardArticle;
