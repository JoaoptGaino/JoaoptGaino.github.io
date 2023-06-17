import { ProjectProps } from "@/types";
import propertyImg from "../../public/assets/laptop_img.jpg";
import ProjectItem from "./items/ProjectItem";

const projects: ProjectProps[] = [
  {
    title: "Property Finder",
    backgroundImg: propertyImg,
    projectUrl: "/",
    tech: "React, Next.js, TailwindCSS",
  },
  {
    title: "Property Finder",
    backgroundImg: propertyImg,
    projectUrl: "/",
    tech: "React, Next.js, TailwindCSS",
  },
  {
    title: "Property Finder",
    backgroundImg: propertyImg,
    projectUrl: "/",
    tech: "React, Next.js, TailwindCSS",
  },
  {
    title: "Property Finder",
    backgroundImg: propertyImg,
    projectUrl: "/",
    tech: "React, Next.js, TailwindCSS",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#00FF43] font-bold">
          Projects
        </p>
        <h2 className="py-4">What Ive Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
