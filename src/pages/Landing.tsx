import { useInView } from "react-intersection-observer";
import Menubar from "../components/Menubar";
import Home from "../sections/Home";
import Introduce from "../sections/Introduce";

const Landing = () => {
  const { ref: homeRef, inView: homeInView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const { ref: introduceRef, inView: introduceInView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-auto bg-[#121212] text-[#EDEDED] snap-y snap-mandatory">
      <Menubar />
      <div className="w-full h-full" ref={homeRef}>
        <Home />
      </div>
      <div className="w-full h-1/2" ref={introduceRef}>
        <Introduce />
      </div>
    </div>
  );
};
export default Landing;
