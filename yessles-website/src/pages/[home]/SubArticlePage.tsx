import { BiLink } from "react-icons/bi";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "./components/Footer";
import { Link, useLocation } from "react-router-dom";
import { toast } from "sonner";
import { IoIosArrowForward } from "react-icons/io";
import CardArticlePage from "./components/CardArticlePage";

const SubArticlePage = () => {
  let location = useLocation();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(location.pathname);
      toast.success("Link Berhasil di Copy");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const linkedinShare = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      location.pathname
    )}`;
    window.open(url, "_blank", "noopener noreferrer");
  };

  const facebookShare = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      location.pathname
    )}`;
    window.open(url, "_blank", "noopener noreferrer");
  };

  const whatsappShare = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      location.pathname
    )}`;
    window.open(url, "_blank", "noopener noreferrer");
  };

  return (
    <>
      <div className="w-2/4 h-fit mt-[8%] flex flex-col justify-start items-center gap-y-5 pb-[5%] font-lexend mx-auto">
        <h1 className="text-left text-[42px] font-bold">
          Barbie VS Oppenheimer: Marketing Film Sukses Yang Tak Terduga
        </h1>

        <div className="flex flex-row gap-x-3 w-full justify-between ">
          <div className="flex flex-row gap-x-2">
            <h1>Kornelius Harda Wicaksana</h1>
            <h1>|</h1>
            <h1>16 April 2024</h1>
          </div>

          <div className="flex flex-row gap-x-2 justify-center items-center">
            <h1 className="text-[12px]">Share on:</h1>
            <BiLink className="hover:text-yl-10" onClick={handleCopy} />
            <FaWhatsapp className="hover:text-yl-10" onClick={whatsappShare} />
            <AiFillFacebook
              className="hover:text-yl-10"
              onClick={facebookShare}
            />
            <AiFillLinkedin
              className="hover:text-yl-10"
              onClick={linkedinShare}
            />
          </div>
        </div>

        <img
          src="https://ik.imagekit.io/9nm0rr5hka/Yessles/thumbnail_4.png?updatedAt=1709279422996"
          alt=""
          className="w-full h-[340px] object-cover rounded-lg group-hover:scale-105 transition-all"
        />

        <p className="leading-8 font-sans text-left">
          Film adalah salah satu sarana hiburan yang sangat populer di setiap
          belahan dunia. Apalagi sejak muncul situs streaming seperti Netflix,
          Disney+, Amazon Prime Video, Hulu dan sejenisnya. Durasi nonton film
          masyarakat global pun naik drastis. Namun, ini adalah kabar buruk bagi
          para pemilik bioskop. Perubahan cara masyarakat dalam menonton film
          membuat mereka harus bekerja lebih keras dalam memasarkan film yang
          mereka jual. Oleh karena itu dibutuhkan sebuah strategi efektif dalam
          memasarkan film. Fenomena yang terjadi pada film Barbie dan
          Oppenheimer bisa menjadi studi kasus yang bagus. Fenomena menarik
          terjadi pada tahun 2023, dimana dua buah film: Barbie dan Oppenheimer
          menjadi topik hangat lewat duel rivalitas marketing mereka. Rivalitas
          disini bukan berarti hal negatif karena fenomena Barbie VS Oppenheimer
          atau Barbieheimer memberikan kesuksesan bagi kedua film tersebut. Mari
          kita menelusuri lebih dalam tetang Barbieheimer ini.
        </p>

        <h1 className="text-left font-bold text-[20px] w-full">
          Lahirnya Barbieheimer
        </h1>

        <p className="leading-8 font-sans text-left">
          Awal mula tercipta fenomena Barbieheimer karena film Barbie dan
          Oppenheimer rilis pada tanggal yang sama di 21 Juli, 2023. Yang satu
          tentang kehidupan boneka barbie selayaknya manusia dengan nuansa
          ceria. Sementara yang satunya tentang biografi nuansa kelam J. Robert
          Oppenheimer, seorang pencipta senjata nuklir. Kontras tema dari kedua
          film ini yang sangat kentara menciptakan sebuah sensasi luar biasa di
          internet. Orang-orang mulai membanding-bandingkan Barbie dan
          Oppenheimer lewat banyak konten meme, lelucon, dan perdebatan.
          Viralitas ini membantu pemasaran bagi kedua film secara tak terduga.
        </p>
      </div>

      <div className="border-b-[1px] border-gray-400 mx-[8%] my-10"></div>

      <div className="flex flex-row justify-between items-center w-full h-fit px-[8%] mb-8">
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
      <div className="grid grid-cols-4 w-full h-fit gap-10 px-[8%] mb-20">
        <CardArticlePage />
        <CardArticlePage />
        <CardArticlePage />
        <CardArticlePage />
      </div>

      <Footer />
    </>
  );
};

export default SubArticlePage;
