import Menubar from "../components/Menubar";
import Home from "../sections/Home";

const Landing = () => {
  // px-4
  return (
    <div className="w-screen h-screen bg-[#121212] text-[#EDEDED]">
      <Menubar />
      <div className="w-full h-full">
        <Home />
      </div>
    </div>
  );
};
export default Landing;
