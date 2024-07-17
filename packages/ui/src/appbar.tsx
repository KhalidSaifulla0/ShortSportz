import { Avatar } from "./blogCard";
import { Link } from "react-router-dom";

export const AppBar = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-8 py-4 bg-zinc-900 ">
        <div className="flex justify-center flex-grow cursor-pointer">
          <Link to="/blogs">
            <div className="flex items-center">
              <span className="text-2xl text-white ">Short</span>
              <span className="text-2xl text-red-500">Sportz</span>
            </div>
          </Link>
        </div>
        <Link to="/newblog">
          <div className="pr-4">
            <svg
              className="h-8 w-8 cursor-pointer"
              svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </div>
        </Link>
        <div>
          <Avatar name="John Doe" />
        </div>
      </div>
    </div>
  );
};
