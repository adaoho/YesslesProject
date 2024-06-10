import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import CardArticlePage from "./components/CardArticlePage";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import CardArticle from "./components/CardArticle";
import Aos from "aos";
import { useEffect, useState } from "react";
import { formatDateString } from "@/utils/static";
import SeoComp from "@/components/SeoComp";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { endPoint } from "@/utils/endpoint";

const ArticlePage = () => {
  const [page, setPage] = useState(1);

  const getArticle = async (page: number) => {
    try {
      const res = await fetch(
        endPoint + "/article/article-active?page=" + page + "&limit=12&search="
      );

      return await res.json();
    } catch (error) {
      console.log(error);
    }
  };

  const { data } = useQuery({
    queryKey: ["article", page],
    queryFn: () => getArticle(page),
    placeholderData: keepPreviousData,
  });

  const dataArtikel = data?.data?.items;
  const totalPage = data?.data?.totalPages;

  useEffect(() => {
    Aos.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  const buttonActive = `flex py-1 rounded-lg text-yl-10 items-center border-yl-10 border hover:bg-yl-10 hover:text-white transition-all`;
  const buttonInactive = `flex py-1 rounded-lg text-gray-500 items-center border-gray-500 border transition-all`;

  return (
    <>
      <section id="hero">
        <SeoComp
          title="Article di Yessles"
          description={`Berbagai Artikel dari Yessles Bimbingan No.1 di Madiun`}
        />
        <div
          className="w-full h-fit mt-[7%] lg:mt-[5.3%] flex flex-col justify-start items-center gap-y-5 pb-[5%] font-lexend"
          data-aos="fade-up"
        >
          {/* Breadcrumb */}
          <div className="w-full h-[140px] flex justify-center items-start text-yl-60 font-sans relative px-[8.3%] flex-col mt-7">
            <div className="flex flex-row gap-x-2 justify-center items-center font-light">
              <Link to={"/"}>
                {" "}
                <h1 className="hover:underline cursor-pointer">Yessles</h1>
              </Link>
              <IoIosArrowForward className="size-3" />
              <h1 className="underline">Article</h1>
            </div>
            <h1 className="text-[55px] font-bold font-raleway mt-2">
              Cerita dari Yessles
            </h1>
          </div>

          {/* Article Section */}
          <div className="grid grid-cols-2 w-full h-full px-[8%] gap-x-12">
            {/* Left Section */}
            <Link to={"/article/" + dataArtikel?.at(0)?.slug}>
              <div className="h-full flex justify-start flex-col gap-y-6 w-full group">
                <div className="w-full h-[330px] overflow-hidden rounded-lg bg-yellow-200">
                  <img
                    src={dataArtikel?.at(0)?.thumbnail}
                    alt=""
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-all"
                  />
                </div>
                <div className="truncate-multiline-2 h-fit">
                  <h1 className="font-lexend font-medium text-yl-60 text-[32px] w-full">
                    {dataArtikel?.at(0)?.title}
                  </h1>
                </div>
                <div className="flex flex-row text-yl-40 items-center gap-x-3">
                  <p className="font-lexend text-[16px] text-yl-60">
                    {dataArtikel?.at(0)?.User?.full_name}
                  </p>
                  <p>|</p>
                  <p className="text-[16px] font-lexend">
                    {" "}
                    {dataArtikel?.at(0)?.createdAt
                      ? formatDateString(dataArtikel?.at(0)?.createdAt)
                      : ""}
                  </p>
                </div>
              </div>
            </Link>

            {/* Right Section */}
            <div className="h-fit flex flex-col justify-between gap-y-9 w-full ">
              <CardArticle data={dataArtikel?.at(1)} other={true} />
              <CardArticle data={dataArtikel?.at(2)} other={true} />
              <CardArticle data={dataArtikel?.at(3)} other={true} />
            </div>
          </div>

          <div className="border-b-[1px] border-gray-400 w-[85%] px-[8%] my-10"></div>

          {/* Grid Card Component Article */}
          <div className="flex flex-row justify-between items-center w-full h-fit px-[8%]">
            <h1 className="text-[36px] font-raleway font-bold text-yl-60">
              <b className="text-gray-400">Artikel</b> Yessles
            </h1>
            <section id="lebih-banyak" className="hidden">
              <div className="flex flex-row gap-x-2 justify-center items-center hover:cursor-pointer hover:underline">
                <h1>Lebih Banyak Lagi</h1>
                <IoIosArrowForward className="size-3" />
              </div>
            </section>
          </div>

          <div
            className="grid grid-cols-3 xl:grid-cols-4 w-full h-fit gap-10 px-[8%]"
            data-aos="fade-up"
          >
            {dataArtikel?.map((data: any, index: number) => (
              //@ts-ignore
              <CardArticlePage key={index} data={data} />
            ))}
          </div>

          {/* Pagination */}
          {totalPage > 1 && (
            <div className="flex flex-row justify-center items-center gap-x-4 w-full mt-14">
              <button
                onClick={() => setPage((old) => old - 1)}
                disabled={page === 1}
                className={`${page == 1 ? buttonInactive : buttonActive} pr-3`}
              >
                <MdKeyboardArrowLeft className="size-7" />
                Prev
              </button>
              <button
                onClick={() => setPage((old) => old + 1)}
                disabled={page === totalPage}
                className={`${
                  page == totalPage ? buttonInactive : buttonActive
                } pl-3`}
              >
                Next
                <MdKeyboardArrowRight className="size-7" />
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ArticlePage;
