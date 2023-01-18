import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <h1>Welcome home!!!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non facere
          maiores veniam quis similique modi, earum, explicabo soluta, deserunt
          perferendis at commodi vel accusamus molestiae. Quo repellendus rem
          consequuntur molestiae!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non facere
          maiores veniam quis similique modi, earum, explicabo soluta, deserunt
          perferendis at commodi vel accusamus molestiae. Quo repellendus rem
          consequuntur molestiae!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non facere
          maiores veniam quis similique modi, earum, explicabo soluta, deserunt
          perferendis at commodi vel accusamus molestiae. Quo repellendus rem
          consequuntur molestiae!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non facere
          maiores veniam quis similique modi, earum, explicabo soluta, deserunt
          perferendis at commodi vel accusamus molestiae. Quo repellendus rem
          consequuntur molestiae!
        </p>
      </div>
    </>
  );
}
