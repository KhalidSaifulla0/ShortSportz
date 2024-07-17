import { Link } from "react-router-dom";
interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedOn: string;
  id: number;
}

const BlogCard = ({
  authorName,
  title,
  content,
  publishedOn,
  id,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="pt-2  w-screen max-w-screen-md	 ">
        <div className="bg-zinc-900 pt-4 pb-6 sm:px-6 lg:px-8">
          <div className="flex  ">
            <div className="">
              <Avatar name={authorName} />
            </div>
            <div className="flex justify-center flex-col font-extralight text-white dark:text-white ml-2 mr-2">
              {authorName}
            </div>
            <div className="flex justify-center flex-col  font-thin text-white dark:text-white ml-2 mr-2">
              {publishedOn}
            </div>
          </div>
          <div className="text-xl font-bold text-white dark:text-white pt-2 ">
            {title}
          </div>
          <div className="text-md font-light pt-2 ">
            {content.slice(0, 100) + "..."}
          </div>
        </div>
      </div>
    </Link>
  );
};

export function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-red-400 rounded-full dark:bg-red-500">
      <span className="text-xs text-red-600 dark:text-red-300">{name[0]}</span>
    </div>
  );
}

export default BlogCard;
