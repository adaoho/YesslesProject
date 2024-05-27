import { useSelector } from "react-redux";
import RichTextEditor from "./components/RichTextEditor";
import { useState } from "react";

const MainPage = () => {
  const { userData } = useSelector((state: any) => state.user);
  const [content, setContent] = useState<string>("");

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
  };

  const data = JSON.stringify(content);

  console.log(data);

  return (
    <>
      <div className="flex h-[400px]">
        <div className="flex flex-col w-full">
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            <div className="flex items-center">
              <h1 className="text-lg font-semibold md:text-2xl capitalize">
                {userData.role === "tutor"
                  ? `Selamat Datang Kak ${userData?.full_name.split(" ")[0]}!`
                  : "Selamat Datang Super Admin"}
              </h1>
            </div>
            <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
              <RichTextEditor value={content} onChange={handleContentChange} />
            </div>
          </main>
          <h2>Output</h2>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </>
  );
};

export default MainPage;
