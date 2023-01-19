import Link from "next/link";
import styles from "@/styles/NavBar.module.scss";

const NavBar = (): JSX.Element => {
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
