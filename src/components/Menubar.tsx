const DEFAULT_MENU: string[] = [
  "HOME",
  "ABOUT",
  "PROJECT",
  "SKILLS",
  "EXPERIENCE",
  "CONTACT",
];
const Menubar = () => {
  return (
    <div className="fixed left-0 top-0 h-14 w-full  flex items-center px-4 justify-between mix-blend-difference z-10">
      <div className="font-bold cursor-pointer">RUN</div>
      <div className="flex [&>div]:ml-3">
        <div className="cursor-default">[</div>
        {DEFAULT_MENU.map((menu) => {
          return (
            <div
              className="cursor-pointer relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1px] after:transition-[width] after:duration-500 after:ease-in-out hover:after:w-full hover:after:bg-white hover:font-bold hover:text-lg duration-500"
              key={menu}
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
