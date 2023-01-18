import Navbar from "./Navbar";
import { ChildrenTypes } from "@/types/ChildrenTypes";

const Layout = ({ children }: ChildrenTypes): JSX.Element => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
