import Layout from "./Layout";
import start from "../assets/start.mp4";

const Home = () => {
  return (
    <Layout>
      <div>
        <div className="absolute left-0 top-0">
          <video autoPlay loop muted playsInline>
            <source src={start} type="video/mp4" />
          </video>
        </div>
        <div className="absolute right-4 top-1/3 w-[calc(50%-16px)] mix-blend-difference">
          <div className="flex items-end">
            <div className="text-8xl font-bold mr-3">SARUN</div>
            <div className=" font-light">FULLSTACK DEVELOPER</div>
          </div>
          <div className="text-8xl font-bold">OLANKRANOK</div>
          <div className="bg-[rgba(255,255,255,0.1)] w-full border border-[rgba(209,213,219,0.3)] rounded-xl p-5 backdrop-blur-md">
            Building modern, interactive, and responsive web applications with
            React, TypeScript, and cutting-edge UI/UX design.
          </div>
          <div className="flex justify-between mt-3 [&>div]:flex [&>div]:rounded-xl [&>div]:border [&>div]:border-[rgba(209,213,219,0.3)] [&>div]:hover:bg-[rgba(255,255,255,0.1)] [&>div]:py-3 [&>div]:px-14 [&>div]:cursor-pointer">
            <div className="">
              <div></div>
              <div>Resume</div>
            </div>
            <div>
              <div></div>
              <div>Github</div>
            </div>
            <div>
              <div></div>
              <div>Linkedin</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Home;
