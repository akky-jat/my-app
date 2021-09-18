import Head from "next/head";
import Image from "next/image";
import { Footer } from "../compornents/Footer";
import { Main } from "../compornents/Main";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Pages</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main page="about" />
      <Footer />
    </div>
  );
}
