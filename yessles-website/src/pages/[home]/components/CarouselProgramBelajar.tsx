import { TbPackage } from "react-icons/tb";
import { MdOutlineSchool } from "react-icons/md";
import { TbLayoutDashboard } from "react-icons/tb";
import { program_yessles } from "@/database/program.json";
import { useState } from "react";
import CardProgramYessles from "./CardProgramYessles";
import { toast } from "sonner";
import { useParams } from "react-router-dom";

const CarouselProgramBelajar = ({
  programButton = 1,
  hideButton,
  showButton,
  title,
  subtitle,
}: any) => {
  const [selectProgram, setSelectProgram] = useState<any>(programButton);
  const { slug } = useParams();

  return (
    <>
      <div className="flex w-[100dvw] h-[700px] items-center pt-[8%]">
        <div className="flex w-full flex-col">
          {/* Header Section Program */}
          <div className="flex flex-row bg-blue-gray-200 h-full w-full justify-between items-center px-[8%]">
            <div className="flex flex-col relative ">
              <div className="bg-yl-30 w-[25px] h-[1px] rounded-[20px] mb-2 absolute -left-8 top-3"></div>
              <h1 className="text-[18px] text-yl-30">
                {title ? title : "Program & Paket Belajar"}
              </h1>
              <h1 className="text-[30px] font-bold text-yl-60 font-lexend">
                {subtitle ? subtitle : "Belajar di Yessles"}
              </h1>
            </div>

            {/* Button Type */}
            <div className="flex flex-row gap-x-2">
              {!hideButton && (
                <>
                  <div className="flex flex-row gap-x-2">
                    <button
                      onClick={() => {
                        toast.success("Semua Kategori Program & Paket Belajar");
                        setSelectProgram(1);
                      }}
                      className={`${
                        selectProgram == 1 ? `activestyle` : `linkstyle`
                      }`}
                    >
                      <TbLayoutDashboard className="size-5" />
                      Semua
                    </button>
                  </div>
                  <div className="flex flex-row gap-x-2">
                    <button
                      onClick={() => {
                        toast.success("Kategori Program Belajar");
                        setSelectProgram(2);
                      }}
                      className={`${
                        selectProgram == 2 ? `activestyle` : `linkstyle`
                      }`}
                    >
                      <MdOutlineSchool className="size-6" />
                      Program Belajar
                    </button>
                  </div>
                  <div className="flex flex-row gap-x-2">
                    <button
                      onClick={() => {
                        toast.success("Kategori Paket Belajar");
                        setSelectProgram(3);
                      }}
                      className={`${
                        selectProgram == 3 ? `activestyle` : `linkstyle`
                      }`}
                    >
                      <TbPackage className="size-6" />
                      Paket Belajar
                    </button>
                  </div>
                </>
              )}

              {showButton == 1 && (
                <div className="flex flex-row gap-x-2">
                  <button
                    onClick={() => setSelectProgram(1)}
                    className={`${
                      selectProgram == 1 ? `activestyle` : `linkstyle`
                    }`}
                  >
                    <TbLayoutDashboard className="size-5" />
                    Semua
                  </button>
                </div>
              )}
              {showButton == 2 && (
                <div className="flex flex-row gap-x-2">
                  <button
                    onClick={() => setSelectProgram(2)}
                    className={`${
                      selectProgram == 2 ? `activestyle` : `linkstyle`
                    }`}
                  >
                    <MdOutlineSchool className="size-5" />
                    Program Belajar
                  </button>
                </div>
              )}
              {showButton == 3 && (
                <div className="flex flex-row gap-x-2">
                  <button
                    onClick={() => setSelectProgram(3)}
                    className={`${
                      selectProgram == 3 ? `activestyle` : `linkstyle`
                    }`}
                  >
                    <TbPackage className="size-6" />
                    Paket Belajar
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Caraousel */}
          <div className="flex flex-row pl-[8%] w-screen mt-2 overflow-x-auto gap-x-8">
            <div className="overflow-x-auto flex flex-row w-full h-full items-start justify-start py-5 gap-x-5 pr-[8%] snap-x snap-mandatory">
              {selectProgram == 2
                ? program_yessles?.map(
                    (data, index) =>
                      data?.type === "program_belajar" &&
                      data?.slug !== slug && (
                        <CardProgramYessles key={index} data={data} />
                      )
                  )
                : selectProgram == 3
                ? program_yessles?.map(
                    (data, index) =>
                      data?.type === "paket_belajar" &&
                      data?.slug !== slug && (
                        <CardProgramYessles key={index} data={data} />
                      )
                  )
                : program_yessles?.map((data, index) => (
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
