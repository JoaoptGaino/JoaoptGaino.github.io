import { GithubProjectProps } from "@/types";
import Link from "next/link";
import { MdInsertLink } from "react-icons/md";
import { AiOutlineStar, AiOutlineFork } from "react-icons/ai";

const GithubProjectsItem = ({
  name,
  fullName,
  description,
  stars,
  url,
  forks,
  language,
}: GithubProjectProps) => {
  return (
    <Link
      className="card shadow-lg compact bg-base-100 cursor-pointer"
      href={url}
      key={name}
      onClick={(e) => {
        e.preventDefault();
        window?.open(url, "_blank");
      }}
    >
      <div className="flex justify-between flex-col p-8 h-full w-full">
        <div>
          <div className="flex items-center">
            <div className="card-title text-lg tracking-wide flex text-base-content opacity-60">
              <MdInsertLink className="my-auto mr-0.5" />
              <p className="font-bold text-gray-900 dark:text-[#00ff43]">
                {name}
              </p>
            </div>
          </div>
          <p className="mb-5 mt-1 text-base-content text-opacity-60 text-sm font-semibold text-gray-900 dark:text-[#4EFF7C]">
            {description ? description : "No description"}
          </p>
        </div>
        <div className="flex justify-between text-sm text-base-content text-opacity-60 truncate">
          <div className="flex flex-grow">
            <span className="mr-3 flex items-center">
              <AiOutlineStar className="mr-0.5" />
              <span>{stars}</span>
            </span>
            <span className="flex items-center">
              <AiOutlineFork className="mr-0.5" />
              <span>{forks}</span>
            </span>
          </div>
          <div>
            <span className="flex items-center">
              <div className="w-3 h-3 rounded-full mr-1 opacity-60" />
              <span>{language}</span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GithubProjectsItem;
