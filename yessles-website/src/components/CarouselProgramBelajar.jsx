import { TbPackage, TbLayoutDashboard } from "react-icons/tb";
import { MdOutlineSchool } from "react-icons/md";
import { useState } from "react";
import CardProgramYessles from "./CardProgramYessles";
import { Toaster, toast } from "sonner";
import programData from "../database/program.json";

const { program_yessles } = programData;

const CarouselProgramBelajar = ({ programButton = 1, hideButton, showButton, title, subtitle, currentSlug }) => {
  const [selectProgram, setSelectProgram] = useState(programButton);

  const filteredPrograms = program_yessles.filter((data) => {
    if (currentSlug && data.slug === currentSlug) return false;
    if (selectProgram == 2) return data.type === "program_belajar";
    if (selectProgram == 3) return data.type === "paket_belajar";
    return true;
  });

  return (
    <>
      <Toaster />
      <div className="flex w-full h-auto md:h-[700px] items-center pt-6 md:pt-[8%]">
        <div className="flex w-full flex-col">
          <div className="flex flex-row h-full w-full justify-between items-center px-[5%] md:px-[8%]">
            <div className="flex flex-col relative">
              <div className="hidden md:block bg-yl-30 w-[25px] h-[1px] rounded-[20px] mb-2 absolute -left-8 top-3"></div>

              <h1 className="text-[15px] md:text-[18px] text-yl-30">{title || "Program & Paket Belajar"}</h1>
              <h1 className="text-[22px] md:text-[30px] font-bold text-yl-60 font-lexend leading-tight w-[80%] md:w-full">
                {subtitle || "Belajar di Yessles"}
              </h1>
            </div>

            <div className="flex flex-row gap-x-1 md:gap-x-2 flex-wrap justify-end">
              {!hideButton && (
                <>
                  <button
                    onClick={() => {
                      toast.success("Semua Kategori");
                      setSelectProgram(1);
                    }}
                    className={`${
                      selectProgram == 1 ? "activestyle" : "linkstyle"
                    } !px-2 md:!px-[15px] !py-1 md:!py-[8px] text-[11px] md:text-[14px]`}
                  >
                    <TbLayoutDashboard className="size-4" />
                    <span className="hidden sm:inline">Semua</span>
                  </button>
                  <button
                    onClick={() => {
                      toast.success("Program Belajar");
                      setSelectProgram(2);
                    }}
                    className={`${
                      selectProgram == 2 ? "activestyle" : "linkstyle"
                    } !px-2 md:!px-[15px] !py-1 md:!py-[8px] text-[11px] md:text-[14px]`}
                  >
                    <MdOutlineSchool className="size-4" />
                    <span className="hidden sm:inline">Program Belajar</span>
                  </button>
                  <button
                    onClick={() => {
                      toast.success("Paket Belajar");
                      setSelectProgram(3);
                    }}
                    className={`${
                      selectProgram == 3 ? "activestyle" : "linkstyle"
                    } !px-2 md:!px-[15px] !py-1 md:!py-[8px] text-[11px] md:text-[14px]`}
                  >
                    <TbPackage className="size-4" />
                    <span className="hidden sm:inline">Paket Belajar</span>
                  </button>
                </>
              )}
              {showButton == 1 && (
                <button onClick={() => setSelectProgram(1)} className={selectProgram == 1 ? "activestyle" : "linkstyle"}>
                  <TbLayoutDashboard className="size-5" />
                  <span className="hidden sm:inline">Semua</span>
                </button>
              )}
              {showButton == 2 && (
                <button onClick={() => setSelectProgram(2)} className={selectProgram == 2 ? "activestyle" : "linkstyle"}>
                  <MdOutlineSchool className="size-5" />
                  <span className="hidden sm:inline">Program Belajar</span>
                </button>
              )}
              {showButton == 3 && (
                <button onClick={() => setSelectProgram(3)} className={selectProgram == 3 ? "activestyle" : "linkstyle"}>
                  <TbPackage className="size-6" />
                  <span className="hidden sm:inline">Paket Belajar</span>
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-row pl-[5%] md:pl-[8%] w-full mt-2 overflow-x-auto">
            <div className="overflow-x-auto flex flex-row w-full h-full items-start justify-start py-4 md:py-5 gap-x-4 md:gap-x-5 pr-[5%] md:pr-[8%] snap-x snap-mandatory">
              {filteredPrograms.map((data, index) => (
                <CardProgramYessles key={index} data={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselProgramBelajar;
