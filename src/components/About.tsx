import { about_p1, about_p2 } from "@/static/information";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md-h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tacking-widest text-[#00FF43] font-bold">
            About
          </p>
          <h2 className="py-4">Who am I</h2>
          <p className="py-2 text-gray-600">{about_p1}</p>
          <p className="py-2 text-gray-600">{about_p2}</p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            <Link href="/#projects">Check out some of my latest projects.</Link>
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src="/assets/laptop_img.jpg"
            alt="Image"
            width="500"
            height="150"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
