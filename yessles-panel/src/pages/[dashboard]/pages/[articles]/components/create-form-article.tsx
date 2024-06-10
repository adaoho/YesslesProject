import { BiImageAdd } from "react-icons/bi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { articleFormSchema } from "../data/schema";
import { Separator } from "@/components/ui/separator";
import { ChangeEvent, useEffect, useState } from "react";
import RichTextEditor from "./rich-text-editor";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { articleCreate, articleUpdate } from "@/features/article/articleSlice";
import { useNavigate, useParams } from "react-router-dom";
import { removeSurroundingQuotes } from "@/utils/static";

type ArticleFormValue = {
  title: string;
  description: string;
  body: any;
  thumbnail?: File | any;
};

export function CreateArticle() {
  const [body, setBody] = useState<any>(null);
  const [formArticle, setFormArticle] = useState<ArticleFormValue>({
    title: "",
    description: "",
    body: "",
    thumbnail: null || undefined,
  });
  const [articleId, setArticleId] = useState<number>();
  const [preview, setPreview] = useState<any>(formArticle.thumbnail || "");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const articleItems = useSelector((state: any) => state.article.items);
  const form = useForm<ArticleFormValue>({
    resolver: zodResolver(articleFormSchema),
    defaultValues: formArticle,
  });
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      let editData = articleItems.find((article: any) => article.slug === slug);
      setArticleId(editData.id);

      if (editData) {
        const newFormArticle = {
          title: editData.title,
          description: editData.description,
          body: removeSurroundingQuotes(editData.body),
          thumbnail: editData.thumbnail,
        };
        setBody(removeSurroundingQuotes(editData.body));
        setFormArticle(newFormArticle);
        form.reset(newFormArticle);
        setPreview(editData.thumbnail);
      }
    }
  }, [slug, form.reset]);

  // useEffect(() => {
  //   reset(formArticle);
  // }, [formArticle, reset]);

  function getImageData(event: ChangeEvent<HTMLInputElement>) {
    const dataTransfer = new DataTransfer();
    Array.from(event.target.files!).forEach((image) =>
      dataTransfer.items.add(image)
    );
    const files = dataTransfer.files[0];
    const displayUrl = URL.createObjectURL(event.target.files![0]);
    return { files, displayUrl };
  }

  function onSubmit(data: ArticleFormValue) {
    let newData = {
      ...data,
      thumbnail: formArticle.thumbnail,
      body: body,
    };

    if (slug) {
      // @ts-ignore
      dispatch(articleUpdate(newData, navigate, articleId));
    } else {
      // @ts-ignore
      dispatch(articleCreate(newData, navigate));
    }
  }

  const handleContentChange = (newContent: string) => {
    // setFormArticle({ ...formArticle, body: newContent });
    setBody(newContent);
  };

  const handleSelectThumbnail = (event: any) => {
    let fileSize = event.target.files[0].size;
    let fileType = event.target.files[0].type.split("/")[0];
    let { files, displayUrl } = getImageData(event);

    fileType !== "image"
      ? toast.error("Only Upload Image")
      : fileSize > 200000
      ? toast.error("Maximum File Size 200kb")
      : setPreview(displayUrl);
    setFormArticle({ ...formArticle, thumbnail: files });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex flex-col w-full"
      >
        <div className="flex xl:flex-row flex-col w-full gap-x-3">
          <div className="flex flex-col w-full xl:w-3/5 gap-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Article Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Article Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="gap-y-3 flex flex-col ">
              <FormLabel>Content</FormLabel>
              <RichTextEditor value={body} onChange={handleContentChange} />
            </div>
          </div>
          <Separator orientation="vertical" className="mx-4 hidden xl:block" />
          {/* Right Layout */}
          <div className="flex flex-col md:flex-row xl:flex-col w-full xl:w-2/5 mt-5 xl:mt-0 gap-3">
            <div className="xl:w-full md:w-1/2 w-full flex flex-col pt-1 gap-y-3">
              <FormLabel>Thumbnail</FormLabel>

              <label htmlFor="upload">
                <div
                  className={`relative border-dashed border-gray-400 border-[1px] rounded-lg w-full h-[200px] flex items-center justify-center overflow-hidden ${
                    preview ? "" : "cursor-pointer"
                  } hover:bg-yl-10/10 group transition-all duration-300`}
                >
                  <Input
                    id="upload"
                    type="file"
                    className="hidden"
                    onChange={handleSelectThumbnail}
                    disabled={preview ? true : false}
                  />
                  {preview ? (
                    <>
                      <Button
                        onClick={() => {
                          setPreview("");
                          setFormArticle({
                            ...formArticle,
                            thumbnail: null || undefined,
                          });
                        }}
                        className="absolute right-2 bottom-2 h-[20px] bg-yl-60 hover:bg-yl-30 w-[60px]"
                      >
                        Reset
                      </Button>
                      <img
                        src={preview}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </>
                  ) : (
                    <div className="flex gap-x-3 items-center justify-center text-gray-400">
                      <BiImageAdd className="size-6 text-yl-10" />
                      <p className="group-hover:text-yl-10">
                        Select your thumbnail
                      </p>
                    </div>
                  )}
                </div>
              </label>
            </div>
            <div className="xl:w-full md:w-1/2 w-full">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl className="h-full">
                      <Textarea
                        placeholder="Your Article Description"
                        {...field}
                        className="h-[200px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-center">
          <Button type="submit" className="w-1/2">
            {slug ? "Update Article" : "Create Article"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
