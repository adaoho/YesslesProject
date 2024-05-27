import { BiLink } from "react-icons/bi";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "./components/Footer";
import { Link, useParams } from "react-router-dom";
import { toast } from "sonner";
import { IoIosArrowForward } from "react-icons/io";
import CardArticlePage from "./components/CardArticlePage";
import { useEffect, useState } from "react";
import { articles } from "../../database/articles.json";
import { formatDateString } from "@/utils/static";
import { Helmet } from "react-helmet-async";

interface dataArtikel {
  id: number;
  slug: string;
  title: string;
  publication_date: string;
  author: string;
  authorProfile: string;
  content: string | TrustedHTML | undefined;
  thumbnail: string;
  description: string;
}

const SubArticlePage = () => {
  const [dataArtikel, setDataArtikel] = useState<dataArtikel>();
  const { slug } = useParams();
  const currentUrl = window.location.href;

  useEffect(() => {
    //@ts-ignore
    articles?.map((data, index) => {
      if (data.slug === slug) {
        setDataArtikel(data);
      }
    });
  }, [slug]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Link Berhasil di Copy");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const linkedinShare = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      window.location.href
    )}`;
    window.open(url, "_blank", "noopener noreferrer");
  };

  const facebookShare = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      window.location.href
    )}`;
    window.open(url, "_blank", "noopener noreferrer");
  };

  const whatsappShare = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      window.location.href
    )}`;
    window.open(url, "_blank", "noopener noreferrer");
  };

  return (
    <>
      <Helmet>
        <title>{dataArtikel?.title}</title>
        <meta name="description" content={dataArtikel?.description} />
        <meta property="og:title" content={dataArtikel?.title} />
        <meta property="og:description" content={dataArtikel?.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentUrl} />
        {dataArtikel?.thumbnail && (
          <meta property="og:image" content={dataArtikel?.thumbnail} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={dataArtikel?.title} />
        <meta name="twitter:description" content={dataArtikel?.description} />
        {dataArtikel?.thumbnail && (
          <meta name="twitter:image" content={dataArtikel?.thumbnail} />
        )}
      </Helmet>

      <div className="w-[80%] lg:w-[65%] h-fit mt-[26%] sm:mt-[16%] md:mt-[13%] lg:mt-[10%] xl:mt-[8%] flex flex-col justify-start items-center gap-y-5 font-lexend mx-auto ">
        <div className="w-full flex justify-start items-start">
          <h1 className="text-left text-[24px] md:text-[30px] lg:text-[42px] font-bold">
            {dataArtikel?.title}
          </h1>
        </div>

        <div className="flex flex-row gap-x-3 w-full justify-between text-left">
          <div className="flex flex-col lg:flex-row gap-x-2 md:text-[14px] text-[12px] gap-y-1">
            <h1>{dataArtikel?.author}</h1>
            <h1 className="hidden lg:block">|</h1>
            <h1>
              {dataArtikel?.publication_date
                ? formatDateString(dataArtikel?.publication_date)
                : ""}
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-x-2 justify-start items-start lg:justify-center lg:items-center gap-y-1">
            <h1 className="text-[12px] lg:text-[14px]">Share on:</h1>
            <div className="flex flex-row gap-x-2">
              <BiLink
                className="hover:text-yl-10 lg:size-5"
                onClick={handleCopy}
              />
              <FaWhatsapp
                className="hover:text-yl-10 lg:size-5"
                onClick={whatsappShare}
              />
              <AiFillFacebook
                className="hover:text-yl-10 lg:size-5"
                onClick={facebookShare}
              />
              <AiFillLinkedin
                className="hover:text-yl-10 lg:size-5"
                onClick={linkedinShare}
              />
            </div>
          </div>
        </div>

        <img
          src={dataArtikel?.thumbnail}
          alt=""
          className="w-full h-[340px] object-cover rounded-lg group-hover:scale-105 transition-all mb-4"
        />

        {/* Body Content */}
        <div
          className="font-sans leading-8 mb-14"
          dangerouslySetInnerHTML={{ __html: dataArtikel?.content as string }}
        />
      </div>

      <div className="border-b-[1px] border-gray-400 mx-[8%] mb-10"></div>

      <div className="flex flex-col lg:flex-row justify-between items-center w-full h-fit px-[8%] mb-8">
        <h1 className="text-[36px] font-raleway font-bold text-yl-60">
          <b className="text-gray-400">Artikel</b> Terkait
        </h1>
        <Link to={"/article"}>
          <div className="flex flex-row gap-x-2 justify-center items-center hover:cursor-pointer hover:underline">
            <h1>Lebih Banyak Lagi</h1>
            <IoIosArrowForward className="size-3" />
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full h-fit gap-10 px-[8%] mb-20">
        {articles.map((data, index) => {
          if (data.slug !== slug) {
            return (
              //@ts-ignore
              <CardArticlePage key={index} data={data} />
            );
          }
        })}
      </div>

      <Footer />
    </>
  );
};

export default SubArticlePage;
