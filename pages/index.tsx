import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className={styles.home}>
        <h1 className={styles.home__title}>Hi, there!</h1>
        <h2 className={styles.home__description}>
          Thank you for coming again. I am here for help you to manage your
          expenses while you study abroad.
        </h2>
      </div>
    </>
  );
}
