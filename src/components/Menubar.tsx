import { Menu } from "lucide-react";
import { useState } from "react";
type MENU_TYPE =
  | "HOME"
  | "ABOUT"
  | "PROJECT"
  | "SKILLS"
  | "EXPERIENCE"
  | "CONTACT";
const DEFAULT_MENU: MENU_TYPE[] = [
  "HOME",
  "ABOUT",
  "PROJECT",
  "SKILLS",
  "EXPERIENCE",
  "CONTACT",
];

const Menubar = () => {
  const [currentPage, setCurrentPage] = useState<MENU_TYPE>("HOME");
  const [isOpenMenuMobile, setIsOpenMenuMobile] = useState(false);
  const handleCloseMenu = () => {
    setIsOpenMenuMobile(false);
  };
  const handleOpenMenu = () => {
    setIsOpenMenuMobile(true);
  };
  const handleSelectPage = (page: MENU_TYPE) => {
    setCurrentPage(page);
  };
  return (
    <div
      className={`fixed left-0 top-0 h-14 w-full  flex items-center px-4 justify-between ${
        isOpenMenuMobile ? "" : "mix-blend-difference"
      } z-10`}
    >
      {isOpenMenuMobile && (
        <div
          className="fixed left-0 top-0 w-full h-full"
          onClick={() => handleCloseMenu()}
        >
          <div
            className="fixed left-0 bottom-0 h-11/12 bg-[rgba(255,255,255,0.9)] w-full border border-[rgba(209,213,219,1)] rounded-t-xl z-50 flex flex-col justify-evenly items-center text-5xl cursor-pointer"
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            {DEFAULT_MENU.map((menu) => {
              return (
                <div
                  className=" text-black"
                  onClick={() => {
                    handleSelectPage(menu);
                  }}
                >
                  {menu}
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div className="font-bold cursor-pointer">RUN</div>
      <div
        className="inline cursor-pointer md:hidden"
        onClick={() => handleOpenMenu()}
      >
        <Menu />
      </div>
      <div className="hidden md:flex [&>div]:ml-3">
        <div className="cursor-default">[</div>
        {DEFAULT_MENU.map((menu) => {
          return (
            <div
              className="cursor-pointer relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1px] after:transition-[width] after:duration-500 after:ease-in-out hover:after:w-full hover:after:bg-white hover:font-bold hover:text-lg duration-500"
              key={menu}
              onClick={() => {
                handleSelectPage(menu);
              }}
            >
              {menu}
            </div>
          );
        })}
        <div className="cursor-default">]</div>
      </div>
    </div>
  );
};
export default Menubar;
