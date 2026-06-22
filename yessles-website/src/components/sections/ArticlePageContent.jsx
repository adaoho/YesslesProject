import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import CardArticlePage from "../CardArticlePage";
import { SideArticleCard, FeaturedArticleCard } from "../ArticleCards";
import Footer from "../Footer";
import { FadeIn } from "../ui/FadeIn";
import { useState } from "react";
import { useQuery, keepPreviousData, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { endPoint } from "../../utils/Endpoint";

const queryClient = new QueryClient();

function ArticleContent() {
  const [page, setPage] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ["article", page],
    queryFn: async () => {
      try {
        const res = await fetch(`${endPoint}/article/article-active?page=${page}&limit=12&search=`);
        return await res.json();
      } catch (error) {
        console.log(error);
      }
    },
    placeholderData: keepPreviousData,
  });

  const dataArtikel = data?.data?.items;
  const totalPage = data?.data?.totalPages;
  const featured = dataArtikel?.at(0);

  return (
    <>
      <section id="hero">
        <div className="w-full mt-[28%] md:mt-[9%] lg:mt-[8%] px-[5%] md:px-[8%] font-lexend">
          {/* ── Hero header ── */}
          <FadeIn direction="up">
            <div className="flex flex-col gap-y-2">
              <div className="flex flex-row gap-x-2 items-center text-yl-60 font-light">
                <a href="/" className="hover:underline cursor-pointer text-[13px] md:text-base">
                  Yessles
                </a>
                <IoIosArrowForward className="size-3" />
                <span className="underline text-[13px] md:text-base">Article</span>
              </div>
              <h1 className="text-[34px] md:text-[56px] font-bold font-raleway leading-[1.05] text-yl-20">
                Cerita dari <span className="text-yl-10"> Yessles</span>
              </h1>
              <p className="text-[13px] md:text-[15px] text-gray-500 max-w-xl leading-relaxed">
                Tips belajar, cerita inspiratif, dan kabar terbaru seputar dunia pendidikan untuk si buah hati.
              </p>
            </div>
          </FadeIn>

          {/* ── Featured ── */}
          <FadeIn direction="up">
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-8 lg:gap-12 mt-8 md:mt-12">
              {/* Big featured article */}
              <FeaturedArticleCard data={featured} />

              {/* Side list */}
              <div className="flex flex-col gap-y-4 h-full">
                {(dataArtikel?.slice(1, 4) ?? [undefined, undefined, undefined]).map((item, i) => (
                  <SideArticleCard key={i} data={item} />
                ))}
              </div>
            </div>
          </FadeIn>

          {/* ── All articles ── */}
          <div className="border-t border-gray-200 w-full mt-12 md:mt-16 pt-10 md:pt-12">
            <h2 className="text-[24px] md:text-[36px] font-raleway font-bold text-yl-20 mb-6 md:mb-8">
              <span className="text-yl-10">Artikel</span> Yessles
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full gap-4 md:gap-6">
              {(dataArtikel ?? (isLoading ? Array.from({ length: 8 }) : [])).map((item, index) => (
                <CardArticlePage key={index} data={item} />
              ))}
            </div>

            {totalPage > 1 && (
              <div className="flex flex-row justify-center items-center gap-x-3 w-full mt-10 md:mt-14">
                <button
                  onClick={() => setPage((old) => old - 1)}
                  disabled={page === 1}
                  className="flex items-center gap-x-1 pl-2 pr-4 py-2 rounded-full border text-[13px] font-medium font-lexend transition-all disabled:opacity-40 disabled:cursor-not-allowed enabled:hover:bg-yl-60 enabled:hover:text-white enabled:hover:border-yl-60 border-gray-300 text-gray-600"
                >
                  <MdKeyboardArrowLeft className="size-5" />
                  Prev
                </button>
                <span className="text-[13px] font-lexend text-gray-500 px-2">
                  {page} / {totalPage}
                </span>
                <button
                  onClick={() => setPage((old) => old + 1)}
                  disabled={page === totalPage}
                  className="flex items-center gap-x-1 pr-2 pl-4 py-2 rounded-full border text-[13px] font-medium font-lexend transition-all disabled:opacity-40 disabled:cursor-not-allowed enabled:hover:bg-yl-60 enabled:hover:text-white enabled:hover:border-yl-60 border-gray-300 text-gray-600"
                >
                  Next
                  <MdKeyboardArrowRight className="size-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="mt-16" />
      <Footer />
    </>
  );
}

export default function ArticlePageContent() {
  return (
    <QueryClientProvider client={queryClient}>
      <ArticleContent />
    </QueryClientProvider>
  );
}
