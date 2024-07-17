import { useBlog } from "@repo/hooks/useBlog";
import { AppBar } from "@repo/ui/appbar";
import BlogComponent from "@repo/ui/blogComponent";
import BlogSkeleton from "@repo/ui/blogSkeleton";
import { useParams } from "react-router-dom";

export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: Number(id),
  });
  if (loading)
    return (
      <div>
        <AppBar />
        <div className="flex justify-center">
          <div className="pt-10">
            <BlogSkeleton />
          </div>
        </div>
      </div>
    );

  return (
    <div>
      <BlogComponent blog={blog} />
    </div>
  );
};

export default Blog;
