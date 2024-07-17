import { Blog } from "@repo/hooks/useBlog";
import { AppBar } from "./appbar";

const BlogComponent = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <AppBar />
      <div className="flex justify-center  pt-10">
        <div className="px-10  pt-200  py-20 max-w-screen-xl pt-12  ">
          <div className="text-5xl font-extrabold ">{blog.title}</div>
          <div className="flex justify-between">
            <div className=" text-slate-500 pt-2">{blog.author.name}</div>

            <div className="text-slate-500 pt-2">Post on June 4th, 2023</div>
          </div>

          <div className="pt-10">{blog.content}</div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default BlogComponent;
