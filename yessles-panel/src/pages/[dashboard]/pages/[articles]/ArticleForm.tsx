import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CreateArticle } from "./components/create-form-article";

const ArticleForm = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  return (
    <>
      <div className="w-full flex flex-col px-4 py-4 h-full gap-y-4">
        {/* Breadcrumb */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink onClick={() => navigate("/articles")}>
                Articles
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                {slug ? "Update Article" : "Create New Article"}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div>
          <h3 className="text-lg font-medium">
            {slug ? "Update Your Article" : "Create Article"}
          </h3>
          <p className="text-sm text-muted-foreground">
            Every articles will be reviewed by Yessles Super Admin before it
            release to{" "}
            <Link to={"https://yessles.id/article"} target="_blank">
              <u>Yessles Main Article Page</u>
            </Link>
          </p>
        </div>
        <Separator />

        {/* Input Layout */}
        <div className="flex gap-x-4 w-full">
          <CreateArticle />
        </div>
      </div>
    </>
  );
};

export default ArticleForm;
