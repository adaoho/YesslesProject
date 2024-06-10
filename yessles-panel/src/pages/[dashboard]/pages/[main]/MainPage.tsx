import { Bs1Circle, Bs2Circle, Bs3Circle } from "react-icons/bs";
import { GiAchievement } from "react-icons/gi";
import { MdOutlineArticle } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiPlusCircle } from "react-icons/bi";
import { useSelector } from "react-redux";
import SeoComp from "@/components/SeoComp";
import { Link } from "react-router-dom";
import LatestCardArticle from "./components/LatestCardArticle";
import { motion } from "framer-motion";
import { getAuthorLeaderboard } from "@/utils/static";

const MainPage = () => {
  const { userData } = useSelector((state: any) => state.user);
  const userItems = useSelector((state: any) => state.user.items);
  const articleItems = useSelector((state: any) => state.article.items);
  const userRole = userData.role;

  let userActive = userItems.filter(
    (user: any) => user.status === "ACTIVE"
  ).length;
  let userInactive = userItems.filter(
    (user: any) => user.status === "INACTIVE"
  ).length;
  let articleActive = articleItems.filter(
    (article: any) => article.status === "ACTIVE"
  ).length;
  let articlePending = articleItems.filter(
    (article: any) => article.status === "PENDING"
  ).length;
  let articleInactive = articleItems.filter(
    (article: any) => article.status === "INACTIVE"
  ).length;
  let leaderboard = getAuthorLeaderboard(articleItems);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      <SeoComp
        title="Yessles Panel Dashboard"
        description="Yessles: Bimbel No. 1 di Madiun"
      />
      <div className="flex h-[400px]">
        <div className="flex flex-col w-full">
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            {/* Picture Background */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex rounded-xl overflow-hidden h-[300px] w-full  relative"
            >
              {/* Background Absolute */}
              <div className="bg-gradient-to-t from-black/80 to-black/20 w-full">
                <img
                  src="https://ik.imagekit.io/a1hblgyox/banner_panel_yessles.jpg?updatedAt=1717925094546"
                  className="object-cover w-full h-full -z-10 absolute "
                />
              </div>
              {/* Main Dashboard */}
              <div className="absolute w-full h-fit p-8 flex font-lexend flex-col">
                <div className="flex gap-x-2 items-center">
                  <div
                    className={`px-3 py-1 flex justify-center items-center ${
                      userRole == "admin" ? "bg-yl-30" : "bg-yl-10"
                    }  rounded-xl text-white text-[12px]`}
                  >
                    {userData.role == "admin" ? "Yess Admin" : "Yess Tutor"}
                  </div>
                  <h1 className="text-white">Welcome to Yessles Panel</h1>
                </div>
              </div>

              {/* Main Statistic */}
              <div
                className={`absolute w-full h-fit px-8 ${
                  userData?.role === "admin" ? "py-8" : "py-2"
                } xl:py-8 flex font-lexend flex-row gap-x-5 xl:flex-col bottom-0 xl:bottom-2 text-white`}
              >
                <div className="flex flex-col mb-5 -mt-2">
                  <h1 className="text-[24px]">
                    Hai, Kak{" "}
                    {userData?.role === "admin"
                      ? "Yessles Admin"
                      : userData?.full_name.split(" ")[0]}
                    !
                  </h1>
                  <p className="text-[12px] font-light -mt-1">
                    Berikut adalah statistik kamu:
                  </p>
                </div>

                {/* Statistik Grid */}
                <div className="flex flex-col xl:flex-row gap-x-5 w-fit gap-y-5">
                  {/* Stats Grid */}
                  {userData?.role == "admin" && (
                    <div className={`flex flex-row gap-x-2 w-fit`}>
                      <div className="bg-yl-10 px-2 rounded-lg items-center flex">
                        <AiOutlineUser />
                      </div>
                      <div className="flex flex-col text-[10px]">
                        <p>Yessles Users Status</p>
                        <div className="flex gap-x-3">
                          <div className="flex gap-x-1 items-center">
                            <AiOutlineCheckCircle /> Active: {userActive}
                          </div>
                          <div className="flex gap-x-1 items-center">
                            <AiOutlineCheckCircle /> Inactive: {userInactive}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* Stats Grid */}
                  <div className="flex flex-row gap-x-2">
                    <div className="bg-yl-10 px-2 rounded-lg items-center flex">
                      <MdOutlineArticle />
                    </div>
                    <div className="flex flex-col text-[10px]">
                      <p>
                        {userData?.role === "admin"
                          ? "Yessles"
                          : `Kak ${userData?.full_name.split(" ")[0]}`}{" "}
                        Articles Status
                      </p>
                      <div className="flex gap-x-3">
                        <div className="flex gap-x-1 items-center">
                          <AiOutlineCheckCircle /> Active: {articleActive}
                        </div>
                        <div className="flex gap-x-1 items-center">
                          <AiOutlineCheckCircle /> Pending: {articlePending}
                        </div>
                        <div className="flex gap-x-1 items-center">
                          <AiOutlineCheckCircle /> Inactive: {articleInactive}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Stats Grid */}
                  {userData?.role == "admin" && (
                    <div className="flex flex-row gap-x-2">
                      <div className="bg-yl-10 px-2 rounded-lg items-center flex">
                        <GiAchievement />
                      </div>
                      <div className="flex flex-col text-[10px]">
                        <p>Yess Tutor Article Creator Leader</p>
                        <div className="flex gap-x-3">
                          <div className="flex gap-x-1 items-center">
                            <Bs1Circle />
                            {leaderboard[0]?.email} - {leaderboard[0]?.count}
                          </div>
                          <div className="flex gap-x-1 items-center">
                            <Bs2Circle /> {leaderboard[1]?.email} -{" "}
                            {leaderboard[1]?.count}
                          </div>
                          <div className="flex gap-x-1 items-center">
                            <Bs3Circle /> {leaderboard[2]?.email} -{" "}
                            {leaderboard[2]?.count}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col gap-y-3 font-lexend">
              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="font-bold text-[18px]"
              >
                Latest Article
              </motion.h1>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 lg:grid-cols-4 gap-4 h-[240px]"
              >
                {/* Card of Latest Article */}
                {articleItems
                  ?.map((data: any, index: number) => {
                    return (
                      <motion.div key={index} variants={itemVariants}>
                        <LatestCardArticle data={data} />
                      </motion.div>
                    );
                  })
                  .slice(0, 3)}

                <motion.div variants={itemVariants}>
                  <Link to={"/articles/new-article"} className="h-full">
                    <div className="bg-white text-center h-full text-gray-300 hover:bg-yl-10 hover:text-white transition-all rounded-xl border flex flex-col p-4 border-dashed border-gray-300 justify-center items-center">
                      <BiPlusCircle className="size-12" />
                      Create New Article
                    </div>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default MainPage;
