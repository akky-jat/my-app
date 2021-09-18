import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Footer } from "../compornents/Footer";
import { Main } from "../compornents/Main";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Pages</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main page="index" />
      <Footer />
    </div>
  );
}
