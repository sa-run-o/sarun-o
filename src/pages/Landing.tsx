import { useInView } from "react-intersection-observer";
import Menubar from "../components/Menubar";
import Home from "../sections/Home";
import About from "../sections/About";
import Project from "../sections/Project";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Contact from "../sections/Contact";
import { useEffect, useRef, useState } from "react";
import useMenuStore from "../stores/menu.store";

const useScrollTo = () => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  const scrollToElement = () => {
    elementRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return { elementRef, scrollToElement };
};

const Landing = () => {
  const { currentPage, setCurrentPage } = useMenuStore();
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const lastPageRef = useRef<string>("HOME");

  // Reusable scroll hooks for all sections
  const homeScroll = useScrollTo();
  const aboutScroll = useScrollTo();
  const projectScroll = useScrollTo();
  const skillsScroll = useScrollTo();
  const experienceScroll = useScrollTo();
  const contactScroll = useScrollTo();

  // useInView setup (Slightly higher threshold to prevent flickering)
  const { ref: homeInViewRef, inView: homeInView } = useInView({
    threshold: 0.75,
  });
  const { ref: aboutInViewRef, inView: aboutInView } = useInView({
    threshold: 0.75,
  });
  const { ref: projectInViewRef, inView: projectInView } = useInView({
    threshold: 0.75,
  });
  const { ref: skillsInViewRef, inView: skillsInView } = useInView({
    threshold: 0.75,
  });
  const { ref: experienceInViewRef, inView: experienceInView } = useInView({
    threshold: 0.75,
  });
  const { ref: contactInViewRef, inView: contactInView } = useInView({
    threshold: 0.75,
  });

  // Assign refs
  const setHomeRefs = (node: HTMLDivElement | null) => {
    homeScroll.elementRef.current = node;
    homeInViewRef(node);
  };

  const setAboutRefs = (node: HTMLDivElement | null) => {
    aboutScroll.elementRef.current = node;
    aboutInViewRef(node);
  };

  const setProjectRefs = (node: HTMLDivElement | null) => {
    projectScroll.elementRef.current = node;
    projectInViewRef(node);
  };

  const setSkillsRefs = (node: HTMLDivElement | null) => {
    skillsScroll.elementRef.current = node;
    skillsInViewRef(node);
  };

  const setExperienceRefs = (node: HTMLDivElement | null) => {
    experienceScroll.elementRef.current = node;
    experienceInViewRef(node);
  };

  const setContactRefs = (node: HTMLDivElement | null) => {
    contactScroll.elementRef.current = node;
    contactInViewRef(node);
  };

  // ✅ Auto-scroll only when clicking menu (Not when manually scrolling)
  useEffect(() => {
    if (isAutoScrolling) return;

    if (currentPage !== lastPageRef.current) {
      setIsAutoScrolling(true);
      lastPageRef.current = currentPage;

      setTimeout(() => {
        switch (currentPage) {
          case "HOME":
            homeScroll.scrollToElement();
            break;
          case "ABOUT":
            aboutScroll.scrollToElement();
            break;
          case "PROJECT":
            projectScroll.scrollToElement();
            break;
          case "SKILLS":
            skillsScroll.scrollToElement();
            break;
          case "EXPERIENCE":
            experienceScroll.scrollToElement();
            break;
          case "CONTACT":
            contactScroll.scrollToElement();
            break;
        }
        setIsAutoScrolling(false);
      }, 200);
    }
  }, [currentPage]);

  // ✅ Detect which section is visible and update `currentPage`
  useEffect(() => {
    if (!isAutoScrolling) {
      if (contactInView && lastPageRef.current !== "CONTACT") {
        setCurrentPage("CONTACT");
        lastPageRef.current = "CONTACT";
      } else if (experienceInView && lastPageRef.current !== "EXPERIENCE") {
        setCurrentPage("EXPERIENCE");
        lastPageRef.current = "EXPERIENCE";
      } else if (skillsInView && lastPageRef.current !== "SKILLS") {
        setCurrentPage("SKILLS");
        lastPageRef.current = "SKILLS";
      } else if (projectInView && lastPageRef.current !== "PROJECT") {
        setCurrentPage("PROJECT");
        lastPageRef.current = "PROJECT";
      } else if (aboutInView && lastPageRef.current !== "ABOUT") {
        setCurrentPage("ABOUT");
        lastPageRef.current = "ABOUT";
      } else if (homeInView && lastPageRef.current !== "HOME") {
        setCurrentPage("HOME");
        lastPageRef.current = "HOME";
      }
    }
  }, [
    homeInView,
    aboutInView,
    projectInView,
    skillsInView,
    experienceInView,
    contactInView,
    isAutoScrolling,
  ]);

  return (
    <div
      className="w-screen h-screen overflow-x-hidden overflow-y-auto bg-[#121212] text-[#EDEDED] snap-y snap-mandatory"
      onScroll={() => setIsAutoScrolling(false)} // Reset auto-scrolling when user scrolls
    >
      {/* Menubar */}
      <Menubar />

      {/* Sections with SNAP SCROLL */}
      <div className="w-full h-screen snap-start" ref={setHomeRefs}>
        <Home />
      </div>
      <div className="w-full h-1/2 snap-start" ref={setAboutRefs}>
        <About />
      </div>
      <div className="w-full h-screen snap-start" ref={setProjectRefs}>
        <Project />
      </div>
      <div className="w-full h-screen snap-start" ref={setSkillsRefs}>
        <Skills />
      </div>
      <div className="w-full h-screen snap-start" ref={setExperienceRefs}>
        <Experience />
      </div>
      <div className="w-full h-screen snap-start" ref={setContactRefs}>
        <Contact />
      </div>
    </div>
  );
};

export default Landing;
