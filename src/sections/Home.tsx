import { FileDown, Github, Linkedin } from "lucide-react";
import Layout from "./Layout";
import homeVideo from "../assets/home-video.mp4";
const Home = () => {
  return (
    <Layout>
      <div>
        <div className="absolute left-0 top-0 w-full h-full overflow-hidden inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src={homeVideo} type="video/mp4" />
          </video>
        </div>
        <div className="absolute right-4 top-1/3 w-[calc(50%-16px)] mix-blend-difference">
          <div className="lg:flex lg:items-end">
            <div className="text-2xl font-bold mr-3 lg:text-8xl ">SARUN</div>
            <div className=" font-light text-xs">FULLSTACK DEVELOPER</div>
          </div>
          <div className="text-2xl font-bold lg:text-8xl">OLANKRANOK</div>
          <div className="text-sm bg-[rgba(255,255,255,0.1)] w-full border border-[rgba(209,213,219,0.3)] rounded-xl p-5 backdrop-blur-md lg:text-base">
            Building modern, interactive, and responsive web applications with
            React, TypeScript, and cutting-edge UI/UX design.
          </div>
          <div className="lg:flex lg:justify-between [&>div]:mt-3  [&>div]:flex [&>div]:rounded-xl [&>div]:border [&>div]:border-[rgba(209,213,219,0.3)] [&>div]:hover:bg-[rgba(255,255,255,0.1)] [&>div]:py-3 [&>div]:px-14 [&>div]:cursor-pointer">
            <div className="">
              <div className="mr-1">
                <FileDown />
              </div>
              <div>Resume</div>
            </div>
            <div>
              <div className="mr-1">
                <Github />
              </div>
              <div>Github</div>
            </div>
            <div>
              <div className="mr-1">
                <Linkedin />
              </div>
              <div>Linkedin</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Home;
