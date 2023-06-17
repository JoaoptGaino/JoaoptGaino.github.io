import { ExperienceProps } from "@/types";
import { calculateDate } from "@/utils/date.util";
import { chunkString } from "@/utils/string.util";
import { FaBuilding, FaArrowRight } from "react-icons/fa";

const ExperienceItem = ({
  companyName,
  position,
  description,
  from,
  to,
  skills,
}: ExperienceProps) => {
  return (
    <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {from} - {to}
      </time>
      <div className="flex items-center mb-2 space-x-2">
        <p className="mb-1 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
          {calculateDate(from, to)}
        </p>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-[#00FF43]">
        {companyName}
      </h3>
      <h4 className="text-lg font-semibold text-gray-900 dark:text-[#4EFF7C]">
        {position}
      </h4>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        <span className="inline-block md:max-w-sm lg:max-w-xl">
          {description}
        </span>
      </p>
      <p className="text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
        {skills}
      </p>
    </li>
  );
};

export default ExperienceItem;
