const BlogsSkeleton = () => {
  return (
    <div role="status" className="animate-pulse">
      <div className="pt-2  w-screen max-w-screen-md	 ">
        <div className="bg-zinc-900 pt-4 pb-6 sm:px-6 lg:px-8">
          <div className="flex  ">
            <div className="">
              <div className="h-4 w-4 rounded-full bg-gray-700 max-w-[360px] mb-4"></div>
            </div>
            <div className="flex justify-center flex-col font-extralight text-white dark:text-white ml-2 mr-2">
              <div className="h-2 rounded-full bg-gray-700 mb-2.5"></div>
            </div>
            <div className="flex justify-center flex-col  font-thin text-white dark:text-white ml-2 mr-2">
              <div className="h-2 rounded-full bg-gray-700 mb-2.5"></div>
            </div>
          </div>
          <div className="text-xl font-bold text-white dark:text-white pt-2 ">
            <div className="h-2 rounded-full bg-gray-700 mb-2.5"></div>
          </div>
          <div className="text-md font-light pt-2 ">
            <div className="h-2 rounded-full bg-gray-700 mb-2.5"></div>
          </div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default BlogsSkeleton;
