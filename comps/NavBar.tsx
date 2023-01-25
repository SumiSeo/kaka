import Link from "next/link";

import styles from "@/styles/NavBar.module.scss";

const NavBar = (): JSX.Element => {
  return (
    <div className={styles.navigation}>
      <ul>
        <Link className={styles.navigation__list} href="/">
          <span></span>
        </Link>
        <Link className={styles.navigation__list} href="/Expenses">
          <span></span>
        </Link>
        <Link className={styles.navigation__list} href="/Incomes">
          <span></span>
        </Link>
        <Link className={styles.navigation__list} href="/Investment">
          <span></span>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
