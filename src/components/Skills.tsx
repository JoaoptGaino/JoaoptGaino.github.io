import { SkillProps } from "@/types";
import SkillItem from "./items/SkillItem";
import { useEffect, useState } from "react";

const skills: SkillProps[] = [
  { name: "Java", img: "/assets/techs/java.svg" },
  { name: "Spring Boot", img: "/assets/techs/spring-boot.svg" },
  { name: "Spring Cloud", img: "/assets/techs/spring-boot.svg" },
  { name: "Spring Security", img: "/assets/techs/spring-boot.svg" },
  { name: "JUnit", img: "/assets/techs/java.svg" },
  { name: "Docker", img: "/assets/techs/docker.svg" },
  { name: "Postgres", img: "/assets/techs/postgres.svg" },
  { name: "MongoDB", img: "/assets/techs/mongodb.svg" },
  { name: "Kubernetes", img: "/assets/techs/kubernetes.svg" },
  { name: "Redis", img: "/assets/techs/redis.svg" },
  { name: "RabbitMQ", img: "/assets/techs/rabbitmq.svg" },
  { name: "Git", img: "/assets/techs/github.svg" },
  { name: "Node", img: "/assets/techs/node.svg" },
  { name: "Typescript", img: "/assets/techs/typescript.svg" },
  { name: "NestJS", img: "/assets/techs/nestjs.svg" },
  { name: "Jest", img: "/assets/techs/typescript.svg" },
  { name: "NextJS", img: "/assets/techs/nextjs.svg" },
  { name: "React", img: "/assets/techs/reactjs.svg" },
  { name: "Angular", img: "/assets/techs/angular.svg" },
  { name: "TailwindCSS", img: "/assets/techs/tailwind.svg" },
];

const Skills = () => {
  const [displayedSkills, setDisplayedSkills] = useState<SkillProps[]>([]);
  const [loadMore, setLoadMore] = useState(false);

  const handleLoadMore = () => {
    setDisplayedSkills(skills);
    setLoadMore(true);
  };

  const handleShowLess = () => {
    setDisplayedSkills(skills.slice(0, initialSkillCount));
    setLoadMore(false);
  };

  const initialSkillCount = 8;

  useEffect(() => {
    setDisplayedSkills(skills.slice(0, initialSkillCount));
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
