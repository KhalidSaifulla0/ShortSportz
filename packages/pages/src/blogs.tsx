import BlogCard from "@repo/ui/blogCard";
import { AppBar } from "@repo/ui/appbar";
import { useBlogs } from "@repo/hooks/useBlogs";
import BlogsSkeleton from "@repo/ui/blogsSkeleton";
const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading)
    return (
      <div>
        <AppBar />
        <div className="flex justify-center">
          <div className="pt-10">
            <BlogsSkeleton />
            <BlogsSkeleton />
            <BlogsSkeleton />
            <BlogsSkeleton />
            <BlogsSkeleton />
            <BlogsSkeleton />
          </div>
        </div>
      </div>
    );

  return (
    <div className="">
      <div className="">
        <div className="">
          <div>
            <AppBar />
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="">
          <div className="pt-10">
            {blogs.map((blog) => (
              <BlogCard
                id={blog.id}
                authorName={blog.author.name || "Unknown"}
                title={blog.title}
                content={blog.content}
                publishedOn="June 4th 2024"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
