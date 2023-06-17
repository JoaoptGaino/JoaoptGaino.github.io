import Image from "next/image";
import propertyImg from "../../public/assets/eu.jpg";
import SocialMediaComponent from "./items/SocialMediaComponent";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center flex flex-col">
      <div className="flex-grow max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 font-bold">
            LETS BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, Im <span className="text-[#00FF43]">João Gaino</span>
          </h1>
          <div className="flex flex-col items-center">
            <Image
              className="rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300"
              src={propertyImg}
              alt="profile_pic"
              width={150}
              height={150}
            />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="py-2 text-gray-700">Software Engineer</h1>
            <p className="py-4 text-gray-600 max-w-[70%] m-auto">
              Im a software engineer based in Brazil, I love to build things for
              the web.
            </p>
          </div>
          <SocialMediaComponent
            containerStyle="flex items-center justify-between max-w-[330px] m-auto py-4"
            iconStyle="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
