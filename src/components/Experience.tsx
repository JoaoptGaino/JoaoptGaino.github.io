import { experiences } from "@/static/experience";
import ExperienceItem from "./items/ExperienceItem";

const Experience = () => {
  return (
    <div id="experience" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#00FF43] font-bold">
          Experience
        </p>
        <h2 className="py-4">Where Ive worked</h2>

        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Experience;
