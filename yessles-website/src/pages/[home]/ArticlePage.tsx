import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import CardArticlePage from "./components/CardArticlePage";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import CardArticle from "./components/CardArticle";
import { articles } from "@/database/articles.json";
import Aos from "aos";
import { useEffect } from "react";

const ArticlePage = () => {
  useEffect(() => {
    Aos.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <section id="hero">
        <div
          className="w-full h-fit mt-[5.3%] flex flex-col justify-start items-center gap-y-5 pb-[5%] font-lexend"
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
          <div className="flex flex-row w-full h-full px-[8%] gap-x-12">
            {/* Left Section */}
            <div className="h-full flex justify-start flex-col gap-y-6 w-[55%] group ">
              <div className="w-full h-full overflow-hidden rounded-lg">
                <img
                  src="https://ik.imagekit.io/9nm0rr5hka/Yessles/thumbnail_4.png?updatedAt=1709279422996"
                  alt=""
                  className="w-full h-[330px] object-cover rounded-lg group-hover:scale-105 transition-all"
                />
              </div>
              <h1 className="font-lexend font-medium text-yl-60 text-[32px] w-[80%] leading-10">
                Mengasah Potensi Anak Melalui Pendidikan Inklusif: Peran Orang
                Tua
              </h1>
              <div className="flex flex-row text-yl-40 items-center gap-x-3">
                <p className="font-lexend text-[16px] text-yl-60">
                  Dian Pratiwi
                </p>
                <p>|</p>
                <p className="text-[16px] font-lexend">2024-02-03</p>
              </div>
            </div>

            {/* Right Section */}
            <div className="h-fit flex flex-col justify-between gap-y-9 w-[60%] ">
              <CardArticle data={articles[0]} other={true} />
              <CardArticle data={articles[1]} other={true} />
              <CardArticle data={articles[2]} other={true} />
            </div>
          </div>

          <div className="border-b-[1px] border-gray-400 w-[85%] px-[8%] my-10"></div>

          {/* Grid Card Component Article */}
          <div className="flex flex-row justify-between items-center w-full h-fit px-[8%]">
            <h1 className="text-[36px] font-raleway font-bold text-yl-60">
              <b className="text-gray-400">Artikel</b> Yessles
            </h1>
            <div className="flex flex-row gap-x-2 justify-center items-center hover:cursor-pointer hover:underline">
              <h1>Lebih Banyak Lagi</h1>
              <IoIosArrowForward className="size-3" />
            </div>
          </div>
          <div
            className="grid grid-cols-4 w-full h-fit gap-10 px-[8%]"
            data-aos="fade-up"
          >
            <CardArticlePage />
            <CardArticlePage />
            <CardArticlePage />
            <CardArticlePage />
            <CardArticlePage />
            <CardArticlePage />
            <CardArticlePage />
            <CardArticlePage />
            <CardArticlePage />
            <CardArticlePage />
            <CardArticlePage />
            <CardArticlePage />
          </div>

          {/* Pagination */}
          <div className="flex flex-row justify-center items-center gap-x-4 pt-5">
            <MdKeyboardArrowLeft />
            <h1>1</h1>
            <h1>2</h1>
            <h1>3</h1>
            <MdKeyboardArrowRight />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ArticlePage;
