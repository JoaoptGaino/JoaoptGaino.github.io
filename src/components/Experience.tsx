import { FaSuitcase } from "react-icons/fa";
import ExperienceItem from "./items/ExperienceItem";
import { ExperienceProps } from "@/types";

const experiences: ExperienceProps[] = [
  {
    companyName: "Inmetrics",
    position: "Full Stack Developer",
    description:
      "Development of web application using ReactJS, Back-end Microservices using Spring Boot and BFF Architecture implemented with NestJS",
    from: "Jun 2022",
    to: "Present",
    skills:
      "ReactJS, NextJS, NodeJS, NestJS, Java, Spring Boot, OracleDB, PostgreSQL, MongoDB, Docker, RabbitMQ, Redis",
  },
  {
    companyName: "Eureka Labs",
    position: "Full Stack Developer Junior",
    description:
      "Development of web application using ReactJS and Back-end api using NodeJS frameworks, such as FeathersJS and NestJS.",
    from: "Jan 2021",
    to: "Jun 2022",
    skills:
      "ReactJS, NextJS, NodeJS, FeathersJS, NestJS, PrismaORM, PostgreSQL",
  },
  {
    companyName: "Smart Inovações",
    position: "Full Stack Developer Intern",
    description:
      "Development of web pages using HTML, CSS, JavaScript and php. All together with MySQL database. Also developed desktop application using Visual Basic 6",
    from: "Jan 2020",
    to: "Nov 2020",
    skills: "HTML, CSS, JavaScript, PHP, MySQL, Visual Basic 6",
  },
];

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
