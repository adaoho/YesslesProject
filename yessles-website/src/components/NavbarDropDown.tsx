import { MdOutlineSchool } from "react-icons/md";
import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { program_navbar } from "@/database/program_navbar.json";
import { AiFillCaretDown } from "react-icons/ai";

const NavbarDropDown = ({ navBarButtonDropDown, open, setOpen }: any) => {
  const [selection, setSelection] = useState<number>(1);
  const [selectionType, setSelectionType] = useState<number>(1);
  let navigate = useNavigate();

  const onChangeSelection = (e: any) => {
    setSelection(e.target.value);
  };

  const onChangeSelectionType = (e: any) => {
    setSelectionType(e.target.value);
  };

  return (
    <>
      {open && (
        <>
          <div className="w-screen h-screen fixed z-10 top-0 flex flex-col animate-fade animate-duration-200 backdrop-blur-sm">
            {/* Drop Down Section */}
            <div className="bg-white/90 flex flex-col justify-between items-center relative z-50 top-0 shadow-lg backdrop-blur-md duration-500 opacity-100 w-screen h-[49%]">
              {/* Menu as from Navbar */}
              <div className="w-full h-fit flex flex-row justify-between items-center px-[8%] py-[23px]">
                <div
                  className="flex cursor-pointer"
                  onClick={() => {
                    navigate("/");
                    setOpen(!open);
                  }}
                >
                  <img src="/yessles_logo.svg" alt="" />
                </div>
                <div className="flex flex-row gap-x-4 z-10">
                  <button
                    className={navBarButtonDropDown}
                    onClick={() => {
                      navigate("/tentang");
                      setOpen(!open);
                    }}
                  >
                    Tentang Yessles
                  </button>
                  <button
                    className={navBarButtonDropDown}
                    onClick={() => {
                      navigate("/article");
                      setOpen(!open);
                    }}
                  >
                    Article
                  </button>
                  <button
                    onClick={() => setOpen(!open)}
                    className="h-[35px] gap-x-2 bg-yl-60 px-5 rounded-3xl text-white font-lexend text-[14px] flex justify-center items-center hover:bg-yl-30 transition-all"
                  >
                    Program & Paket Belajar
                    <AiFillCaretDown />
                  </button>
                </div>
              </div>

              {/* Content From Navbar */}
              <div className="w-full h-full flex px-[8%] gap-x-2 pt-3 flex-col">
                <div className="flex gap-x-5 w-full h-fit">
                  <div className="flex flex-row gap-x-8 h-[45px] relative w-full">
                    <input
                      type="radio"
                      name="program_id"
                      id="1"
                      value="1"
                      className="peer hidden"
                      onChange={onChangeSelection}
                    />
                    <label
                      htmlFor="1"
                      className={`px-7 flex items-center justify-center gap-x-2 ${
                        selection == 1
                          ? `border-b-[2px] border-b-black text-black`
                          : `text-gray-400`
                      }`}
                    >
                      <span className="material-symbols-outlined">school</span>
                      Program Belajar
                    </label>
                    <input
                      type="radio"
                      name="program_id"
                      id="2"
                      value="2"
                      className="peer hidden"
                      onChange={onChangeSelection}
                    />
                    <label
                      htmlFor="2"
                      className={`px-7 flex items-center justify-center gap-x-2  ${
                        selection == 2
                          ? `border-b-[2px] border-b-black text-black text`
                          : `text-gray-400`
                      }`}
                    >
                      <span className="material-symbols-outlined">package</span>
                      Paket Belajar
                    </label>
                    <div className="w-full border-b-[2px] border-dashed border-gray-300 absolute bottom-0 -z-10"></div>
                  </div>
                </div>

                {/* Content Paket Belajar */}
                <div className="h-full flex flex-row w-full justify-start gap-x-12 pt-6">
                  {selection == 2 && (
                    <div className="w-[15%] flex flex-col gap-y-5">
                      <div className="flex flex-row gap-x-2">
                        <input
                          type="radio"
                          name="selectiontype"
                          id="selection_id_1"
                          value="1"
                          className="peer hidden"
                          onChange={onChangeSelectionType}
                        />
                        <label
                          htmlFor="selection_id_1"
                          className={`${
                            selectionType == 1
                              ? `activestyle w-full capitalize`
                              : `linkstyle w-full capitalize`
                          }`}
                        >
                          Privat
                        </label>
                      </div>
                      <div className="flex flex-row gap-x-2">
                        <input
                          type="radio"
                          name="selectiontype"
                          id="selection_id_2"
                          value="2"
                          className="peer hidden"
                          onChange={onChangeSelectionType}
                        />
                        <label
                          htmlFor="selection_id_2"
                          className={`${
                            selectionType == 2
                              ? `activestyle w-full capitalize`
                              : `linkstyle w-full capitalize`
                          }`}
                        >
                          Semi Privat
                        </label>
                      </div>
                    </div>
                  )}

                  {/* Content Program Belajar */}
                  <div
                    className={`grid grid-cols-3 xl:grid-cols-4 mb-7 xl:mb-0 ${
                      selectionType == 1 ? `w-full` : `w-full`
                    }  justify-start items-start h-fit gap-y-4 gap-x-3`}
                  >
                    {selection == 1 ? (
                      <>
                        {program_navbar?.map(
                          (data, index) =>
                            data.type_name === "program_belajar" && (
                              <Fragment key={index}>
                                {data?.type.map((data, index) => (
                                  <Fragment key={index}>
                                    {data.title === "privat" &&
                                      data?.class.map((data, index) => (
                                        <div
                                          onClick={() => {
                                            selection == 1
                                              ? navigate(
                                                  `/program/${data.slug}`,
                                                  { replace: true }
                                                )
                                              : navigate(
                                                  `/paket/${data.slug}`,
                                                  { replace: true }
                                                );
                                            setOpen(!open);
                                          }}
                                          key={index}
                                          className="flex flex-row gap-x-3 justify-start items-center h-[53px] w-full text-[16px] font-bold py-3 rounded-lg px-2 hover:bg-yl-10/30 transition-all"
                                        >
                                          <div className="bg-yl-10 flex justify-center items-center size-10 rounded-lg">
                                            <MdOutlineSchool className="size-6 text-white" />
                                          </div>
                                          {data.label.split(" ").length ===
                                          4 ? (
                                            <>
                                              {data.label
                                                .split(" ")
                                                .slice(0, 2)
                                                .join(" ")}{" "}
                                              <br />{" "}
                                              {data.label
                                                .split(" ")
                                                .slice(2, 4)
                                                .join(" ")}
                                            </>
                                          ) : (
                                            data.label
                                          )}
                                        </div>
                                      ))}
                                  </Fragment>
                                ))}
                              </Fragment>
                            )
                        )}
                      </>
                    ) : (
                      <>
                        {program_navbar?.map(
                          (data, index) =>
                            data.type_name === "paket_belajar" && (
                              <Fragment key={index}>
                                {data?.type.map((data, index) => (
                                  <Fragment key={index}>
                                    {data.title === "semi_privat" &&
                                      selectionType == 2 &&
                                      data?.class.map((data, index) => (
                                        <div
                                          onClick={() => {
                                            selection == 1
                                              ? navigate(
                                                  `/program/${data.slug}`,
                                                  {
                                                    replace: true,
                                                  }
                                                )
                                              : navigate(
                                                  `/paket/${data.slug}`,
                                                  {
                                                    replace: true,
                                                  }
                                                );
                                            setOpen(!open);
                                          }}
                                          key={index}
                                          className="flex flex-row gap-x-3 justify-start items-center h-[53px] w-full text-[16px] font-bold py-3 rounded-lg px-2 hover:bg-yl-10/30 transition-all"
                                        >
                                          <div className="bg-yl-10 flex justify-center items-center size-10 rounded-lg">
                                            <MdOutlineSchool className="size-6 text-white" />
                                          </div>
                                          {data.label}
                                        </div>
                                      ))}
                                  </Fragment>
                                ))}
                                {data?.type.map((data, index) => (
                                  <Fragment key={index}>
                                    {data.title === "privat" &&
                                      selectionType == 1 &&
                                      data?.class.map((data, index) => (
                                        <div
                                          onClick={() => {
                                            selection == 1
                                              ? navigate(
                                                  `/program/${data.slug}`,
                                                  {
                                                    replace: true,
                                                  }
                                                )
                                              : navigate(
                                                  `/paket/${data.slug}`,
                                                  {
                                                    replace: true,
                                                  }
                                                );
                                            setOpen(!open);
                                          }}
                                          key={index}
                                          className="flex flex-row gap-x-3 justify-start items-center h-[53px] w-full text-[16px] font-bold py-3 rounded-lg px-2 hover:bg-yl-10/30 transition-all"
                                        >
                                          <div className="bg-yl-10 flex justify-center items-center size-10 rounded-lg">
                                            <MdOutlineSchool className="size-6 text-white" />
                                          </div>
                                          {data.label}
                                        </div>
                                      ))}
                                  </Fragment>
                                ))}
                              </Fragment>
                            )
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Test Gaya Belajar */}
              <div className="w-full bg-yl-60 h-fit bottom-0 flex justify-between items-center px-[8%] py-4">
                <div className="flex flex-col">
                  <h1 className="text-white text-[16px] font-bold">
                    Test Gaya Belajar
                  </h1>
                  <h1 className="text-gray-200 text-[14px]">
                    Gaya Belajar adalah cara mudah untuk menyerap, mengelola,
                    menyimpan, dan menerapkan informasi.
                  </h1>
                </div>
                <Link
                  to={`https://bit.ly/tesgayabelajaryessles`}
                  target="_blank"
                >
                  <div className="bg-yl-10 text-white px-4 py-1 rounded-md hover:bg-yl-30 hover:text-white transition-all hover:scale-105 text-[16px]">
                    <h1>Ikuti Test Gaya Belajar</h1>
                  </div>
                </Link>
              </div>
            </div>

            {/* Background Black */}
            <div
              className="h-[51%] bg-black/70 w-full animate-fade animate-duration-100"
              onClick={() => setOpen(!open)}
            ></div>
          </div>
        </>
      )}
    </>
  );
};

export default NavbarDropDown;
