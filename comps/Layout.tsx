import NavBar from "./Navbar";
import { ChildrenTypes } from "@/types/ChildrenTypes";

const Layout = ({ children }: ChildrenTypes): JSX.Element => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
