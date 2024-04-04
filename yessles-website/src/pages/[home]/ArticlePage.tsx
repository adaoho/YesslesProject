import CardArticlePage from "./components/CardArticlePage";
const ArticlePage = () => {
  return (
    <>
      <section id="hero">
        <div className="w-full h-fit mt-[8%] px-[8%] flex flex-col justify-start items-center gap-y-5 pb-[5%]">
          {/* Header */}
          <div className="w-full h-[100px] bg-yl-60 rounded-lg flex justify-center items-center text-white font-lexend relative">
            <h1 className="text-[22px]">Jelajahi Cerita Yessles</h1>
          </div>

          {/* Card Component Article */}
          <div className="grid grid-cols-4 w-full h-fit gap-4">
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
        </div>
      </section>
    </>
  );
};

export default ArticlePage;
