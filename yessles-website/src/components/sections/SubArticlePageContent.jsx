import { BiLink } from "react-icons/bi";
import { AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Footer from "../Footer";
import CardArticlePage from "../CardArticlePage";
import { formatDateString } from "../../utils/Static";
import { keepPreviousData, useQuery, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { endPoint } from "../../utils/Endpoint";
import { toast, Toaster } from "sonner";

const queryClient = new QueryClient();

function parseBodyHtml(raw) {
  if (!raw) return '';
  let str = raw;
  while (typeof str === 'string' && str.startsWith('"') && str.endsWith('"')) {
    try {
      const parsed = JSON.parse(str);
      if (typeof parsed === 'string') str = parsed;
      else break;
    } catch {
      str = str.slice(1, -1);
      break;
    }
  }
  return (
    str
      // Strip inline styles so paragraph spacing is governed only by our CSS,
      // not by margins/line-heights the CMS editor injects (cause of uneven gaps).
      .replace(/\sstyle=("[^"]*"|'[^']*')/gi, "")
      // Remove "empty" paragraphs (br / nbsp / whitespace only) that add stray gaps.
      .replace(/<p[^>]*>(?:\s|&nbsp;|&#160;|<br\s*\/?>)*<\/p>/gi, "")
  );
}

function ArticleSkeleton() {
  return (
    <div className="w-[90%] sm:w-[85%] lg:w-[68%] xl:w-[58%] mx-auto mt-[26%] sm:mt-[16%] md:mt-[13%] lg:mt-[10%] xl:mt-[8%] animate-pulse">
      {/* Breadcrumb */}
      <div className="flex gap-x-2 mb-5">
        <div className="h-3 w-16 bg-gray-200 rounded" />
        <div className="h-3 w-12 bg-gray-200 rounded" />
      </div>
      {/* Title */}
      <div className="space-y-3">
        <div className="h-8 md:h-10 w-full bg-gray-200 rounded-lg" />
        <div className="h-8 md:h-10 w-3/4 bg-gray-200 rounded-lg" />
      </div>
      {/* Author + share */}
      <div className="flex items-center gap-x-3 mt-6 pb-5 border-b border-gray-200">
        <div className="size-10 rounded-full bg-gray-200 flex-shrink-0" />
        <div className="space-y-2">
          <div className="h-3 w-32 bg-gray-200 rounded" />
          <div className="h-3 w-24 bg-gray-200 rounded" />
        </div>
      </div>
      {/* Hero image */}
      <div className="w-full h-[220px] md:h-[400px] bg-gray-200 rounded-2xl mt-6" />
      {/* Body lines */}
      <div className="mt-8 space-y-3.5">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className={`h-4 bg-gray-200 rounded ${i % 4 === 3 ? "w-2/3" : "w-full"}`} />
        ))}
      </div>
    </div>
  );
}

function SubArticleContent({ slug }) {
  const getArticle = async () => {
    try {
      const res = await fetch(`${endPoint}/article/article-active?page=1&limit=100&search=`);
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  };

  const { data } = useQuery({
    queryKey: ["article"],
    queryFn: getArticle,
    placeholderData: keepPreviousData,
  });

  const dataArtikel = data?.data?.items;
  const dataDetailArtikel = dataArtikel?.find((d) => d.slug === slug);
  const related = dataArtikel?.filter((d) => d.slug !== slug)?.slice(0, 4) ?? [];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Link Berhasil di Copy");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const openShare = (url) => window.open(url, "_blank", "noopener noreferrer");
  const linkedinShare = () =>
    openShare(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`);
  const facebookShare = () =>
    openShare(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`);
  const whatsappShare = () => openShare(`https://api.whatsapp.com/send?text=${encodeURIComponent(window.location.href)}`);

  const shareButtons = [
    { Icon: BiLink, onClick: handleCopy, label: "Salin link" },
    { Icon: FaWhatsapp, onClick: whatsappShare, label: "WhatsApp" },
    { Icon: AiFillFacebook, onClick: facebookShare, label: "Facebook" },
    { Icon: AiFillLinkedin, onClick: linkedinShare, label: "LinkedIn" },
  ];

  return (
    <>
      <Toaster />
      {!data ? (
        <ArticleSkeleton />
      ) : (
        <>
      <motion.article
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-[90%] sm:w-[85%] lg:w-[68%] xl:w-[58%] mx-auto mt-[26%] sm:mt-[16%] md:mt-[13%] lg:mt-[10%] xl:mt-[8%] font-lexend"
      >
        {/* Breadcrumb */}
        <div className="flex flex-row gap-x-2 items-center text-yl-60 font-light mb-4">
          <a href="/" className="hover:underline text-[12px] md:text-[13px]">
            Yessles
          </a>
          <IoIosArrowForward className="size-3" />
          <a href="/article" className="hover:underline text-[12px] md:text-[13px]">
            Article
          </a>
        </div>

        {/* Title */}
        <h1 className="text-left text-[26px] md:text-[34px] lg:text-[42px] font-bold font-raleway leading-[1.12] text-yl-20">
          {dataDetailArtikel?.title}
        </h1>

        {/* Author + share */}
        <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-x-3 w-full justify-between items-start sm:items-center mt-5 pb-5 border-b border-gray-200">
          <div className="flex flex-row items-center gap-x-3">
            <div className="size-10 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
              <img src={dataDetailArtikel?.User?.profile_picture} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] md:text-[14px] font-semibold text-yl-20">
                {dataDetailArtikel?.User?.full_name}
              </span>
              <span className="text-[12px] text-gray-400">
                {dataDetailArtikel?.createdAt ? formatDateString(dataDetailArtikel?.createdAt) : ""}
              </span>
            </div>
          </div>

          <div className="flex flex-row items-center gap-x-2">
            <span className="text-[12px] md:text-[13px] text-gray-400 mr-1">Bagikan:</span>
            {shareButtons.map(({ Icon, onClick, label }) => (
              <button
                key={label}
                onClick={onClick}
                aria-label={label}
                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-yl-60 hover:border-yl-60 transition-all"
              >
                <Icon className="size-[17px]" />
              </button>
            ))}
          </div>
        </div>

        {/* Hero image */}
        <img
          src={dataDetailArtikel?.thumbnail}
          alt=""
          className="w-full h-[220px] md:h-[400px] object-cover rounded-2xl mt-6 bg-gray-100"
        />

        {/* Body */}
        <div
          className="font-sans text-gray-700 leading-7 text-[15px] md:text-[16px] mt-8 mb-14 w-full max-w-none
            [&_h1]:text-[24px] [&_h1]:font-bold [&_h1]:text-yl-20 [&_h1]:mt-8 [&_h1]:mb-3
            [&_h2]:text-[21px] [&_h2]:font-bold [&_h2]:text-yl-20 [&_h2]:mt-8 [&_h2]:mb-3
            [&_h3]:text-[18px] [&_h3]:font-semibold [&_h3]:text-yl-20 [&_h3]:mt-6 [&_h3]:mb-2
            [&_p]:mb-3 [&_a]:text-yl-60 [&_a]:underline
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_li]:mb-1
            [&_img]:rounded-xl [&_img]:my-6 [&_img]:w-full
            [&_blockquote]:border-l-4 [&_blockquote]:border-yl-60 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-600 [&_blockquote]:my-4
            [&_strong]:text-yl-20"
          dangerouslySetInnerHTML={{
            __html: parseBodyHtml(dataDetailArtikel?.body),
          }}
        />
      </motion.article>

      {/* Related */}
      <div className="px-[5%] md:px-[8%] border-t border-gray-200 pt-10 md:pt-12 mb-20">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-y-2 mb-6 md:mb-8">
          <h2 className="text-[24px] md:text-[36px] font-raleway font-bold text-yl-20">
            <span className="text-yl-10">Artikel</span> Terkait
          </h2>
          <a
            href="/article"
            className="group flex flex-row gap-x-1.5 items-center text-yl-60 text-[13px] md:text-[14px] font-medium"
          >
            Lebih Banyak Lagi
            <IoIosArrowForward className="size-3 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-4 md:gap-6">
          {(related.length ? related : Array.from({ length: 4 })).map((item, index) => (
            <CardArticlePage key={index} data={item} />
          ))}
        </div>
      </div>
        </>
      )}

      <Footer />
    </>
  );
}

export default function SubArticlePageContent({ slug }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SubArticleContent slug={slug} />
    </QueryClientProvider>
  );
}
