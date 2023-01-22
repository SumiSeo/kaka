import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const welcomeMsg =
    "Thank you for coming again. I am here for help you to manage your expenses while you study abroad.";
  return (
    <>
      <div className={styles.home}>
        <h1 className={styles.home__title}>Hi, there!</h1>
        <h2 className={styles.home__description}>{welcomeMsg}</h2>
      </div>
    </>
  );
}
