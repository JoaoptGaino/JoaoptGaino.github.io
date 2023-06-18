import { SkillProps } from "@/types";
import SkillItem from "./items/SkillItem";
import { useEffect, useState } from "react";
import { skills } from "@/static/skills";

const Skills = () => {
  const [displayedSkills, setDisplayedSkills] = useState<SkillProps[]>([]);
  const [loadMore, setLoadMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleLoadMore = () => {
    setDisplayedSkills(skills);
    setLoadMore(true);
  };

  const handleShowLess = () => {
    setDisplayedSkills(skills.slice(0, initialSkillCount));
    setLoadMore(false);
  };

  const initialSkillCount = isMobile ? 2 : 8;

  useEffect(() => {
    setDisplayedSkills(skills.slice(0, initialSkillCount));
  }, [initialSkillCount]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#00FF43] font-bold">
          Skills
        </p>
        <h2 className="py-4">What I can do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedSkills.map((skill) => (
            <SkillItem key={skill.name} name={skill.name} img={skill.img} />
          ))}
        </div>
        {!loadMore ? (
          <button
            className="py-2 px-4 mt-4 bg-gray-600 text-white rounded-md"
            onClick={handleLoadMore}
          >
            Load more
          </button>
        ) : (
          <button
            className="py-2 px-4 mt-4 bg-gray-600 text-white rounded-md"
            onClick={handleShowLess}
          >
            Show less
          </button>
        )}
      </div>
    </div>
  );
};

export default Skills;
