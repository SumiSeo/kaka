import Link from "next/link";
import { useContext } from "react";
import AuthContext from "../stores/authContext";
import styles from "@/styles/NavBar.module.scss";

const NavBar = (): JSX.Element => {
  const user = useContext(AuthContext);
  console.log(user);
  return (
    <div className={styles.navigation}>
      <Link className={styles.navigation__list} href="/">
        <span></span>
      </Link>
      <Link className={styles.navigation__list} href="/Guides">
        <span></span>
      </Link>
      <Link className={styles.navigation__list} href="/Guides">
        <span></span>
      </Link>
      <Link className={styles.navigation__list} href="/Guides">
        <span></span>
      </Link>
    </div>
  );
};

export default NavBar;
