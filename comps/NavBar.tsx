import Link from "next/link";
import { useContext } from "react";
import AuthContext from "../stores/authContext";
import styles from "@/styles/NavBar.module.scss";

const NavBar = (): JSX.Element => {
  const { user, login, logout, authReady } = useContext(AuthContext);
  console.log(user, login);
  return (
    <div className={styles.navigation}>
      {authReady && (
        <ul>
          {user == null ? (
            <Link onClick={login} className={styles.navigation__list} href="/">
              <span></span>
            </Link>
          ) : (
            <Link
              onClick={logout}
              className={styles.navigation__logout}
              href="/"
            >
              <span></span>
            </Link>
          )}
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
      )}
    </div>
  );
};

export default NavBar;
