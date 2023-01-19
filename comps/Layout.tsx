import NavBar from "./NavBar";
import styles from "@/styles/Layout.module.scss";
import { ChildrenTypes } from "@/types/ChildrenTypes";

const Layout = ({ children }: ChildrenTypes): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.container__column}>
        <NavBar />
      </div>
      <div className={styles.container__column}>{children}</div>
    </div>
  );
};

export default Layout;
