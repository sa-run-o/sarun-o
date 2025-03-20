import { JSX } from "react";

interface ILayout {
  children: JSX.Element;
}
const Layout = ({ children }: ILayout) => {
  return (
    <div className="w-full h-full overflow-x-hidden overflow-y-hidden snap-always snap-start relative">
      {children}
    </div>
  );
};
export default Layout;
