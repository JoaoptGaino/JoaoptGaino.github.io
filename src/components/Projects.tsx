import Image from "next/image";
import Link from "next/link";

import propertyImg from "../../public/assets/projects_img.jpg";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#00FF43] font-bold">
          Projects
        </p>
        <h2 className="py-4">{"What I've Built"}</h2>
        <div className="grid">
          <div className="relative flex items-center justify-center h-200 w-100 shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#00FF43] to=[#4EFF7C]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={propertyImg}
              alt="Projects image"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Checkout all my projects here!
              </h3>
              <Link href="/projects">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More info
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
